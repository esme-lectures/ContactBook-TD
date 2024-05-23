import './App.css';
import { MyAppBar } from './components/MyAppBar';
import { AboutUs } from './pages/about-us/AboutUs';
import { Home } from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <MyAppBar />
      <Home />
    </div>
  );
}

export default App;
