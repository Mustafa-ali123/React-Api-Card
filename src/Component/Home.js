import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import Checkbox from '@mui/material/Checkbox';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Spinner from './Spinner'

function Home() {


    const [data, setdata] = useState([]);
    const [product, setproduct] = useState([]);
    const [inpt, setinpt] = useState("");
    const [load, reload] = useState(true);
    const navigate = useNavigate();
   

    useEffect(() => {     
        getData()  
      console.log(data)
    }, [inpt])

    const getData= () => {
 axios('https://fakestoreapi.com/products').then(res => {
                setdata(res.data)
                reload(false)
            })
                .catch(err => { console.log(err) })
    }

    const card = (x) => {
        console.log(x)

        navigate("/buy", {
            state: x
        })
    }


    return (
        <>
            <div className="container mx-auto">
                <div className="row mx-auto">
                    <div className="col-lg-12 md-12 sm-12">

                        <TextField id="outlined-basic" onChange={e => setinpt(e.target.value)} className="my-5  mx-auto inpt" label="Name of the Item" variant="outlined" />
                        {/* <Button color="success" variant="contained"  className="my-5 py-3" >Search</Button> */}

                    </div>
                </div>
            </div>
            <div className="div">
                {load ? <Spinner /> : data.filter((x) =>{
                    if (inpt == "") {
                        return x

                    }     
                     else if (x.title.toLowerCase().includes(inpt.toLowerCase())) {
                        return x
                    }
              
                }).map((x, i) => {
                    return (

                        <div className='div2' key={i}>
                            <img src={x.image} alt='' />
                            <br />
                            <hr />
                            <ul>
                                <li><strong>Category : {x.category}</strong></li>
                                <li><strong>Price : {x.price}$</strong> <Checkbox
                                    className='inp'
                                    color="error"
                                    onChange={() => { console.log(`"You Like the" ${x.title}`) }}
                                    icon={<FavoriteBorder />}
                                    checkedIcon={<Favorite />}
                                /></li>
                            </ul>

                            <Button color="primary" variant="contained" onClick={() => card(x)} className=' btn1'>Buy</Button>
                        </div>

                    )
                })
                }

            </div>


        </>
    );
}

export default Home;