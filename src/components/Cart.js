import React from 'react'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { remove } from '../store/cart';

function Cart() {
  const dispatch=useDispatch()
  const cartProducts=useSelector(state=>state.cart)
  const cards=cartProducts.map(product=>(
    <div className="col-md-12" style={{marginBottom:'10px'}}>
        <Card key={product.id} className="h-100">
        <div className="text-center">
        <Card.Img variant="top" src={product.image} style={{width: '100px', height: '130px'}} />
        </div>
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
             INR: {product.price}
            </Card.Text>
        </Card.Body>
        <Card.Footer style={{background:'white'}}>
        <Button variant="danger" onClick={()=>dispatch(remove(product.id))}>Remove Item</Button>
        </Card.Footer>
    </Card>
    </div>
  ))
  return (
    <div>
        <div className="row">
          {cards}
        </div>
    </div>
  )
}

export default Cart