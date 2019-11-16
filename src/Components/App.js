import React from 'react';
import { BrowserRouter as Router , Route, Link} from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import HomePage from '../Components/HomePage';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

class App extends React.Component {
  render() {
//function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
      </div>
    </Router>
  );
  }
}

export default App;
