import Card from "../card/card.component";
import './card-list.styles.css'

const CardList = (props) =>
{ 
 
        const {monsters}  = props; 
        //console.log( 'cardlist')
        //console.log ( monsters);
        return(
            <div className="card-list">
                {       
                    monsters.map((monster) => {
                        //console.log( monster );
                            return ( <Card monster={monster} key={monster.key}/>)                           
                        })   
                }               
            </div>         
        );
  
}

export default CardList