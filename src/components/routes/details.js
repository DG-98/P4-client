import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Collapse from "react-bootstrap/Collapse"
import Button from "react-bootstrap/Button"

function Details (props) {
 let params = useParams()
 const [details, setDetails]= useState({})
 const [open, setOpen] = useState(false)
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

console.log('details', details)
 
 return (
   <div style={{ "text-align": "center", "background-color": "salmon", "font-size": "50px",}}>
     <p>
       {details.title} / {details.title_english}
     </p>
     <img
       src={details.image_url}
       alt={details.title}
       width="400"
       height="500"
     ></img>
     <br />
     {details.premiered}
     <br />
     Ranking: {details.rank}
     <br />
      Score: {details.score}
      <br/>
     Episode length: {details.duration}
     <br/>
     When are new episodes?: {details.broadcast}
     <br/>
     <Button
       variant="dark"
       onClick={() => setOpen(!open)}
       aria-controls="example-collapse-text"
       aria-expanded={open}
     >
       Click to see Description
     </Button>
     <div style={{ minHeight: "150px" }}>
       <Collapse in={open}>
         <div id="example-collapse-text">
           <card body style={{ width: "400px" }}>
             {details.synopsis}
           </card>
         </div>
       </Collapse>
     </div>
     
     <Button variant="dark" onClick={listAnime}>
       Add to List
     </Button>
   </div>
 )
}


export default Details 