import React,{useState, useEffect} from 'react'
import  {useParams,useRouteMatch} from 'react-router-dom'
import {readDeck} from '../utils/api/index'
import {Link,useHistory} from 'react-router-dom'
import FlipCard from './FlipCard'
import './Study.css'

const Study =() =>{
 const history=useHistory()
const [decks,setDecks] =useState({})
const {deckId}=useParams()
 const {url}=useRouteMatch()


    useEffect(() =>{

         const loadDeck= async (deckId) =>{

                    const {name,cards}=await readDeck(deckId)
                    setDecks({
                        ...decks,
                        name,cards
                    })
                
            }


            loadDeck(deckId)

    },[deckId])


if(Object.keys(decks).length===0){

    return <h1>... Loading</h1>
}else{

    return (
        <div className="card">
  <div className="card-header">
     <span className='move-left'>  <Link to="/" >Home</Link> /</span>
       <span className='move-left'> <Link to={`${url}`}>{decks.name}</Link> /</span>
        <span className='move-left'>Study</span>
  </div>
  <div className="card-body">
    <FlipCard decks={decks}/>
 
  </div>
</div>
    )
}
   
}


export default Study



