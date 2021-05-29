import logo from './logo.svg';
import './App.css';
import CustomNavbar from './components/Navbar';
import { Card, Navbar, Container, Form, Row, Col } from 'react-bootstrap';
import SearchSection from './components/SearchSection';
import SearchHistory from './components/SearchHistory';

function App() {
  return (
    <>
      <CustomNavbar title="Today's Weather" />
      <Container fluid="md" className="mt-2 mb-2">
        <Card >
          <Card.Body>
            <SearchSection/>
            <hr/>
            <SearchHistory/>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}




export default App;
