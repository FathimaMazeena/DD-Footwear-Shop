import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditProductModal extends Component{
    constructor(props){
        super(props);
    }


    handleSubmit = (event) => {
        event.preventDefault();
    
        fetch('https://localhost:7272/api/Products', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id:event.target.ProductId.value,
                name: event.target.ProductName.value,
                price: event.target.ProductPrice.value,
                quantity: event.target.ProductQuantity.value
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('API response:', data);
            // Handle success, if needed
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error, if needed
        });
    }


    render(){
        return(

            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Edit Product
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Row>

                <Col sm={6}>
                    <Form onSubmit={this.handleSubmit}>


                        <Form.Group controlId="ProductId">
                        <Form.Label>Product ID</Form.Label>
                        <Form.Control
                        type="text"
                        name="ProductId"
                        required
                        disabled
                        defaultValue={this.props.proid}
                        placeholder="Product ID"
                        />
                        </Form.Group>

                        <Form.Group controlId="ProductName">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                        type="text"
                        name="ProductName"
                        required
                        defaultValue={this.props.proname}
                        placeholder="Product Name"
                        />
                        </Form.Group>

                        <Form.Group controlId="ProductPrice">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control
                        type="text"
                        name="ProductPrice"
                        required
                        defaultValue={this.props.proprice}
                        placeholder="Product Price"
                        />
                        </Form.Group>

                        <Form.Group controlId="ProductQuantity">
                        <Form.Label>Product Quantity</Form.Label>
                        <Form.Control
                        type="text"
                        name="ProductQuantity"
                        required
                        defaultValue={this.props.proquantity}
                        placeholder="Product Quantity"
                        />
                        </Form.Group>

                        <Form.Group>
                            <Button variant="primary" type="submit">
                            Update Product
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>


        );
    }
}    
