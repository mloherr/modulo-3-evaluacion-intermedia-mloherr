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

  const filteredCountries = dataCountries.filter((countryData) => {
    if (selectInputValue === 'all') {
      return dataCountries;
    } else {
      return (
        countryData.name.common
          .toLocaleLowerCase()
          .includes(searchInputValue.toLocaleLowerCase()) &&
        countryData.continents.includes(selectInputValue)
      );
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
          <ListCountries dataCountries={filteredCountries} />
        </section>
      </main>
    </>
  );
}

export default App;
