import { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import getWeather from "./api";
import CustomNavbar from "./components/Navbar";
import SearchSection from "./components/SearchSection";
import SearchHistory from "./components/SearchHistory";
import moment from "moment";

function App() {
  const [cf, toggleTemperature] = useState("f");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState(null);
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getWeather("Singapore", "SG").then((resp) => {
      setWeather(resp);
    });
  }, []);

  const toggleCf = () => {
    if (cf === "c") toggleTemperature("f");
    else toggleTemperature("c");
  };

  const onChange = (e) => {
    setCity(e.target.value);
  };

  const onCountryChange = (e) => {
    if (e && e.code) setCountry(e.code);
    else setWeather(null);
  };

  const search = (index = null) => {
    let cityQ = index != null ? history[index].city : city;
    let countryQ = index != null ? history[index].country : country;
    getWeather(cityQ, countryQ).then((resp) => {
      if (resp) {
        addHistory(resp.name, resp.sys.country);
        setWeather(resp);
      } else {
        setWeather(null);
      }
    });
  };

  const addHistory = (city, country) => {
    let newHistory = Array.from(history);
    newHistory.push({
      timestamp: moment().format("HH:MM:SS a"),
      city,
      country,
    });
    setHistory(newHistory);
  };

  const removeHistory = (index) => {
    let newHistory = Array.from(history);
    newHistory.splice(index, 1);
    setHistory(newHistory);
  };

  return (
    <>
      <CustomNavbar title="Today's Weather" cf={cf} toggleCf={toggleCf} />
      <Container fluid="md" className="mt-2 mb-2">
        <Card>
          <Card.Body>
            <SearchSection
              cf={cf}
              city={city}
              weather={weather}
              canSubmit={!(city || country)}
              onChange={onChange}
              onCountryChange={onCountryChange}
              onSubmit={search}
            />
            <hr />
            <SearchHistory
              history={history}
              remove={removeHistory}
              search={search}
            />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default App;
