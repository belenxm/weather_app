import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { url, options } from "../api";

const Search = ({ onSearchChange }) => {

  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${url}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
     options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
