import React, { useEffect, useState } from "react";
import "./Navbar.css";

import phone_icon from "../Assets/phone_icon.png";
import logo_image from "../Assets/logo_image.png";

import {
  Col,
  Container,
  Row,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  InputGroup,
  FormControl,
  ListGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch } from "react-icons/fa"; // Sử dụng react-icons để có các biểu tượng tìm kiếm và giỏ hàng

const NavbarCusttom = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(false);

  const handleSearchClick = (e) => {
    setSearch(!search);
  };

  const setSearchQuery = (e) => {
    setQuery(e);
  };

  useEffect(() => {
    if (query) {
      const fetchData = async () => {
        const response = await fetch(
          `http://localhost:3001/search?query=${query}`
        );
        const data = await response.json();
        setProducts(data.data);
      };

      fetchData();
    }
  }, [query]);

  return (
    <>
      <div className="home-container">
        <div className="home-top-header">
          <Container>
            <Row>
              <Col className="text-top-header-left">
                <p>
                  <strong>Saigon</strong>: 173 Huỳnh Văn Bánh - Dist. Phú Nhuận{" "}
                  <img src={phone_icon} alt="" />
                </p>
              </Col>
              <Col className="text-top-header-right">
                <p>
                  <strong>Hanoi</strong>: 974 Đường Láng - Dist. Đống Đa{" "}
                  <img src={phone_icon} alt="" />
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={logo_image}
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#home" className="nav-link-custom">
                  HOME
                </Nav.Link>
                <Nav.Link href="#arrivals" className="nav-link-custom">
                  NEW ARRIVALS
                </Nav.Link>
                <NavDropdown
                  title="SHOP"
                  id="basic-nav-dropdown"
                  className="nav-link-custom"
                >
                  <NavDropdown.Item href="#action/3.1">
                    BEST SELLER
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    T-SHIRTS
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">SHIRTS</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#lookbook" className="nav-link-custom">
                  LOOK BOOK
                </Nav.Link>
                <Nav.Link href="#news" className="nav-link-custom">
                  NEWS
                </Nav.Link>
                <Nav.Link href="#contact" className="nav-link-custom">
                  CONTACT US
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <div style={{ width: "100%" }}>
                  <InputGroup className="ml-2" style={{ width: "100%" }}>
                    <FormControl
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </InputGroup>
                  {products.length > 0 && query !== '' && (
                    <ListGroup
                      style={{
                        position: "absolute",
                        top: "100%",
                        width: "215px",
                        zIndex: 1000,
                      }}
                    >
                      {products.map((result, index) => (
                        <Link to={`/detail/${result._id}`} key={index} style={{ textDecoration: 'none' }}>
                        <ListGroup.Item key={index}>
                          {result.name}
                        </ListGroup.Item>
                        </Link>
                      ))}
                    </ListGroup>
                  )}
                </div>
                <Nav.Link href="#search" /*onClick={handleSearchClick}*/>
                  <FaSearch />
                </Nav.Link>
                <Nav.Link href="#cart">
                  <FaShoppingCart />
                </Nav.Link>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarCusttom;
