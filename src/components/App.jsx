import React from 'react'
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom'

import Sidebar       from './Sidebar'
import Scores        from './AppViews/Scores'
import Dictation     from './AppViews/Dictation'
import Dictionnaries from './AppViews/Dictionnaries'

const App = () => (
  <HashRouter>
    <div className="app-wrapper o-layout--2panes">
      <Sidebar />
      <main className="app-content">
        <Switch>
          <Route path="/viewScores" component={Scores} />
          <Route path="/viewDictation" component={Dictation} />
          <Route path="/viewDictionnaries" component={Dictionnaries} />
          <Redirect from="/" to="/viewScores" />
          <Redirect from="*" to="/viewScores" />
        </Switch>
      </main>
    </div>
  </HashRouter>
)

export default App

// scores
// dictations
// dictionnaries
