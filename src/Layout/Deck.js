import React from 'react'
import './Deck.css'
// useParams,useRouteMatch ,
import {Link,Route} from 'react-router-dom'
const Deck =({decksAvailable,handleDeleteDeck}) =>{
    // "front": "What path will match the follow Route?\n<Route>\n  <NotFound />\n</Route>",
    // "back": "All paths. A route with no path matches all URL's",
    // "deckId": 2,
    // "id": 4

    // /decks/:deckId/study

    // const countNumberOfCardsInDeck =decksAvailable.filter(({}))
    // console.log('render',decksAvailable)

    const lists =decksAvailable.map(({id,name,description,cards}) => {

        const countNumberOfCardsInDeck=cards.filter(card =>{
         return   Object.keys(card).length===4 && card.front && card.back && (card.deckId || card.deckId===0 )  && (card.id || card.id===0)

        

        })


        return (
        
            <div className="card" key={id}>
  <div className="card-body">

    <div className='deck-card-title'>    <h5 className="card-title">{name}</h5>
    <span>{`${countNumberOfCardsInDeck.length} cards`}</span>
</div>
    <p className="card-text">{description}</p>
    
    <button type="button" className="btn btn-primary">View</button>
    <Link to={`/decks/${id}/study`}>
    <button type="button" className="btn btn-success">Study</button>

    </Link>
    <button type="button" onClick={() =>handleDeleteDeck(id)} className="btn btn-danger">Delete</button>

  </div>
</div>
        )
    })
    return (
        <>
        {lists}
        </>
    )
}


export default Deck