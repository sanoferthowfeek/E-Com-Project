import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cardsdata from './CardsData'
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/Action.jsx';

const Cards = () => {

  const [data, setData] = useState(Cardsdata);
  // console.log(data);


  const dispatch = useDispatch();


  const send = (e)=>{
    // console.log(e);
    dispatch(ADD(e));
  }

  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Shopping App Projects</h2>

      <div className="row d-flex justify-content-center align-items-center">
        {
          data.map((element, id) => {
            return (
              <>
                <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style">
                  <Card.Img variant="top" src={element.thumbnail} style={{height:"16rem"}} className="mt-3" />
                  <Card.Body>
                    <Card.Title> <h2>Title: {element.title}</h2></Card.Title>
                    <Card.Text>
                      <h3>Brand : {element.brand}</h3>
                      
                    <h4>Price : ₹ {element.price} </h4>
                    <h5>Stock : {element.stock} </h5>
                    <h5>Discount: {element.discountPercentage}%</h5>
                    <h6>Category : {element.category}</h6>
                    <h6>Description : {element.description} </h6>
                    <h6>Rating : {element.rating} </h6>


                    </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                    <Button variant="primary"  
                      onClick={()=> send(element)}
                     className='col-lg-12'>Add to Cart</Button>
                    </div>
                  
                  </Card.Body>
                </Card>
              </>
            )
          })
        }

      </div>
    </div>
  )
}

export default Cards