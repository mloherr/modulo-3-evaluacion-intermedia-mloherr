import '../scss/App.scss';
import dataCountries from '../services/data.json';
import Filters from './Filters';
import AddCountry from './AddCountry';
import ListCountries from './ListCountries';

function App() {
  return (
    <>
      <header className="header">
        <h1>Country Info App</h1>
        <p>
          Explore information about countries, capitals, and flags. Add new
          countries and filter through the list!
        </p>
      </header>
      <main className="main">
        <section className="main__filters">
          <Filters />
        </section>
        <section className="main__addCountries">
          <AddCountry />
        </section>
        <section className="main__listCountries">
          <ul>
            <ListCountries />
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
