import '../scss/components/Country.scss';

function Country({ dataCountries }) {
  return (
    <div key={dataCountries.name.official} className="countryContainer">
      <p>{dataCountries.flag}</p>
      <h5>{dataCountries.name.official}</h5>
      <p>{dataCountries.capital}</p>
      <p>{dataCountries.continents}</p>
    </div>
  );
}

export default Country;
