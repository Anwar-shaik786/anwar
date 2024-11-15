import { useEffect, useState } from "react"


function bootstrap () {
    const [data,setdata] = useState("firstname")
    const [cards,setcards] = useState([]) 

   
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
    },[])

    const handleapi = async() =>{
        
        let response = await fetch('https://fakestoreapi.com/products')

        let finaldata = await response.json()

        setcards(finaldata)

        console.log('my logic')

        console.log(finaldata)

    }

    useEffect(() =>{
        handleapi()
    },[])

    return (
        <div>
            
            {
                cards.map((data, index) => {
                    return (
                        <div key={index} className="   container container text-center  shadow-lg p-3 mb-5 bg-body-tertiary rounded  border border-secondary    p-3 mb-2 bg-info-subtle text-info-emphasis   container-sm" >
                            <h1 className="fw-bold bg-info  rounded-pill  border border-black  ">{data.category }</h1>
                            <p className="bg-info rounded-pill">{data.description }</p>
                            <p className="  ">{data.id}</p>
                            <img src={data.image} style={{width:"100px"}} />
                            <p className="fw-bold ">{data.price}</p>
                        </div>
                    )
                })
            }
        </div>
    )

}
export default bootstrap