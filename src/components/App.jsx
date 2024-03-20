import '../scss/App.scss';
import { useState } from 'react';
import dataCountries from '../services/data.json';
import Filters from './Filters';
import AddCountry from './AddCountry';
import ListCountries from './ListCountries';

function App() {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [selectInputValue, setSelectInputValue] = useState('all');

  const handleSearchInput = (value) => {
    setSearchInputValue(value);
  };

  const handleInputSelected = (value) => {
    setSelectInputValue(value);
  };

  const searchedCountries = dataCountries.filter((dataCountries) => {
    return dataCountries.name.official
      .toLowerCase()
      .includes(searchInputValue.toLowerCase());
  });

  const selectedCountries = dataCountries.filter((selectedDataCountry) => {
    if (selectInputValue === 'all') {
      return true;
    } else {
      return selectedDataCountry.continents === selectInputValue;
    }
  });

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
          <Filters
            onChangeSearchInput={handleSearchInput}
            onChangeSelectInput={handleInputSelected}
          />
        </section>
        <section className="main__addCountries">
          <AddCountry />
        </section>
        <section className="main__listCountries">
          <ListCountries dataCountries={selectedCountries} />
        </section>
      </main>
    </>
  );
}

export default App;
