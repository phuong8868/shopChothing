import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import './ProductGrid.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function ProductGrid() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/clothing');
      const data = await response.json();
      setProducts(data.data);
    };
  
    fetchData();
  }, []);

  return (
    <Container className="product-container">
      <h2 className="section-title">NEW ARRIVALS</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={6} md={4} lg={3}>
            <Card className="product-card">
              <Card.Img variant="top" src={product.linkPhoto} />
              <Card.Body>
                <Card.Title className="product-name">{product.name}</Card.Title>
                <Card.Text className="product-price">{product.price}</Card.Text>
                {/* <Button variant="outline-dark" className="add-to-cart-btn">
                  <i className="bi bi-cart"></i>
                </Button> */}
                <Link to={`/detail/${product._id}`} className="btn btn-primary">
                View Details
              </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="see-more">
        <Button variant="dark">SEE MORE</Button>
      </div>
    </Container>
  );
}

export default ProductGrid;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function ProductGrid() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3001/clothing')  // URL API của backend
//       .then(response => setProducts(response.data))
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

//   return (
//     <div>
//       {products.map(product => (
//         <div key={product._id}>
//           <h3>{product.name}</h3>
//           <p>{product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductGrid;


// import React, { useEffect, useState } from 'react';

// function ProductGrid() {
//   // Khởi tạo products là một mảng rỗng
//   const [products, setProducts] = useState([]);

//   // Sử dụng useEffect để lấy dữ liệu từ API khi component được render lần đầu
//   useEffect(() => {
//     fetch('http://localhost:3001/clothing')  // URL API của backend
//       .then(response => response.json())
//       .then(data => {
//         console.log('Fetched data:', data);
//         // Kiểm tra xem data có phải là một mảng không, nếu có thì cập nhật state
//         if (Array.isArray(data)) {
//           setProducts(data);
//         } else {
//           console.error('Expected an array but got:', data);
//         }
//       })
//       .catch(error => console.error('Error fetching products:', error));
//   }, []); // Mảng dependencies rỗng để chỉ chạy useEffect một lần khi component được mount

//   return (
//     <div className="product-grid">
//       {/* Kiểm tra nếu products là một mảng thì sử dụng .map() */}
//       {Array.isArray(products) ? (
//         products.map(product => (
//           <div key={product._id} className="product-card">
//             <h3>{product.name}</h3>
//             <p>{product.price}</p>
//           </div>
//         ))
//       ) : (
//         <p>No products available</p>
//       )}
//     </div>
//   );
// }

// export default ProductGrid;
