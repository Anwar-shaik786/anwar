import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Anwar() {
    const [data, setData] = useState([]); 
    const [cards, setCards] = useState([]); 
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => setData(json));
    }, []);
    const filter = async (category) => {
        let response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        let data2 = await response.json();
        setCards(data2); 
        console.log(data2);
    };

    return (
        <div>
            <h1 className="text-center fw-bold bg-info  rounded-pill  border border-black">Router</h1>
            <div style={{ display: "flex", flexDirection: "row", gap: 100, marginLeft: "250px" }}>
                {
                    data.map((category, index) => {
                        return (
                     <div key={index}>
                         <button onClick={() => filter(category)} className="bg-info">{category}</button>
                     </div>
                        )
                    })
                }
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: "400px 400px 400px" }}>
                {
                    cards.map((product) => {
                        return (
                            <Link key={product.id} to={`/productdeatails/${product.id}`} state={{ id: product.id }}>
                                <div className=" container container text-center  shadow-lg p-3 mb-5 bg-body-tertiary rounded  border border-secondary    p-3 mb-2 bg-info-subtle text-info-emphasis   container-sm " >
                                    <p className="text-danger"> </p>
                                    <h1 className="fw-bold bg-info  rounded-pill  border border-black ">{product.category}</h1>
                                    <img src={product.image} alt={product.title} style={{ width: "100px",  }} />
                                    <p className="text-Emphasis fst-italic" >{product.title}</p>
                                    <p className="text-Emphasis fst-italic" >{product.description}</p>
                                    <p className="text-Emphasis fst-italic" >${product.price}</p>
                                </div>
                            </Link>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Anwar;
