import React, { Component } from 'react';
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            clients: [],
        };
        this.Insert = this.Insert.bind(this);
        this.Update = this.Update.bind(this);
        this.Delete = this.Delete.bind(this);
    }
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
    Update() {
        var data = new FormData();
        data.append(
            "NAME",
            document.getElementById("NameUpdate").value
        );
        data.append(
            "ID",
            document.getElementById("IDUpdate").value
        );
        const axios = require('axios');
        axios.post('http://localhost:138/update.php', data)
            .then(function (response) {
                console.log(response);
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });

        // console.log(123)
    }

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
        axios.post('http://localhost:138/delete.php', data)
            .then(function (response) {
                console.log(response);
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });

        // console.log(123)
    }

    // -------------------------------------
    //               SELECT
    // -------------------------------------
    componentDidMount(Code) {
        const axios = require("axios");
        axios
            .get("http://localhost:138/select.php")
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
            <div className="Test">
                <div class="container">
                    <div class="row">
                        <p>Insert</p>
                        <div class="col">
                            <input type="text" placeholder="Value" id="NameInsert"></input>
                            <button class="btn btn-info" onClick={this.Insert}>Insert</button>
                        </div>
                    </div>
                    <div class="row">
                        <p>Update</p>
                        <div class="col">
                            <input type="text" placeholder="ID" id="IDUpdate"></input>
                            <input type="text" placeholder="Value" id="NameUpdate"></input>
                            <button class="btn btn-info" onClick={this.Update}>Update</button>
                        </div>
                    </div>
                    <div class="row">
                        <p>Delete</p>
                        <div class="col">
                            <input type="text" placeholder="ID" id="IDDelete"></input>
                            <button class="btn btn-info" onClick={this.Delete}>Delete</button>
                        </div>
                    </div>
                    <div class="row">
                        <p>Select</p>
                        <div class="col">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">**</th>
                                        <th scope="col">ชื่อ</th>
                                        <th scope="col">อายุ</th>
                                        <th scope="col">เวลา</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        clients.map((i, j) =>
                                            <tr>
                                                <td>{j + 1}</td>
                                                <td>{i.ID}</td>
                                                <td>{i.NAME}</td>
                                                <td>{i.TIME}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default Test;