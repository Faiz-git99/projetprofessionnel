
import logo from '../logo.svg';
import '../styles/App.css'
import Navbar from './navbar';
import Apropos from './apropos';
import Fonctionnements from './Fonctionnement';

function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <Apropos/>
      <Fonctionnements/>
    </div>
  );
}

export default App;
