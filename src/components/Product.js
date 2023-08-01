import React from 'react'
import { useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {add} from '../store/cart'
import { useDispatch,useSelector } from 'react-redux';
import {getProducts}  from '../store/product';
import { Audio } from 'react-loader-spinner'
function Product() {
  const dispatch=useDispatch()
  const {data:products} = useSelector(state=>state.product)
  const{loading}=useSelector(state=>state.product)
  useEffect(()=>{
    //dispatch an action for getting products
    // fetch('https://fakestoreapi.com/products')
    // .then(data=>data.json())
    // .then(result=>getProducts(result))
    // dispatch(getProducts())
    setTimeout(() => {
      dispatch(getProducts())
    }, 2000);
  },[dispatch])
  
  const addToCart = (product) =>{
    //dispatch the add action
    dispatch(add(product))
  }
  const cards=products.map(product=>(
    <div className="col-md-3" style={{marginBottom:'10px'}}>
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
        <Button variant="primary" onClick={()=>addToCart(product)}>Add To Cart</Button>
        </Card.Footer>
    </Card>
    </div>
  ))
  const loader=(
    <div className="load">
    <Audio
    height="80"
    width="80"
    radius="9"
    color="green"
    ariaLabel="loading"
    wrapperStyle
    wrapperClass
  />
  </div>
  )
  return (
    <div className="App">
        <h1>Product dashboard</h1>
        <div className="row">
        {loading ? (
       loader // Display the spinner if loading is true
      ) : (
        cards // Display your content if loading is false
      )}
        </div>

    </div>
  )
}

export default Product