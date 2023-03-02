import './App.css';
//import dateAdapter for Moment
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
//MUI X components


function App() {
  const [value, setValue] = React.useState<DateRange<Dayjs>>([null, null]);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>

      </body>
    </div>
  );
}

export default App;
