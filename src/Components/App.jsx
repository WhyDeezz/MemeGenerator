import { useState } from "react"
import { useEffect } from "react"
import Draggable from 'react-draggable';

export default function Main(){
  const [Meme , setMeme] = useState({
    TopText:'Wakes up before alarm',
    BottomText:'Still has 2 hrs to sleep',
    imageUrl:'Screenshot 2025-08-18 at 8.28.27 PM.png'
  })
  const [allmemes , setallmemes] = useState([])
  
  
  function handlechange(event)
  {
    const {value , name} = event.currentTarget
    setMeme(prevMeme => ({...prevMeme , [name] : value}))
  }
  useEffect(()=>{
    fetch('https://api.imgflip.com/get_memes')
      .then(output => output.json())
      .then(data => {const dataarray = [];
        for (let i = 0 ; i < 100 ; i++){
        setallmemes(prev=> [...prev,(data.data.memes[i].url)])
      }})
  },[])

  function ChangeMeme()
  {
    let randomInt = Math.floor(Math.random() * 100);

    setMeme(prev=> ({...prev ,imageUrl :allmemes[randomInt]}))
    
  }
  
  

  return(
    <main>
      <div className="form">
        <div className="formtext">
          <label>Top Text
          <input type = 'text' name = 'TopText' placeholder={Meme.TopText}  onChange={handlechange} value ={Meme.TopText}></input>
          </label>

          <label>Bottom Text
          <input type = 'text' name = 'BottomText' placeholder={Meme.BottomText}value ={Meme.BottomText} onChange={handlechange} ></input>
          </label>
        </div>

        <button onClick={ChangeMeme}>Get a new Meme image</button>
      </div>
      <div className = 'meme'>
        <img src = {Meme.imageUrl}></img>
        <Draggable defaultPosition={{x: 550, y: -450}} >
          <div className="Top" >{Meme.TopText}</div>
        </Draggable>
        <Draggable defaultPosition={{x: 550, y: -125}}>
          <div className = 'Bottom' >{Meme.BottomText}</div>
        </Draggable>

      </div>


    
    </main>
  )
}