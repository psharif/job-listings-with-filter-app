import './App.css';
import JobListingsProvider from "./context/jobListings.context";
import data from './data.json';
import Page from './components/Page';

function App() {
  return (
    <JobListingsProvider>
      <Page JobListings={data} />
    </JobListingsProvider>
  );
}

export default App;
