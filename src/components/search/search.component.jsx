import './search.styles.css'

const Search = (props)=> 
{ 
      const {  searchChangeHandler } = props; 
        //console.log('search' + searchField + 'search');
        return (
            <input type="search"
                   className="search-box"
                   placeholder="search monsters"
                   onChange = { (event) => { searchChangeHandler(event) } } 
                   />           
        );
  
}

export default Search;