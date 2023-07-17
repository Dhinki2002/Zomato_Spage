import React, { useState ,useEffect} from 'react'
import "./style.css"
import Fooddata from './FoodData'
import Form from 'react-bootstrap/Form';
import Cards from './Cards';
import Set from './Set';


const Search = () => {
    const [fdata, setFdata] = useState(Fooddata);
    //console.log(fdata);
    const[copydata, setCopyData] = useState([]);
    //console.log(copydata);

    useEffect(()=>{
        setTimeout(()=>{setCopyData(Fooddata)},3000)
       console.log("effect ran")
    },[])


    const handleFilterClick = () => {
        console.log('button clicked')
        setCopyData(fdata);
        let filteredRestaurants= copydata.filter((ele,k)=>{console.log(ele.rating);return ele.rating.match(parseFloat(4.0))});
        console.log(filteredRestaurants);
        setCopyData(filteredRestaurants);
      }
      

    const changeData =(e)=>{
        let getchangedata = e.toLowerCase();
        if(getchangedata ==""){
            setCopyData(fdata);
        }
        else{
            let storedata= copydata.filter((ele,k)=>{console.log(ele); return (ele.rname.toLowerCase().match(getchangedata)|| ele.rating.match(getchangedata))});
            setCopyData(storedata);
        }
    }
    const zomatologo = "https://w7.pngwing.com/pngs/356/244/png-transparent-zomato-hd-logo-thumbnail.png"
    
    
    
    return (
        <>
            <div className='container d-flex justify-content-between align-items-center'>
                <img src={zomatologo} style={{ width: "7rem", position: "relative", left: "2%", cursor: "pointer" }} alt="" />
                <h2 style={{ color: "#1b1464", cursor: "pointer" }} className="mt-3">Filter Your Choices</h2>
            </div>
            <Form className="d-flex justify-content-center align-items-center mt-3">
                <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">
                   
                    <Form.Control type="text"
                        onChange={(e)=>changeData(e.target.value)}
                     placeholder="Search Restaurants" />
                   
                </Form.Group>
                <button className= 'btn text-light col-lg-1' type='button' style={{background:'#ed4c67', marginRight: '10px'}}>Submit</button>
                <button className='btn text-light col-lg-1' type='button' style={{background: '#ed4c67'}} onClick={handleFilterClick}>Filter 4+</button>
            </Form>
            <section className='item_section mt-4 container'>
                <h3 style={{left:"2%", fontWeight:"400"}}>Restaurants Nearby </h3>
                 <div className='row mt-2 d-flex justify-content-around align-items-center'>
                    {copydata && copydata.length ?<Cards data={copydata}/>:<Set sdata={fdata} />}
                    {/* {showFilteredData ? <Cards data={filteredData} /> : <Set sdata={fdata} />} */}

                </div>
             </section>
             <section className='footer mt-4  '>
                <h6>Cloned search Page Zomato</h6>
             </section>
           
        </>
    )
}

export default Search