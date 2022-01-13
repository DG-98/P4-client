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
        // console.log("found details", foundDetails)
        setDetails(foundDetails)
      })
      .catch((error) => {
        console.log(error)
      })
}
console.log(`https://api.jikan.moe/v3/anime/${params.id}`)

console.log('this is user', props.user)

const listAnime =(e)=>{
    e.preventDefault()
    let preJSONBody = {
        list: 
        {animeId: params.id,
        title: details.title,
        owner: props.user._id}
    }
    fetch(`http://localhost:8000/list`, {
      method: "POST",
      body: JSON.stringify(preJSONBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.user.token}`,
      }
    })
    .then(response=>response.json())
    .catch(err=>console.error)
}



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
     <p>
       {details.title} / {details.title_english}
     </p>
     <img
       src={details.image_url}
       alt={details.title}
       width="200"
       height="300"
     ></img>
     <br />
     {details.premiered}
     <br />
     <p> Score: {details.score}</p>
     {details.synopsis}
     <br />
     <button onClick={listAnime}>Add to List</button>
   </div>
 )
}


export default Details 