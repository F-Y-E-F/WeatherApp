import './App.css';
import MainConent from './components/main_content/MainContent';
import NextWeekCards from './components/NextWeekCards/NextWeekCards';
import WeatherStats from './components/WeatherStats/WeatherStats'
function App() {
  return (
    <div className="App">
      <MainConent/>
      <WeatherStats/>
      <NextWeekCards/>
    </div>
  );
}

export default App;
  