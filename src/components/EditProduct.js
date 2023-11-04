import { Col, Container, Row, Button } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react';


const EditProduct = () => {
    const navigate = useNavigate();
    const defaultProduct = {
        ID: 0,
        Name: "",
        Category_ID: 1,
        Images: "",

    }
    const { ProductID } = useParams();
    const [Product, setProduct] = useState(defaultProduct);
    const [Category, setCategory] = useState([]);
    const name = useRef();
    const category = useRef();
    const price = useRef();
    const image = useRef();

    const [img, setImg] = useState("");

    const [isChange, setIsChange] = useState(true);
    useEffect(() => {
        fetch("http://localhost:9999/Product")
            .then((res) => res.json())
            .then((result) => {
                const currentProduct = result.find((r) => {
                    return r.id == ProductID;
                })
                setProduct(currentProduct);
                setImg(currentProduct.Images)
            });
    }, [])

    useEffect(() => {
        fetch("http://localhost:9999/Category")
            .then((res) => res.json())
            .then((result) => {
                setCategory(result);
            });
    }, [])
    const updateImage = (e) => {
        const link = e.target.value;
        const links = link.split("\\");
        const linkname = category.current.value;
        // const nameproduct = name.current.value.trim().split(" ");
        // const linkname = nameproduct.join("_");
        setImg(`../../images/Product/${linkname}/${links.pop()}`)
    }

    const handleProduct = () => {
        if (name.current.value == "" || category.current.value == ""
            || price.current.value == ""
            && image.current.value == "") {
            alert("Nhập đầy đủ thông tin")
        }
        else {
            const newproduct = {
                id: ProductID,
                Name: name.current.value,
                Category_ID: category.current.value,
                Price: price.current.value,
                Images: img,
            }
            fetch(`http://localhost:9999/Product/${ProductID}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newproduct),
            });
            alert("Change Successfully")
            setIsChange(!isChange)
        }
        navigate("/");
    }
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={10} style={{ padding: "0" }}>
                        <div className="topbar">
                            <h1 className="admin-title">Edit Product</h1>
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
                                <Col md={6}>
                                    <div className="form-group">
                                        <label htmlFor="category">Category:</label>
                                        <select className="form-control" id="category" ref={category}>
                                            {
                                                Category.map((c) => {
                                                    return (
                                                        <option selected={c.id == Product.Category_ID}
                                                            value={c.id}>{c.Category_Name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name:</label>
                                        <input type="text" className="form-control" id="name"
                                            defaultValue={Product.Name} ref={name} />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="form-group">
                                        <label htmlFor="price">Price:</label>
                                        <input type="number" className="form-control"
                                            id="price" defaultValue={Product.Price} ref={price} />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <img src={img} style={{ width: "100%" }} />
                                    <div className="form-group">
                                        <label htmlFor="image">Image:</label>
                                        <input type="file" className="form-control"
                                            id="image" ref={image} onChange={(e) => updateImage(e)} />
                                    </div>
                                </Col>

                            </Row>
                            <Button style={{
                                marginTop: "50px",
                                height: "70px", width: "150px",
                                fontSize: "30px", fontWeight: "600"
                            }}
                                onClick={() => handleProduct()}>Save</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default EditProduct;