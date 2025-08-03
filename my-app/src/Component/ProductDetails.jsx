import React from 'react';
import { useState,useEffect ,useContext} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Rating from './Ratings';
import { ProductContext } from './ProductContext';
import Navbar from './Navbar';

const ProductDetails = () => {
  const { addToCart } = useContext(ProductContext);

    const [productdetails, setproductdetails] = useState([]);
    const {id}=useParams();

    console.log("id",id);
  const FetchProducts = async () => {
    const result = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
    console.log(result.data);

    setproductdetails(result.data);
  };

console.log(productdetails);
  useEffect(() => {
    FetchProducts();
  }, []);

  return (
    <div className='container my-4'>
          <Navbar/>
        <div className='row'>
             <div className='col-6'>
            
                <img src={productdetails?.category?.image} alt=""  height={500} width={400}/>
             </div>
               
               <div className='col-6'>
                      <h3>{productdetails.title}</h3>
                      <h4>    <i className="bi bi-currency-dollar"></i>{productdetails.price}</h4>
                      <p>{productdetails.description}</p>
                       <Rating value={productdetails.ratings} />
                       <button className='btn btn-primary my-4'   onClick={() => addToCart(productdetails.id)}> Add to Cart</button>

             </div>
        </div>
      
    </div>
  )
}

export default ProductDetails
