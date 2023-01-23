import {useState, useEffect} from 'react'
import memesData from '../memesData'

export default function Meme() {

  //state that controls meme to be shown
  const [meme, setMeme] = useState({
    topCaption: "",
    bottomCaption: "",
    imageUrl: "http://i.imgflip.com/1bij.jpg"
  })

  //state that has all the data from the meme api
  const [allMemes, setAllMemes] = useState([])

// hook (?) to load memes from api instead of hardcoded data in extra file; just once
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => {
        setAllMemes(data.data.memes)
      })
  }, [])

// function to set state with meme image to state with new random meme image
  function getMeme() {
    let randomNum = Math.floor(Math.random() * allMemes.length)  
    setMeme(prevState => ({
      ...prevState,
      imageUrl: allMemes[randomNum].url
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