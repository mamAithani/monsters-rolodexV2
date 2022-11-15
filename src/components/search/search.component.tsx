import './search.styles.css'
import { ChangeEvent } from 'react';

type SearchBoxProps={ 
  searchChangeHandler:  (event: ChangeEvent<HTMLInputElement>) => void
}

const Search = (props: SearchBoxProps)=> 
{ 
      const {  searchChangeHandler } = props; 
        //console.log('search' + searchField + 'search');
        return (
            <input type="search"
                   className="search-box"
                   placeholder="search monsters"
                   onChange = {searchChangeHandler} 
                   />           
        );
  
}

export default Search;