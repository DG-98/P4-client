import { useState, useEffect } from "react"

const Home = (props) => {
  // const { msgAlert, user } = props
  console.log("props in home", props)
  const [allAnime, setAllAnime] = useState([])

  useEffect(()=>{
	  getAllAnime()
  },[])

  const getAllAnime = () =>{
	  fetch(`https://api.jikan.moe/v3/season/2022/winter`)
	  .then(response=>{
		  return response.json()
	  })
	  .then(foundAnime => {
		  console.log('found anime', foundAnime.anime)
		  setAllAnime(foundAnime.anime)
		  console.log('this is all anime', allAnime)
	  })
	  .catch((error) => { 
		console.log(error) })
  }

 let showAllAnime = allAnime.map((anime, key)=> {
	return (
    <div>
      <img
        src={anime.image_url}
        alt={anime.title}
        width="200"
        height="300"
      ></img>
      {anime.title}
      {anime.synopsis}
    </div>
  )
 })

  return (
    <>
      <h2>Home Page</h2>
	  {showAllAnime}
    </>
  )
}

export default Home
