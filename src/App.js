import './App.css';
import data from './data.json';
import Page from './components/Page';

function App() {
  return (
    <div className="App">
      <Page JobListings={data} />
    </div>
  );
}

export default App;
