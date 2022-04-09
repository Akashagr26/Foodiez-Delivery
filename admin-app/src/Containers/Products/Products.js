import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../Components/Layout/Layout'
import Input from '../../Components/UI/Input/Input'
import { addProduct } from '../../actions/Action'
import Modal from '../../Components/UI/Modal/Modal'
import './style.css'
import { generatePublicUrl } from '../../urlConfig'

const Products = (props) => {

    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [productPictures, setProductPictures] = useState([]);
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [productDetailModal, setProductDetailModal] = useState(false);
    const [productDetails, setProductDetails] = useState(null);

    const dispatch = useDispatch();

    const category = useSelector(state => state.category);
    const product = useSelector(state => state.product)

    const handleProductPictures = (e) => {

        setProductPictures([
            ...productPictures,
            e.target.files[0]
        ]);
        console.log(productPictures);
    }

    const createCategoryList = (categories, options = []) => {
        for (let category of categories) {
            options.push({ value: category._id, name: category.name })
        }
        return options;
    }

    const handleClose = () => {
        setShow(false)
        setName("");
        setCategoryId("");
        setProductPictures([]);
        setPrice("");
        setDescription("");
    };

    const addNewProduct = () => {

        const form = new FormData();
        form.append("name", name);
        for (let pic of productPictures) {
            form.append("productPicture", pic);
        }
        form.append("price", price);
        form.append("description", description);
        form.append("category", categoryId);

        dispatch(addProduct(form,category.categories));
        handleClose();
    }
    const handleShow = () => setShow(true);


    const renderProducts = () => {
        return (
            <Table style={{ fontSize: 14 }} responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.products.length > 0 ?
                            product.products.map(product =>
                                <tr onClick={() => showProductDetailsModal(product)} key={product._id}>
                                    <td>2</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td>{product.category.name}</td>
                                </tr>
                            ) : null
                    }

                </tbody>
            </Table>
        )
    }

    const renderAddProductModal = () => {
        return (
            <Modal
                show={show}
                handleClose={handleClose}
                modalTitle={'Add New Product'}
                addOperation={addNewProduct}
            >

                <Input
                    // type={props.type}
                    // label="Product Name"
                    placeholder={"Product Name"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    type="number"
                    // label="Product Price"
                    placeholder={"Product Price"}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <Input
                    // type={props.type}
                    // label="Product Description"
                    placeholder={"Product Description"}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <br />
                <select
                    className="form-control form-select"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)} >
                    <option>Select category</option>
                    {
                        createCategoryList(category.categories).map(option =>
                            <option key={option.value} value={option.value}>{option.name}</option>
                        )
                    }
                </select>
                <br />

                {
                    productPictures.length > 0 ?
                        productPictures.map((pic, index) => <div key={index}> {pic.name}</div>) : null
                }

                <Input
                    type="file"
                    // label="Product Picture"
                    placeholder={"Product Picture"}
                    onChange={handleProductPictures}
                />

            </Modal>
        )
    }

    const handleCloseProductDetailsModal = () => {
        setProductDetailModal(false)
    }

    const showProductDetailsModal = (product) => {
        setProductDetails(product);
        setProductDetailModal(true)
    }

    const renderProductDetailsModal = () => {

        if (!productDetails) {
            return null
        }

        return (
            <Modal
                show={productDetailModal}
                handleClose={(handleCloseProductDetailsModal)}
                modalTitle={'Product Details'}
                size="lg"
            >

                <Row>
                    <Col md="6">
                        <label className="key">Name</label>
                        <p className="value">{productDetails.name}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Price</label>
                        <p className="value">{productDetails.price}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <label className="key">Description</label>
                        <p className="value">{productDetails.description}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Category</label>
                        <p className="value">{productDetails.category.name}</p>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <label className='key'>Product Pictures</label>
                        <div style={{ display: 'flex' }}>
                            {productDetails.productPictures.map(picture =>
                                <div className="productImgContainer">
                                    <img src={generatePublicUrl(picture.img)} />
                                </div>
                            )}
                        </div>

                    </Col>
                </Row>

            </Modal>
        )
    }


    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>Product</h3>
                            <button onClick={handleShow}>Add +</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        {renderProducts()}
                    </Col>
                </Row>
            </Container>
            {renderAddProductModal()}
            {renderProductDetailsModal()}

        </Layout>
    )
}

export default Products