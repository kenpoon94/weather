import axios from "axios";
const { APIKEY } = process.env;

const getWeather = async (city, countryCode) => {
  const query = `${city},,${countryCode}`;

  try {
    const resp = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${APIKEY || "1d97cd7d06b1963087194e20b0715e66"}`
    );
    return resp.data
  } catch (err) {
    console.log(err);
  }
};

export default getWeather;
