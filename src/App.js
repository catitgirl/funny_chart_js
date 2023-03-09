
import './App.css';

import { PieChart } from 'react-minimal-pie-chart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>График моего настроения в программировании</h2>
        <div id="mypie">
        <PieChart
  data={[
    { title: 'Уверенность', value: 10, color: '#E38627' },
    { title: 'Упрямство', value: 50, color: '#C13C37' },
    { title: 'Нытье', value: 40, color: '#6A2135' },
  ]}
/>
        </div>
      
      </header>
    </div>
  );
}

export default App;
