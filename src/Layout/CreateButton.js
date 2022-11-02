import React from 'react'

import {useHistory} from 'react-router-dom'

const CreateButton =() =>{
const history =useHistory()

const handleClick =() =>{

    history.push('/decks/new')
}
    return <button type="button" className="btn btn-primary" data-bs-toggle="button" onClick={handleClick}>Create Deck</button>

}


export default CreateButton