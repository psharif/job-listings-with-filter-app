import './App.css';
import Page from './components/Page';
import JobListing from './components/JobListing';
import FilterBar from './components/FilterBar';

function App() {
  return (
    <div className="App">
      <Page>
        <FilterBar />
        <JobListing>Job Listing 1</JobListing>
        <JobListing>Job Listing 2</JobListing>
        <JobListing>Job Listing 3</JobListing>
        <JobListing>Job Listing 4</JobListing>
      </Page>
    </div>
  );
}

export default App;
