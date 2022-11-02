import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

import FlipButton from './FlipButton'

const FlipCard =({decks}) =>{


  
    const [flip, setflip]=useState('front')
    const [next,setNext] =useState(0)
    const history=useHistory()


    const countNumberOfCardsInDeck=decks.cards.filter(card =>{
        return   Object.keys(card).length===4 && card.front && card.back && (card.deckId || card.deckId===0 )  && (card.id || card.id===0)

       

       })


    const handleFilp =() =>{

        if(flip==='front'){
            setflip('back')
        }else{
            setflip('front')
        }
    }

    const handleNext =() =>{
        if(next<countNumberOfCardsInDeck.length-1){
setNext(next+1)
        }
        
        else{
            if (window.confirm("Restart cards?\n\n click cancel to return to home page.")) {
                setflip('front')
                setNext(0)
              }else{
                        history.push('/')
              }
        }
    }

return (
    <>
    <h5 className="card-title"> {decks.name}: Study</h5>
    <h3>{`Card ${next+1} of ${countNumberOfCardsInDeck.length}`}</h3>
    <p className="card-text">

        {countNumberOfCardsInDeck.length<3 ? `You need at least 3 cards to study.There are ${countNumberOfCardsInDeck.length} cards in the deck` 
        : decks.cards[next][flip]
        }
    </p>
 {countNumberOfCardsInDeck.length<3 ? null :< FlipButton flip={flip} handleFilp={handleFilp} handleNext={handleNext} next={next}/>}


    </>
)



}



export default FlipCard