import { Button, Col, Container, FormControl, Row, Table } from 'react-bootstrap'
import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import SideBar from './SideBar';

const AdminListProduct = () => {
    const [Product, setProduct] = useState([]);
    const [searchedProduct, setSearchedProduct] = useState([]);
    const [Category, setCategory] = useState([]);
    const [Brand, setBrand] = useState([]);
    const search = useRef("");

    useEffect(() => {
        fetch("http://localhost:9999/category")
            .then((res) => res.json())
            .then((result) => {
                setCategory(result);
            });
    }, []);

    useEffect(() => {
        fetch("http://localhost:9999/brand")
            .then((res) => res.json())
            .then((result) => {
                setBrand(result);
            });
    }, []);

    useEffect(() => {
        fetch("http://localhost:9999/product")
            .then((res) => res.json())
            .then((result) => {
                setSearchedProduct(result);
                setProduct(result);
            });
    }, []);

    const filterByBrand = (e) => {
       
            setSearchedProduct(Product.filter((p) => p.brand === e.target.value));
 
    };

    const SearchedList = (key) => {
        const searchedList = Product.filter((p) => p.title.toLowerCase().includes(key.current.value.toLowerCase()));
        setSearchedProduct(searchedList);
    };


    return (
        <div>
            <Container fluid>
                <Row>
                    <SideBar />
                    <Col md={10} style={{ padding: "0" }}>
                        <div className="topbar">
                            <h1 className="admin-title">Product Management</h1>
                        </div>
                        <div className='admin-content'>
                            <Container>
                                <Row style={{ marginBottom: "20px" }}>
                                    <Col md={4}>
                                    <div>
                                            <label>Filter By Brand:</label>
                    
                                            {Brand.map((b) => (
                                                <div key={b.id}>
                                                    <input
                                                        type="radio"
                                                        id={b.id}
                                                        name="brandFilter"
                                                        value={b.id}
                                                        onChange={(e) => filterByBrand(e)}
                                                    />
                                                    <label htmlFor={b.id}>{b.name}</label>
                                                </div>
                                            ))}
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className='input-group'>
                                            <FormControl type='text' placeholder='Enter title to search'
                                                ref={search}
                                                onChange={() => SearchedList(search)} />
                                            <div className='input-group-prepend'>
                                                {/* <Button className='btn-dark'
                                                    onClick={() => SearchedList(search)}>
                                                    Search
                                                </Button> */}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <Link to="/createproduct">

                                            Create a new product

                                        </Link>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <Table>
                                            <thead
                                                style={{
                                                    backgroundColor: '#1dbd55',
                                                    color: 'black',
                                                    fontWeight: 'bold', // Kiểu chữ in đậm
                                                }}>
                                                <th>Id</th>
                                                <th>Title</th>
                                                <th>Description</th>
                                                <th>Price</th>
                                                <th>Discount (%)</th>
                                                <th>Brand</th>
                                                <th>Category</th>


                                            </thead>
                                            <tbody>
                                                {
                                                    searchedProduct.map((p) => {
                                                        return (
                                                            <tr>
                                                                <td>{p.id}</td>
                                                                <td>{p.title}</td>
                                                                <td>{p.description}</td>
                                                                <td>{p.price}</td>
                                                                <td>{p.discountPercentage}</td>
                                                                <td>{
                                                                    Brand.map((b) => {
                                                                        if (b.id == p.brand)
                                                                            return b.name
                                                                    })
                                                                }</td>
                                                                <td>{
                                                                    Category.map((c) => {
                                                                        if (c.id == p.category)
                                                                            return c.name
                                                                    })
                                                                }</td>

                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </Table>

                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
export default AdminListProduct;