// import { useParams } from "react-router-dom"
// import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Button from "react-bootstrap/Button"


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

    console.log('this is list ', list)

    console.log('props in profile', props)

    // const deleteList = (e) => {
    //     e.preventDefault()
    //     fetch(`http://localhost:8000/list/${props._id}`, {
    //       method: "DELETE",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${props.user.token}`,
    //       },
    //     })
    //       .then(() => getAllLists)
    //       .catch((error) => console.error)
    // }

 

console.log("list")
    let listMap 
// if list is empty dont run map, if populated run map. 
    if (list !=null ) {
        listMap = list.map((list)=>{
        const deleteList = (e) => {
          e.preventDefault()
          fetch(`http://localhost:8000/list/${list._id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${props.user.token}`,
            },
          })
            .then(() => getAllLists)
            .catch((error) => console.error)
        }
        console.log(list)
        return (
            <div> 
            {list.title}
            {list.owner}
            <Button onClick={deleteList}>
                Remove from list
            </Button>
            </div>
        )
    })
    } else {
        <p>Loading</p>
    }

    // let userList = listMap.filter((ulist) => {
    //   return props.user_id === ulist.owner
    // })
    // console.log(userList)

    console.log('list map', listMap)
    

    // let userList =
    return (
        <div>
            Profile page
            {listMap}
        </div>
    )
}

export default Profile