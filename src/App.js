import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Phones from './components/Phones';
import Items from './components/Items';


function App() {
  return (
     <div className="main-phone-app">
       <Nav />
       <Phones />
       <Items />
    </div>
  );
}

export default App;
