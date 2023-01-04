const Search = ({handleSearch}) => {
  const [query, setQuery] = React.useState('');

  const handleOnSearch = (event) => {
    event.preventDefault();
    handleSearch(query);
  };

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" value={query} onChange={e => setQuery(e.target.value)} />
      <button className="btn hidden-sm-down" onClick={handleOnSearch} >
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
