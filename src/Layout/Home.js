import React,{useState,useEffect} from "react";
import{ listDecks,deleteDeck} from '../utils/api/index'
import CreateButton from "./CreateButton";
import Deck from "./Deck";
const Home =() =>{

    const [decksAvailable, setdecksAvailable]=useState([])
    useEffect(() =>{

        // the loadDecks func will fetch  data (decks) from api 
      const loadDecks =async () =>{
        const loadAvailableDecks=await listDecks()
        console.log(loadAvailableDecks)
        setdecksAvailable([...decksAvailable,...loadAvailableDecks])


      }
      loadDecks()
    },[])


    const handleDeleteDeck = async (id) =>{
        if (window.confirm("Delete this deck?\n\n You will not be able to recover it.")) {
    
            const removeDeckById =await deleteDeck(id)
            // after we delete a deck will return the available decks
            const filteredTheUnremovedDecks=decksAvailable.filter(({id:deckId}) => deckId!==id)
            setdecksAvailable(filteredTheUnremovedDecks)
           
          }
    
    }
    return (
        <div>
            <CreateButton/>
            <Deck decksAvailable={decksAvailable} handleDeleteDeck={handleDeleteDeck}/>
        </div>
    )
}


export default Home