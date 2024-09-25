import './App.css';
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import Paysb from './components/Paysb';
import Home from './pages/Home';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      < Home ></Home>
      <Counter></Counter>
      <Paysb></Paysb>
      
    </div> 
  );
}

export default App;
