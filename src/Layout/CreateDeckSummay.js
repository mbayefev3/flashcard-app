import React from 'react'

import CreateDeckForm from './CreateDeckForm'
import {Route,Switch, Link, useRouteMatch} from 'react-router-dom'
import DeckScreen from './DeckScreen'
const CreateDeckSummary =() =>{

    const {path}=useRouteMatch()

    console.log('path',path)
    return (
        <>
    <Switch>
        <Route path={`${path}/new`} exact>
        <CreateDeckForm/>
        </Route>
        <Route path="/decks/:deckId">
            <DeckScreen/>
        </Route>
    </Switch>
        </>
    )
}

export default CreateDeckSummary