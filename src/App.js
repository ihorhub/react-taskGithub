import './App.css'
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import FirstScreen from './components/FirstScreen'
import SecondScreen from './components/SecondScreen'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <div>First screen</div>
          <FirstScreen />
        </Route>
        <Route path="/userDetails/:id">
          <div>user details page</div>
          <SecondScreen />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  )
}

export default App
