import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

function Productpage(){
    const location = useLocation()
    const{id} = location.state || null

    const [product,getready] = useState([])

    const single = async()=>{
        
        if(id){
            let response = await fetch(`https://fakestoreapi.com/products/category/${id}`)

            let data = await response.json()
             getready(data)
        }
    }

    useEffect(()=>{
        single()
    },[])

    return(
        <div>
            <h1 className="fw-bold bg-info  rounded-pill  border border-black">Product page</h1>
            <h1 className="fw-bold bg-info  rounded-pill  border border-black">{product.category}</h1>
            <p>{product.id}</p>
            <img src={product.image} style={{width:"150px",height:"150px"}}></img>
            <p>{product.tittle}</p>
            <p>{product.description}</p>
        </div>
    )
}
export default Productpage