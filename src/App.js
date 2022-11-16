import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/featurs/Header/Header';
import Home from "./components/pages/Home";
import Footer from "./components/featurs/Footer/Footer"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Home/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
