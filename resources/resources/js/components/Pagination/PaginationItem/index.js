import React,{useState} from "react"

const PaginationItem = ({handlePage,currentPage,active}) => {

    // const [state,setState] = useState(currentPage)
    
    const paginationItemHandle = (event) => {
        console.log("event",event.target.id);
        handlePage(event)
    }    

    return(
        <button onClick={(event)=> paginationItemHandle(event)}>
            ITEM
        </button>           
    )
}

export default PaginationItem
