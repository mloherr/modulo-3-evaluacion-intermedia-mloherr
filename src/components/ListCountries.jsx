import '../scss/components/ListCountries.scss';
import Country from './Country';

function ListCountries({ dataCountries }) {
  return (
    <div className="mainContainerCountries">
      {dataCountries.map((countryInfo) => {
        return <Country dataCountries={countryInfo} />;
      })}
    </div>
  );
}

export default ListCountries;
