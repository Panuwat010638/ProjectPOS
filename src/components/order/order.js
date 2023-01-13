import React, { Component } from 'react';
import Swal from "sweetalert2"; 
var l=0;

class order extends Component {
    constructor(props) {
        super(props);
        this.state = {
          arr: [],
          clients: [],
        };
        this.Insert = this.Insert.bind(this);
        this.HandleClick = this.HandleClick.bind(this); 
      
    }
    HandleClick() {  
        Swal.fire({
            title: 'เรียกเก็บเงินหรือไม่ ?',
            text: "ต้องการเรียกเก็บเงินหรือไม่",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ยืนยัน'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'ยืนยันแล้ว!',
                'ขอบคุณที่ใช้บริการ',
                'เสร็จสิ้น'
              )
            }
          });}
    // -------------------------------------
    //               INSERT
    // -------------------------------------
    Insert() {
      var data = new FormData();
      data.append(
          "firstName",
          document.getElementById("NameInsert").value
      );
      const axios = require('axios');
      axios.post('http://localhost:138/insert.php', data)
          .then(function (response) {
              console.log(response);
              console.log(document.getElementById("NameInsert").value);
              window.location.reload();
          })
          .catch(function (error) {
              console.log(error);
          });
  }
     
  


  // -------------------------------------
  //               SELECT
  // -------------------------------------
  componentDidMount(Code) {
      const axios = require("axios");
      axios
          .get("http://localhost:138/selectcart.php")
          .then((response) => {
              this.setState({ clients: response.data });
              // console.log(this.state.arr)
          })
          .catch(function (error) {
              // handle error
              console.log(error);
          });
      // console.log(123)
      console.log(this.state.clients)
  }
  
    render() {
      let { clients } = this.state;
      
      return (
          
        <div className="order">
                <div class="container">
                    
                    
                    
                    <div class="row p-4 border bg-light">
                        
                        <div class="col">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">ลำดับ</th>
                                        <th scope="col">รายการอาหาร</th>
                                        <th scope="col">Topping</th>
                                        <th scope="col">จำนวน</th>
                                        <th scope="col">ราคา</th>
                                        <th scope="col">รวม</th>
                                    </tr>
                                </thead>
                                <tbody>
                                
                                    {
                                        clients.map((i, j) =>
                                            <tr>
                                                <td>{j + 1}</td>
                                                <td>{i.name}</td>
                                                <td>{i.options}</td>
                                                <td>{i.quantity}</td>
                                                <td>{i.unitprice*i.quantity}</td>
                                                <td>{l+=i.unitprice*i.quantity}</td>
                                                
                                            </tr>
                                            
                                        )
                                       
                                    }
                                </tbody>
                                
                            </table>
                            
                        </div>
                    </div>
                    
                    <button class="btn btn-info btn" onClick={this.HandleClick}>ยืนยัน</button>  


                    
                </div>
            </div>
        );
    }
}

export default order;