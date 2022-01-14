import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Details from "./routes/details"
import Form from 'react-bootstrap/Form'


const Home = (props) => {
  // const { msgAlert, user } = props
  console.log("props in home", props)
  const [allAnime, setAllAnime] = useState([])
  const [animeResults, setAnimeResults] = useState([])
  let [search, setSearch] = useState("")
  let [year, setYear] = useState('2022')
  let [season, setSeason] = useState('winter')

  // useEffect(()=>{
	//   getAllAnime()
  // },[])



  //create two states, one for year and one for season
  //default states will be the year and season of my choosing 
  //handle change function to hold state (handleYear, handleSeason)
  //

  //API call to get seasonal anime for home page
  const getAllAnime = (e) =>{
    e.preventDefault()
	  fetch(`https://api.jikan.moe/v3/season/${year}/${season}`)
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

  const handleYear = (e) =>{
    setYear(e.target.value)
  }
  
  const handleSeason =(e)=>{
    setSeason(e.target.value)
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

  const handleChange = (e) =>{
	setSearch(e.target.value)
	console.log(e)
  }

//   let showAllResults = animeResults.map((anime, key)=>{
// 	  return (
//       <div>
//         <img
//           src={anime.image_url}
//           alt={anime.title}
//           width="200"
//           height="300"
//         ></img>
//         {anime.title}
//       </div>
//     )
//   })
  




 let showAllAnime = allAnime.map((anime, key)=> {
	//  console.log('these are IDs', anime.mal_id)
	return (
    <div style={{"text-align": "center", "background-color": "salmon", "height": "700px"}}>
      <img
        src={anime.image_url}
        alt={anime.title}
        width="400"
        height="500"
      ></img> 
      <br/>
      {anime.title}<br/>
      {/* {anime.synopsis} */}
      {/* <button value="See more >>">See more >></button> */}
		  <Link to={`/details/${anime.mal_id}`}>See More>></Link>
	
	  
    </div>
  )
 })

  return (
    <div style={{"text-align": "center", "background-color": "salmon", "height": "fit-content", "font-size": "30px", }}>
      Select a Season<form onSubmit={getAllAnime}>
        <select onChange={handleYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
        <select onChange={handleSeason}>
          <option value="winter">Winter</option>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="fall">Fall</option>
        </select>
        <input type="submit"></input>
      </form><br/>
      OR <br/>
      Search an Anime<form value={search} onSubmit={searchAnime}>
        <input
          type="text"
          id="animeSearch"
          name="animeSearch"
          onChange={handleChange}
        ></input>
        <input type="submit" value="Search"></input>
      </form>
      {/* <h2>Home Page</h2> */}
      {showAllAnime}
      {/* {showAllResults} */}
      {/* <Details animeId={showAllAnime} user={props.user}/> */}
    </div>
  )
}

export default Home
