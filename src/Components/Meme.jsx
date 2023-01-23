import {useState} from 'react'
import memesData from '../memesData'

export default function Meme() {

  //variables to use throughout this function
  const memesArray = memesData.data.memes
  let randomNum = Math.floor(Math.random() * memesArray.length)  

  //state that controls meme to be shown
  const [meme, setMeme] = useState({
    topCaption: "",
    bottomCaption: "",
    imageUrl: memesArray[randomNum].url
  })

  //state that has all the data from the meme api
  const [allMemes, setAllMemes] = useState(memesArray)

  function getMeme() {
    setMeme(prevState => ({
      ...prevState,
      imageUrl: memesArray[randomNum].url
    }))
  } 

  // function to handle change directly and save new value to state
  function handleChange(event) {
    const {name, value} = event.target

    setMeme(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <main>
      <div className="form">
        <input 
          type="text" 
          name="topCaption"
          value={meme.topCaption}
          onChange={handleChange}
          className="top-caption" 
          placeholder="Top caption"
        />
        <input 
          type="text" 
          name="bottomCaption"
          value={meme.bottomCaption}
          onChange={handleChange}
          className="bottom-caption" 
          placeholder="Bottom caption"
        />
        <button 
          className="submit-btn"
          onClick={getMeme} 
        >
          GET MEME
        </button>
      </div>

      <div className="meme-container">
        <img className="meme-img" src={meme.imageUrl} alt="a meme"></img>
        <h2 className="meme-caption top">{meme.topCaption}</h2>
        <h2 className="meme-caption bottom">{meme.bottomCaption}</h2>
      </div>

    </main>
  )
}