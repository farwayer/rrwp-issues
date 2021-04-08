import {render} from 'react-dom'


function App() {
  return "Hello!"
}

const root = document.createElement('div')
document.body.appendChild(root)
render(<App/>, root)
