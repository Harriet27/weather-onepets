import './App.css';
import { useGetWeather } from './apis/hooks/weather';
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LineElement,
  BarElement,
  PointElement,
  LinearScale,
} from 'chart.js';
import { formatDate } from './utils/date';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
);

function App() {
  const {
    data: weatherData,
    isLoading,
    error,
  } = useGetWeather();

  if (error) return error;
  if (isLoading) return null;

  return (
    <div className="App" style={{ margin: '1.5rem' }}>
      <h1>Weather Line Chart</h1>
      <div style={{ margin: '1.5rem 0' }}>
        <p>
          <b>Time Now:</b> {formatDate(weatherData.current.time)}
        </p>
        <p>
          <b>Temperature Now:</b> {weatherData.current.temperature_2m}
        </p>
      </div>
      <Line
        data={{
          labels: [
            "00:00",
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00",
          ],
          datasets: [
            {
              label: "°C hourly",
              data: weatherData.hourly.temperature_2m,
              fill: false,
              borderWidth: 4,
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: 'lightblue',
              responsive: true,
            },
          ],
        }}
      />
    </div>
  );
}

export default App;
