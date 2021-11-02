import './App.css';
import TimeStamp from './models/TimeStamp';
import ClockInButton from './Components/ClockInButton/ClockInButton';
import ClockOutButton from './Components/ClockOutButton/ClockOutButton';

function App() {
  const timeStamp = new TimeStamp();
  return (
    <div>
      <div className="clockButtons">
        <ClockInButton timeStamp={timeStamp} />
        <ClockOutButton timeStamp={timeStamp} />
      </div>
    </div>
  );
}

export default App;
