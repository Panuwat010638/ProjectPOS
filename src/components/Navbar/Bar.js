import './App.css';
import './stye/stye.css';
import React, { Component } from "react"
import dofor from './image/dofor.png'
var green = '#39D1B4';

class Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <div class="container-fluid">
                    <div class="row">
                        
                        <nav class="navbar navbar-expand-lg navbar-light bg-fff">
                            
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav mr-auto">
                                <img src={dofor} width="100" height="50" class="d-inline-block align-top" alt=""></img>
                                    <li class="nav-item active">
                                        <a class="nav-link fs-2" href="Home">หน้าหลัก </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link fs-2" >การติดต่อ</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle fs-2" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            เมนู
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="1">มื้อเช้า</a>
                                            <a class="dropdown-item" href="2">มื้อเทียง </a>
                                            <a class="dropdown-item" href="3">มื้อเย็น </a>
                                            <a class="dropdown-item" href="4">เครืองดื่ม</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" >เมนู ฮิต</a>
                                        </div>
                                    </li>

                                </ul>

                            </div>
                            <form class="form-inline my-2 my-lg-0">
                                <button class="btn btn-outline-success my-2 my-sm-0" href="sub">อาหารที่สั่ง</button>
                                <button class="btn btn-outline-success my-2 my-sm-0" href="sub">ตะกร้าสินค้า</button>
                            </form>
                        </nav>
                        
                    </div>
                </div>


            </div>



        );

    }
}
export default Bar;







