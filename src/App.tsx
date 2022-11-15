//npm import logo from './logo.svg';
import { useState, useEffect, ChangeEvent } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import Search from './components/search/search.component';
import { getData }  from '../src/utils/data.utils';

export type Monster = {
   id: string 
  ,name: string
  ,email:string
}

const App = () => {

  const [searchField, setSearchField] = useState('');  
  const [monsters, setMonsters]  = useState<Monster[]>([]);
  const [filteredMonsters, setfilteredMonsters]  = useState(monsters);
  
  //console.log( 'render 1');
  
  useEffect(()=>{ 
    // fetch('https://jsonplaceholder.typicode.com/users') 
    // .then( (response) => ( response.json()  )) 
    // .then( (users) =>  setMonsters(users) )      

    // console.log('making jsonplaceholder call.');

    const fetchUsers = async(url: string) => {
      const users = await getData<Monster[]>(url); 
      setMonsters(users);
    }
    
    fetchUsers('https://jsonplaceholder.typicode.com/users');

  }, []);  // we dont ever want to call other than calling it once. 

  
  useEffect(()=>{

    //console.log('bring new filtered monsters');
      const NewfilteredMonsters  = monsters.filter( (monster) => {
        return monster.name.toLowerCase().includes(searchField);  
      });
      setfilteredMonsters(NewfilteredMonsters);
      //console.log('effect is rendering.');
     
  },[monsters, searchField]);
 
  const onSearchChangeHandler = (event : ChangeEvent<HTMLInputElement>): void => {
     const searchValue = event.target.value.toLowerCase(); 
     setSearchField(searchValue);  //this method calls the rerender 
  };

  //console.log('render2')
  return (
    <div className="App">  
        <h1 className='app-title'>Monsters Rolodex </h1>  
        <Search searchChangeHandler= {onSearchChangeHandler}/>
        <CardList monsters= {filteredMonsters}/>
    </div>            
  );

}


export default App;
