import React, { Component } from 'react';
import Swal from "sweetalert2";  

class cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          arr: [],
          clients: [],
          count: 0
        };
        this.Insert = this.Insert.bind(this);
        this.Update = this.Update1p.bind(this);
        this.Update = this.Update1d.bind(this);
        this.Delete = this.Delete.bind(this);
        this.HandleClick = this.HandleClick.bind(this); 
    }
 
   
    HandleClick() {  
        Swal.fire({
            title: 'ยืนยันรายการหรือไม่ ?',
            text: "ต้องการยืนยันรายการหรือไม่",
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
    //               UPDATE
    // -------------------------------------
    Update1p() {
        var data = new FormData();
        data.append(
            "ID",
            document.getElementById("IDUpdate").value
        );
      const axios = require('axios');
      axios.post('http://localhost:138/update+.php',data)
          .then(function (response) {
              console.log(response);
              window.location.reload();
          })
          .catch(function (error) {
              console.log(error);
          });

      // console.log(123
  }
  Update1d() {
    var data = new FormData();
    data.append(
        "ID",
        document.getElementById("IDUpdate").value
    );
    const axios = require('axios');
    axios.post('http://localhost:138/update-.php',data)
        .then(function (response) {
            console.log(response);
            window.location.reload();
        })
        .catch(function (error) {
            console.log(error);
        });

    // console.log(123
}


// console.log(123

  // -------------------------------------
  //               DELETE
  // -------------------------------------
  Delete() {
    var data = new FormData();
    data.append(
        "ID",
        document.getElementById("IDDelete").value
    );
    const axios = require('axios');
    axios.post('http://localhost:138/deletecart.php', data)
        .then(function (response) {
            console.log(response);
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
        <div className="cart">
                <div class="container">
                    
                    
                    
                    <div class="row p-4 border bg-light">
                        
                        <div class="col">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">ลำดับ</th>
                                        <th scope="col">หมายเลขสินค้า</th>
                                        <th scope="col">รายการอาหาร</th>
                                        <th scope="col">Topping</th>
                                        <th scope="col">จำนวน</th>
                                        <th scope="col">ราคา</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        clients.map((i, j) =>
                                            <tr>
                                                <td>{j + 1}</td>
                                                <td>{i.ordersID}</td>
                                                <td>{i.name}</td>
                                                <td>{i.options}</td>
                                                <td>{i.quantity}</td>
                                                <td>{i.unitprice*i.quantity}</td>
                                                <div class="row">
                                                <div class="col">
                            
                                                    <button class="btn btn-info bg-success" onClick={this.Update1d}>-</button>
                                                    </div>
                                                    <div class="col">
                                                    <input type="text" placeholder="ID" id="IDUpdate"></input>
                                                    </div>
                                                  <div class="col">
                            
                                                        <button class="btn btn-info bg-success" onClick={this.Update1p}>+</button>
                                                  </div>
                                                </div>
                                                <div class="row">
                        
                                        
                                            </div>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row p-3 bg-secondary">
                        <p class= "bg-light center">ลบรายการอาหารที่เลือกออกจากรายอาหารที่กำลังจะสั่ง</p>
                        <div class="col">
                            <input type="text" placeholder="หมายเลขสินค้า" id="IDDelete"></input>
                            <button class="btn btn-info bg-danger" onClick={this.Delete}>Delete</button>
                        </div>
                    </div>
                    
<button class="btn btn-info btn" onClick={this.HandleClick}>ยืนยัน</button>  




                </div>
            </div>
        );
    }
}

export default cart;