import React, { Component } from "react"
import do2 from "./LR/img/do2.png"
import food from "./LR/img/2.jpg"

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
          
    <div class="container">
       <div class="row-7">
       <img src={do2} width="300" height="50" class="d-inline-block align-top" alt=""></img>
  </div>
      <div class="row p-4 border bg-light1" >
        <div class="col" > <img src={food} width="600" height="100" class="d-inline-block align-top" alt=""></img></div>
        
        <div class="col " >
            
            <form class="p-4 border bg-light1" >
            <p class="fs-1">LOGIN</p>
                <div className="form-group">
                    <label for="validationDefaultUsername" class="form-label">USERNAME</label>
                    <div class="input-group mb-3">
                    <input type="username" className="form-control" placeholder="Enter Username" aria-describedby="inputGroupPrepend2" required/>
                    </div>
                </div>
                <div class="row-12">
                    <label for="validationDefaultUsername" class="form-label">PASSWORD</label>
                    <div class="input-group mb-3">
                    <input type="password" className="form-control" placeholder="Enter Password" aria-describedby="inputGroupPrepend2" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <div class="col-12">
                  <button type="login" className="btn btn-success btn-block-start">LOGIN</button>
                  </div>
            </form>
        </div>
      </div>
    </div>
      
        );
    }
}
export default login;