import * as Scrivito from 'scrivito'
import './Objs'
import './Widgets'

export function App() {
  return (
    <div className="app">
      <div id="mainContent">
        <Scrivito.CurrentPage />
      </div>
    </div>
  )
}
