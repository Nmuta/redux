import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Phones from './components/Phones';


function App() {
  return (
     <div className="main-phone-app">
       <Nav />
       <Phones />
    </div>
  );
}

export default App;
