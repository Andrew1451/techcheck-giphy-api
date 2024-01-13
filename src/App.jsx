import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [gifs, setGifs] = useState(0)
  const makeApiCall = () => {
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_GIPHY_API_KEY}&q=celebration&limit=6&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
    .then(res => {
      console.log(res.data.data)
      setGifs(res.data.data)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      { gifs ? gifs.map((gif, i) => {
        return <img key={i} src={gif.images.fixed_height.url} />
      }) : null }
      <div className="card">
        <button onClick={makeApiCall}>
          Make API Call
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
