import { Col, Container, Row, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react';

const CreateProduct = () => {
    const navigate = useNavigate();
    const { ProductID } = useParams();
    const [Product, setProduct] = useState();
    const [Category, setCategory] = useState([]);
    const [Brand, setBrand] = useState([]);
    const [img, setImg] = useState("");
    const name = useRef();
    const category = useRef();
    const price = useRef();
    const beginImage = useRef();
    const discountPercentage = useRef();
    const rating = useRef();
    const stock = useRef();
    const brand = useRef();
    const image = useRef();
    const id = useRef();
    const description = useRef();
    const [productId, setProductId] = useState(0);
    useEffect(() => {
        fetch("http://localhost:9999/product")
            .then((res) => res.json())
            .then((result) => {
                setProductId(result.length + 1);
            });
    }, [])
    useEffect(() => {
        fetch("http://localhost:9999/product")
            .then((res) => res.json())
            .then((result) => {
                result.map((r) => {
                    if (r.id == ProductID) {
                        setProduct(r);
                    }
                })
            });
    }, [])
    useEffect(() => {
        fetch("http://localhost:9999/category")
            .then((res) => res.json())
            .then((result) => {
                setCategory(result);
            });
    }, [])
    useEffect(() => {
        fetch("http://localhost:9999/brand")
            .then((res) => res.json())
            .then((result) => {
                setBrand(result);
            });
    }, [])
    const handleCreate = async () => {
        if (name.current.value == "" || category.current.value == "" ||
            price.current.value == "") {
            alert("Nhập đầy đủ thông tin")
        }if(price.current.value <0 || discountPercentage.current.value < 0) {
            alert("pric or discount <0")
        }
        else {
            try {
                // const link = image.current.value;
                // const links = link.split("\\");
                // const linkname = category.current.value;
                // const nameproduct = name.current.value.trim().split(" ");
                // const linkname = nameproduct.join("_");
                const newproduct = {
                   
                    title: name.current.value,
                    price: price.current.value,
                    description: description.current.value,
                    discountPercentage: parseFloat(discountPercentage.current.value),
                    rating: parseFloat(rating.current.value),
                    stock: stock.current.value,
                    category: category.current.value,
                   brand: brand.current.value
                }

                const response = await fetch("http://localhost:9999/product", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newproduct),
                });
            } catch (error) {
                console.error(error);
                // Handle the error, show an error message, or perform any necessary actions
            }
            navigate("/productmanagement");
        }
    }
    
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={10} style={{ padding: "0" }}>
                        <div className="topbar">
                            <h1 className="admin-title">Create Product</h1>
                        </div>
                        <div className='admin-content'>
                            <Row>
                                <Col md={6}>
                                    <div className="form-group">
                                        <label htmlFor="ID">ID:</label>
                                        <input type="text" className="form-control"
                                            id="ID" defaultValue={ProductID} readOnly />
                                    </div>
                                </Col>
                                <Col m={6}>
                                    <div className="form-group">
                                        <label htmlFor="name">Tilte:</label>
                                        <input type="text"
                                            className="form-control"
                                            id="name"
                                            ref={name} />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="form-group">
                                        <label htmlFor="price">Price:</label>
                                        <input type="number"
                                            className="form-control"
                                            id="price"
                                            ref={price} />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="form-group">
                                        <label htmlFor="discountPercentage">Discount:</label>
                                        <input type="number"
                                            className="form-control"
                                            id="discountPercentage"
                                            ref={discountPercentage} />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="form-group">
                                        <label htmlFor="rating">Rating:</label>
                                        <input type="number"
                                            className="form-control"
                                            id="rating"
                                            ref={rating} />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="form-group">
                                        <label htmlFor="stock">Stock:</label>
                                        <input type="number"
                                            className="form-control"
                                            id="stock"
                                            ref={stock} />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="form-group">
                                        <label htmlFor="brand">Brand:</label>
                                        <select className="form-control"
                                            id="brand"
                                            ref={brand}>
                                            {Brand.map((b) => {
                                                return (
                                                    <option
                                                        value={b.id}>
                                                        {b.name}
                                                    </option>
                                                )
                                            })
                                            }
                                        </select>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="form-group">
                                        <label htmlFor="category">Category:</label>
                                        <select className="form-control"
                                            id="category"
                                            ref={category}>
                                            {Category.map((c) => {
                                                return (
                                                    <option
                                                        value={c.id}>
                                                        {c.name}
                                                    </option>
                                                )
                                            })
                                            }
                                        </select>
                                    </div>
                                </Col>
                                <Col m={6}>
                                    <div className="form-group">
                                        <label htmlFor="description">Description:</label>
                                        <input type="text"
                                            className="form-control"
                                            id="description"
                                            ref={description} />
                                    </div>
                                </Col>
                            </Row>
                            <Button style={{ marginTop: "10px" }}
                                onClick={() => handleCreate()}>
                                Create
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default CreateProduct;