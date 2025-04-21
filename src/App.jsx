import './App.css'
import { Link } from 'react-router'

function App() {

  return (
    <>
      <h1>
        React Topics
      </h1>
      <Link to={"/blog"}>React Router - Blog Post</Link>
      <br />
      <Link to={"/redux"}>React Redux - Demo</Link>
      <br />
      <Link to={"/counter"}>React Counter</Link>
      <br />
      <Link to={"/accordion"}>accordion</Link>
      <br />
      <Link to={"/flight"}>flight</Link>
      <br />
      <Link to={"/bar"}>ProgressBar</Link>
      <br />
      <Link to={"/file"}>fileexplorer</Link>
    </>
  )
}

export default App
