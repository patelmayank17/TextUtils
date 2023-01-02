import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About'
import {
  //BrowserRouter as Router,
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, alertType) => {
    setAlert({
      msg: message,
      type: alertType
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);

    setInterval(() => {
      document.title = "TextUtils is amazing!";
    }, 2000);

    setInterval(() => {
      document.title = "Install TextUtils now!";
    }, 1500);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode activated!", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode activated!", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <div>
      <Router>
        <NavBar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" exact element={<About />} />
          
            <Route path="/" exact element={<TextForm heading="Enter text to Analyze here" mode={mode} showAlert={showAlert} />} />
              
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
