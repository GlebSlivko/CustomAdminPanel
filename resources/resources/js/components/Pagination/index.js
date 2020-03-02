import React, { useEffect,useState } from "react"
import PaginationItem from "./PaginationItem"
import axios from "axios"

const Pagination = ({path='',setItems}) => {
    const [current,setCurrent] = useState(5)
    const [last,setLast] = useState(0)  
    console.log("current",current);

    const handlePage = (event) => {
        console.log("paginationHandleInParent");
        console.log("event.target.id.InParent",event.target.id);
    }

    useEffect(()=>{
        axios.get(path + "&page=" + current)
        .then(response => {  
            console.log("response",response);
            return response;
        })
        .then(result => {
            if(result.status === 200 && result.data.data){
                setItems(result.data.data);
                setCurrent(result.data.current_page);
                setLast(result.data.last_page);
            }
        });
    },[])
console.log('last',last);
    const getPaginationItems = ()=>{
        console.log('inside');
        let paginationItems = [];
        if(!last) return paginationItems;
         for (let i = 0; i <= last ;i++){            
            paginationItems.push(<PaginationItem  handlePage={handlePage} currentPage={current} active={false} />)
        } 
        console.log(paginationItems);
        return paginationItems;
    };  
    
    return(
        <div>
            {getPaginationItems()}
        </div>
    )
}

export default Pagination