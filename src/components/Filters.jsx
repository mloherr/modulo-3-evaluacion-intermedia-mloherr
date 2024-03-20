function Filters({ onChangeSearchInput, onChangeSelectInput }) {
  const handleInputSearch = (ev) => {
    onChangeSearchInput(ev.target.value);
  };
  const handleSelectInput = (ev) => {
    onChangeSelectInput(ev.currentTarget.value);
  };
  return (
    <>
      <h2>Filters</h2>
      <label htmlFor="country">
        By Country:
        <input
          type="text"
          placeholder="Busca por nombre..."
          onChange={handleInputSearch}
          name="country"
        />
      </label>
      <label htmlFor="continentSelection">
        By Continent:
        <select
          name="continent"
          id="continentSelection"
          onChange={handleSelectInput}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </label>
    </>
  );
}

export default Filters;
