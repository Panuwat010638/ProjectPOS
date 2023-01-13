import React, { Component } from "react";
import Nav from './Navbar/Bar';
import Tableorder from './order/order';


class allorder extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div class="container-fluid ">
                <Nav/>
                <p class="text-center fw-bolder fs-1">รายการอาหารทั้งหมด</p>
                <div class="row justify-content-center">
                    <div class="col-md-8">
                    <Tableorder/>
                        
                    </div>
                    
                </div>
            </div>
                
        );
    }
}

export default allorder;