import React, { useEffect, useState } from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory ,addCategory} from '../../actions/Action'
import Layout from '../../Components/Layout/Layout'
import Input from '../../Components/UI/Input/Input'
import Modal from "../../Components/UI/Modal/Modal"

const Category = (props) => {

    const category = useSelector(state => state.category);
    const [show, setShow] = useState(false);
    const [categoryName, setCategoryName] = useState('');
    const dispatch = useDispatch();

    
    const handleClose = () => {
        setShow(false)
        setCategoryName("");
    };
    const handleShow = () => setShow(true);

    const addNewCategory=()=>{
        dispatch(addCategory(categoryName));
        handleClose();
    }

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

    // const createCategoryList= (categories,options=[])=>{
    //     for(let category of categories){
    //         options.push({value:category._id,name:category.name})
    //     }
    //     return options;
    // }

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

            <Modal
                show={show}
                handleClose={handleClose}
                addOperation={addNewCategory}
                modalTitle={"Add New Category"}
            >

                <Input
                    type={props.type}
                    placeholder={"Category Name"}
                    value={categoryName}
                    onChange={(e)=>setCategoryName(e.target.value)}
                />


            </Modal>
            
        </Layout>
    )
}

export default Category
