import React from 'react'
import { Button } from "@mui/material";
import '../App.css';
import { useLocation,useNavigate } from 'react-router-dom'

const Cardshow = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)
    return (
        <>
            <div className='div mx-auto'>
                <div className='div2 buys  '>
                    <img src={location.state.image} alt='' />
                    <br />
                    <hr />
                    <ul>
                        <li><strong>Category : {location.state.category}</strong></li>
                        <li><strong>Price : {location.state.price}$</strong>
                            {() => { console.log(`"You Like the" ${location.state.title}`) }}

                        </li>
                    </ul>
                    <Button onClick={()=>navigate(-1)} className=' btn1' color="primary" variant="contained" >Back</Button>
                </div>
            </div>

        </>
    )
}

export default Cardshow
