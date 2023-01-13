import React, { Component } from "react";
import Nav from './Navbar/Bar';
import Table from './Cart/cart';

class all extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div class="container-fluid ">
                <Nav/>
                <p class="text-center fw-bolder fs-1">รายการอาหาร</p>
                <div class="row justify-content-center">
                    <div class="col-md-8">
                    <Table/>
                        
                    </div>
                </div>
            </div>
                
        );
    }
}

export default all;