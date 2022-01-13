import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"


function Profile (props) {
    const [list, setList] = useState(null)


    useEffect(() => {
      getAllLists()
    }, [])

    const getAllLists = () => {
        fetch(`http://localhost:8000/list`)
        .then(response => {
            return response.json()
        })
        .then(foundList => {
            console.log('these are all list items', foundList)
            setList(foundList.list)
        })
        .catch((error) => { 
    console.log(error) })
    }

console.log(typeof list)
    let listMap 
// if list is empty dont run map, if populated run map. 
    if (list !=null ) {
        listMap = list.map((list)=>{
        console.log(list)
        return (
            <div> 
            {list.title}
            </div>
        )
    })
    } else {
        <p>Loading</p>
    }
    

    // let userList =
    return (
        <div>
            Profile page
            {listMap}
        </div>
    )
}

export default Profile