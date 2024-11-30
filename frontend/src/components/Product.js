import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {AddProductModal} from './AddProductModal';
import {EditProductModal} from './EditProductModal';

export class Product extends Component{

    constructor(props){
        super(props);
        this.state={pro:[], addModalShow:false,  editModalShow:false}
    }

    

    refreshList(){
        fetch('https://localhost:7272/api/Products')
        .then(response=>response.json())
        .then(data=>{
            this.setState({pro:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    render(){

        const {pro, proid, proname, proprice, proquantity}=this.state;
        let addModalClose =() => this.setState({addModalShow:false});
        let editModalClose =() => this.setState({editModalShow:false});
        return(
            <>
            <Table className="mt-4" striped bordered hover size>

                <thead>
                    <tr>
                        <th>ProductId</th>
                        <th>ProductName</th>
                        <th>ProductPrice</th>
                        <th>ProductQuantity</th>
                        <th>Manage Product</th>
                    </tr>
                </thead>

                <tbody>
                    {pro.map((Product) => (
                        <tr key={Product.ProductId}>
                            <td>{Product.id}</td>
                            <td>{Product.name}</td>
                            <td>{Product.price}</td>
                            <td>{Product.quantity}</td>
                            <td>
                                <ButtonToolbar>
                                    <Button
                                    className="mr-2" variant="info"
                                    onClick={()=>this.setState({editModalShow:true, proid:Product.id, proname:Product.name, proprice:Product.price, proquantity:Product.quantity})}
                                    >
                                        Edit
                                    </Button>

                                    <EditProductModal
                                    show={this.state.editModalShow}
                                    onHide={editModalClose}
                                    proid={proid}
                                    proname={proname}
                                    proprice={proprice}
                                    proquantity={proquantity}
                                    />
                                </ButtonToolbar>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </Table>

            <ButtonToolbar>
                <Button
                variant='primary'
                onClick={() => this.setState({addModalShow: true})}
                >Add product
                </Button>

                <AddProductModal
                    show={this.state.addModalShow}
                    onHide={addModalClose}
                />
            </ButtonToolbar>

            
           </>


        )
    }
}