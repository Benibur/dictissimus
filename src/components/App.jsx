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
          <Route path     ="/scores"
                 component={Scores}        />
          <Route path     ="/dictation"
                 component={Dictation}     />
          <Route path     ="/dictionnaries/:modalName(addWords|parameters)/:dicoId"
                 component={Dictionnaries} />
          <Route path     ="/dictionnaries"
                 component={Dictionnaries} />
          <Redirect from="/" to="/scores" />
          <Redirect from="*" to="/scores" />
        </Switch>
      </main>
    </div>
  </HashRouter>
)

export default App

// scores
// dictations
// dictionnaries
