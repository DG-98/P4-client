import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

function Details (props) {
 let params = useParams()
 const [details, setDetails]= useState({})
//  const [urlParams, setUrlParams]=useState('')
 console.log('props in details', props)
 console.log('these are params', params.id)

 useEffect(() => {
   getDetails()
 }, [])


const getDetails = () =>{
    fetch(`https://api.jikan.moe/v3/anime/${params.id}`)
      .then((response) => {
        return response.json()
      })
      .then((foundDetails) => {
        console.log("found details", foundDetails)
        setDetails(foundDetails)
      })
      .catch((error) => {
        console.log(error)
      })
}
console.log(`https://api.jikan.moe/v3/anime/${params.id}`)

// const showDetails = allDetails(()=>{
//     return (
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
// })

 
 return (
   <div>
     <p>{details.title} / {details.title_english}</p>
     <img
       src={details.image_url}
       alt={details.title}
       width="200"
       height="300"
     ></img>
     {details.premiered}
     {details.score}
     {details.synopsis}
   </div>
 )
}


export default Details 