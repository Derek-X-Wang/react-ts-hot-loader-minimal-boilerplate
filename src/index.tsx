import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Root from './containers/Root'

const render = (Component:any) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Root)
declare var module: any;
if (module.hot) {
  module.hot.accept('./containers/Root', () => { render(Root) })
}
