import { useState } from "react"



const Registeruser =() =>{

    const [formdata,setformdata] = useState({
        name:'',
        email:'',
        password:'',
        profile_pic:''
    })

    const handlechange = (e) =>{
        console.log('onchae')
        const {name,value} = e.target;

        setformdata({
            ...formdata,
            [name]:value
        })
    }

    const handlesubmit = async (e) =>{

        console.log('submit')
        e.preventDefault();

        try{
            const response = await fetch('http://localhost:5000/api/register',{
                method:"Post",
                body:JSON.stringify(formdata),
                headers: {
                    "Content-Type": "application/json"
                },
                mode:'cors'
            })
            const data = await response.json();
            console.log(data)
        }
        catch(error){
            console.log(error)
        }
    }

    return(
        <div  className="text-center  text-body  shadow-lg p-3 mb-5  bg-info    " >
            
            <h1>
                Register user
            </h1>

            <form onSubmit={handlesubmit}>
                <div  className="grid gap-0 column-gap-3" >
                <div>
                <label className="fw-bold">name</label>
                <input type="text" name="name" placeholder="Enter your name" required value={formdata.name} onChange={handlechange} />
                </div>
                <div>
                <label>email</label>
                <input type="email" name="email" placeholder="enter your email" required value={formdata.email} onChange={handlechange}/>
                </div>
                <div>
                <label>password</label>
                <input type="password" name="password" placeholder="password" required  value={formdata.password} onChange={handlechange}/>
                </div>

                <button type="submit">Register</button>
              </div>
            </form>
           
        </div>
    )
}

export default Registeruser