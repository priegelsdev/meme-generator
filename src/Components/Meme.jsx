import {useState} from 'react'
import memesData from '../memesData'

export default function Meme() {

  const memesArray = memesData.data.memes
  let randomNum = Math.floor(Math.random() * memesArray.length)  
  const [meme, setMeme] = useState(memesArray[randomNum].url)

  function getMeme() {
    randomNum = Math.floor(Math.random() * memesArray.length) 
    setMeme(memesArray[randomNum].url)
  }

  return (
    <main>
      <div className="form">
        <input className="top-caption" type="text" placeholder="Top caption"></input>
        <input className="bottom-caption" type="text" placeholder="Bottom caption"></input>
        <button onClick={getMeme} className="submit-btn">GET MEME</button>
      </div>
      <div className="meme-container">
        <img className="meme-img" src={meme} alt="a meme"></img>
      </div>
    </main>
  )
}