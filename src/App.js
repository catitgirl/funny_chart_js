import './App.css';

import { Chart } from "react-google-charts";

export const data = [
  ["Настроение", "сколько раз думаю за день"],
  ["Нытик", 11],
  ["Уверенный", 2],
  ["Надо было на ноготочки", 2],
  ["Гений", 2],
  ["О, а чё, так можно было?!", 7],
];

export const options = {
  title: "Мое обычное состояние",
  is3D: true,
};

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>График моего настроения в программировании</h2>
        <div id="myPie">
          
          </div>   
        <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
      </header>
    </div>
  );
}

export default App;
