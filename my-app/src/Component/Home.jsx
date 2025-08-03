import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  const [product, setproduct] = useState([]);
  const [category,setcatagory]=useState([]);
    const [searchTerm, setSearchTerm] = useState('');

  const FetchProducts = async () => {
    const result = await axios.get(` https://api.escuelajs.co/api/v1/products`);
    

    setproduct(result.data);
  };


    const FetchCategories = async () => {
    const result = await axios.get(` https://api.escuelajs.co/api/v1/categories`);
    // console.log(result.data);

    setcatagory(result.data);
  };
  console.log("category",category);

    useEffect(() => {
    FetchCategories();
  }, []);
  useEffect(() => {
    FetchProducts();
  }, []);


  
  const filteredUsers = product?.filter(user =>
    user.category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.title.toLowerCase().includes(searchTerm.toLowerCase())
    
  );
  const filteredCategories = category.filter(category => category.id <= 5);

  console.log("filteredCategories",filteredCategories);

  return (
    <div className="container my-4">

        <Navbar />

         <div className="mb-3">
            <input
              type="text"
              placeholder="Search by name and category"
              className="form-control"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{width:"400px"}}
            />
          </div>
            <section>
            <div className="container">
              <div
                id="myCarousel"
                class="carousel slide p-rea"
                data-bs-ride="carousel"
                data-bs-interval="2000"
              >
               
              </div>
            </div>
          </section>

 <div className="row">
  {filteredCategories.length!==0?<h4>Category</h4>:null} 
        {filteredCategories.map((item, index) => {
          return (
            <div className="col-2 m-2 ">
              <div
                class="card"
                style={{ width: "13rem", height: "300px", padding: "20px" }}
              >
                <img
                  src={item.image}
                  class="card-img-top"
                  alt="..."
                  height={200}
                  width={100}
                />
                <div class="card-body">
                  <h5 class="card-title">{item.name}</h5>
               
                </div>
              </div>
            </div>
          );
        })}

       


      </div>
       {filteredUsers.length!==0?<h4>All Products</h4>:null} 

      <div className="row">
        {filteredUsers.length!==0?filteredUsers.map((item, index) => {
          return (
            <div className="col-3 my-4">
              <div
                class="card"
                style={{ width: "18rem", height: "400px", padding: "20px" }}
              >
                <img
                  src={item.category.image}
                  class="card-img-top"
                  alt="..."
                  height={200}
                  width={100}
                />
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                  <p class="card-text">{item.price}</p>
                  <NavLink
                    to={`productDetails/${item.id}`}
                    style={{
                      backgroundColor: "black",
                      border: "none",
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "white",
                      borderRadius: "10px",
                      padding: "10px",
                    }}
                    class="btn btn-primary"
                  >
                    Show details
                  </NavLink>
                </div>
              </div>
            </div>
          );
        }):  <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '90vh' }}
    >
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>}

       


      </div>

  
    </div>
  );
};

export default Home;
