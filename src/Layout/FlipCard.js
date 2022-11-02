import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'



const FlipCard =({decks}) =>{


    const countNumberOfCardsInDeck=decks.cards.filter(card =>{
        return   Object.keys(card).length===4 && card.front && card.back && (card.deckId || card.deckId===0 )  && (card.id || card.id===0)

       

       })

       console.log('fdfdfd',countNumberOfCardsInDeck)
    const [flip, setflip]=useState('front')
    const [next,setNext] =useState(0)

    const history=useHistory()

    const handleFilp =() =>{

        if(flip==='front'){
            setflip('back')
        }else{
            setflip('front')
        }
    }

    const handleNext =() =>{
        if(next<2){
setNext(next+1)
        }else{
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
    <h5 className="card-title">Study {decks.name}</h5>
    <h3>{`Card ${next+1} of 3`}</h3>
    <p className="card-text">

        { decks.cards[next][flip]
        }
    </p>
    <button className="btn btn-primary" onClick={handleFilp}>Flip</button>
        {flip==='front' && next===0 ? '' :    <button style={{marginLeft:"10px"}}
        onClick={handleNext}
         className="btn btn-primary">Next</button>
}
    </>
)



}



export default FlipCard