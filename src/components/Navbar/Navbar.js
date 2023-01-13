import React ,{Component} from 'react';
import basket from './image/basket.png'
import dofor from './image/dofor.png'
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
                             <a class="navbar-brand" href="1">
                                    <img src={dofor} width="100" height="50" class="d-inline-block align-top" alt=""></img>
                              
                            </a>
                            <a class="navbar-brand" href="1">
                                    
                              หน้าหลัก
                            </a>
                        <div class="collapse navbar-collapse" id="main_nav">
                            <ul class="navbar-nav">
                                
                                <li class="nav-item"><a class="nav-link" href="#"> การติดต่อ </a></li>
                                
                                <li class="nav-item dropdown">
                                    <a class="nav-link  dropdown-toggle" href="#" data-toggle="dropdown"> เมนู </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="2"> มื้อเช้า </a></li>
                                        <li><a class="dropdown-item" href="3"> มื้อเทียง </a></li>
                                        <li><a class="dropdown-item" href="4"> มื้อเย็น</a></li>
                                        <li><a class="dropdown-item" href="5"> เครื่องดื่ม</a></li>
                                        <li><a class="dropdown-item" href="#"> เมนูฮิต </a></li>
                                    </ul>
                                </li>
                            </ul>
                            
                        </div>
                        <a class="navbar-brand" href="1">
                                    <img src={basket} width="30" height="30" class="d-inline-block align-top" alt=""></img>

                                </a>
                    </nav>
    );
  }
}

export default Navbar;
