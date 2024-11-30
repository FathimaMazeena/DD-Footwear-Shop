import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditOrderModal extends Component{
    constructor(props){
        super(props);
    }


    handleSubmit = (event) => {
        event.preventDefault();
    
        fetch('https://localhost:7272/api/Orders', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: event.target.OrderId.value,
                status: event.target.OrderStatus.value
                
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
                Edit Order Status
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Row>
    
                <Col sm={6}>
                    <Form onSubmit={this.handleSubmit}>
    
    
                        <Form.Group controlId="OrderId">
                        <Form.Label>Order ID</Form.Label>
                        <Form.Control
                        type="text"
                        name="OrderId"
                        required
                        disabled
                        defaultValue={this.props.ordid}
                        placeholder="Order ID"
                        />
                        </Form.Group>
    
                        <Form.Group controlId="OrderStatus">
                        <Form.Label>Order Status</Form.Label>
                        <Form.Control
                        type="text"
                        name="OrderStatus"
                        required
                        defaultValue={this.props.ordstatus}
                        placeholder=" Order Status"
                        />
                        </Form.Group>
    
                        
    
                        <Form.Group>
                            <Button variant="primary" type="submit">
                            Update Order Status
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




  