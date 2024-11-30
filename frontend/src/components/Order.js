import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {EditOrderModal} from './EditOrderModal';

export class Order extends Component {
    
    constructor(props) {
        super(props);
        this.state = { ord: [], editModalShow:false};
    }

    refreshList() {
        fetch('https://localhost:7272/api/Orders')
            .then(response => response.json())
            .then(data =>{
                this.setState({ord:data});
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    render() {

        const {ord, ordid, ordstatus}=this.state;
        let editModalClose =() => this.setState({editModalShow:false});

        return (
            <>
                <Table className="mt-4" striped bordered hover size="md">
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Customer Id</th>
                            <th>Customer Name</th>
                            <th>Address</th>
                            <th>Contact</th>
                            <th>Order Status</th>
                            <th>Manage Order Status</th>
                        </tr>
                    </thead>

                    <tbody>
                  
                        {ord.map((Order) => (
                            <tr key={Order.OrderId}>
                                <td>{Order.id}</td>
                                <td>{Order.customerId}</td>
                                <td>{Order.customerName}</td>
                                <td>{Order.address}</td>
                                <td>{Order.contact}</td>
                                <td>{Order.status}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button
                                        className="mr-2" variant="info"
                                        onClick={()=>this.setState({editModalShow:true, ordid:Order.id, ordstatus:Order.status})}
                                        >
                                            Edit
                                        </Button>

                                        <EditOrderModal
                                        show={this.state.editModalShow}
                                        onHide={editModalClose}
                                        ordid={ordid}
                                        ordstatus={ordstatus}
                                        />
                                  </ButtonToolbar>
                                </td>
 
                              
                            </tr>
                        ))}
                    </tbody>
                </Table>

                
            </>
        );
    }
}
