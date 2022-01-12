import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Modal, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory ,addCategory} from '../../actions/Action'
import Layout from '../../Components/Layout/Layout'
import Input from '../../Components/UI/Input/Input'

const Category = (props) => {

    const category = useSelector(state => state.category);
    const [show, setShow] = useState(false);
    const [categoryName, setCategoryName] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory())
    }, []);

    const handleClose = () => {

        dispatch(addCategory(categoryName))

        setShow(false)
    };
    const handleShow = () => setShow(true);

    const renderCategories = (categories) => {
        let myCategories = [];
        for (let category of categories) {
            myCategories.push(
                <li key={category.name}>
                    {category.name}
                </li>
            );
        }
        return myCategories;
    }

    const createCategoryList= (categories,options=[])=>{
        for(let category of categories){
            options.push({value:category._id,name:category.name})
        }
        return options;
    }

    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>Category</h3>
                            <button onClick={handleShow}>Add +</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <ul>
                            {renderCategories(category.categories)}
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        type={props.type}
                        placeholder={"Category Name"}
                        value={categoryName}
                        onChange={(e)=>setCategoryName(e.target.value)}
                    />

                    {/* <select className="form-control">
                        <option>select category</option>
                        {
                             createCategoryList(category.categories).map(option=>
                                 <option key={option.value} value={option.value}>{option.name}</option>
                             )
                        }
                    </select> */}

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Layout>
    )
}

export default Category
