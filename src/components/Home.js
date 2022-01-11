import { useState, useEffect } from "react"

const Home = (props) => {
  // const { msgAlert, user } = props
  console.log("props in home", props)
  const [allAnime, setAllAnime] = useState([])
  const [animeResults, setAnimeResults] = useState([])
  let [search, setSearch] = useState("")

  useEffect(()=>{
	  getAllAnime()
  },[])


  //API call to get seasonal anime for home page
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
 

  //API call to get results of search 
  const searchAnime = (e) =>{
	  e.preventDefault()
	  fetch(`https://api.jikan.moe/v3/search/anime?q=${search}`)
      .then((response) => {
        return response.json()
      })
      .then(searchResult => {
		console.log('these are first results', searchResult)
        setAllAnime(searchResult.results)
        console.log("these are results", searchResult.result)
      })
      .catch((error) => {
        console.log(error)
      })
  }
   //console log e to find search
  let animeTitle = ''

  const handleChange = (e) =>{
	setSearch(e.target.value)
	console.log(e)
  }

  let showAllResults = animeResults.map((anime, key)=>{
	  return (
      <div>
        <img
          src={anime.image_url}
          alt={anime.title}
          width="200"
          height="300"
        ></img>
        {anime.title}
      </div>
    )
  })
  




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
      <form value={search} onSubmit={searchAnime}>
        <input
          type="text"
          id="animeSearch"
          name="animeSearch"
          onChange={handleChange}
        ></input>
        <input type="submit" value="Search"></input>
      </form>
      <h2>Home Page</h2>
      {showAllAnime}
      {showAllResults}
    </>
  )
}

export default Home
