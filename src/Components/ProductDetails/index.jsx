import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const response = await fetch(`http://localhost:3001/clothing/detail/${id}`);
        const data = await response.json();
        setProduct(data.data);        
      };
    
      fetchData();
    }
  }, [id]);
  
  // Define the image source with fallback
  const imageSrc = product.linkPhoto || '/images/productdemo.jpg';

  return (
    <div className="product-detail container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={imageSrc}
            className="main-product-image"
            alt={product.name}
          />
          <div className="product-thumbnails">
            <img
              src={imageSrc}
              alt="Thumbnail"
            />
          </div>
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="price">{product.price}</p>
          <p>{product.description}</p>

          <form action={`/orders/create/${product._id}`} method="POST">
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">Quantity</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                defaultValue="1"
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn btn-dark add-to-cart-btn">Order Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
