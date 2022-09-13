import React from 'react';
import { MDBContainer, MDBInput, MDBCol  } from 'mdbreact';
import axios from 'axios';
import Swal from 'sweetalert2';



class Form extends React.Component{


    constructor(){
        super();
        this.state = {
            username : '',
            password : '',
            displayName : ''

        }
    }

    inputSet=(e)=>{
        //console.log(e.target.name)
        this.setState({ [e.target.name] : e.target.value })
    }

    register=(e)=>{
        e.preventDefault();
        var data = {
            username : this.state.username,
            password : this.state.password,
            displayName : this.state.displayName
        };
        axios.post('http://localhost/react/api.php',data).then(response=>{
            if(response.data=="success"){
                Swal.fire({ position: 'top-end',
                            icon: 'success',
                            title: 'Successfully Saved',
                            showConfirmButton: false,
                            timer: 2000 })
            }
            else{
                Swal.fire({ position: 'top-end',
                            icon: 'error',
                            title: 'Failed to Save',
                            showConfirmButton: false,
                            timer: 2000 })
            }
        })
    }


    render(){

        return(

           
                <MDBContainer>
                    <div className="row flex-center mt-5">
                        <form className="col-md-4 col-md-offset-3">
                        <h2 className="text-center mb-5 text-uppercase" style={{ fontWeight: "bold" }}>Registration Form</h2>
                            <div className="row">
                                <div className="input-field col-md-12">
                                    <MDBInput type="text" label="Username" onChange={this.inputSet} name="username" icon="user"  />
                                    <MDBInput type="password" label="Password" onChange={this.inputSet} name="password" icon="lock"  />
                                    <MDBInput type="text" label="Display Name" onChange={this.inputSet} name="displayName" icon="pencil-alt"  />
                                    <div className="text-center py-4 mt-3">
                                    <button className="btn btn-default" onClick={this.register} >Register</button>
                                    </div>
                                    {/* <h4>{this.state.username}</h4>
                                    <h4>{this.state.password}</h4>
                                    <h4>{this.state.displayName}</h4> */}
                                </div>
                            </div>
                        </form>
                        <MDBCol>
                        <div className="view zoom">
                            <img src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9naW58ZW58MHx8MHx8&w=1000&q=80" 
                            className="img-fluid " alt=""/>
                                {/* <div className="mask flex-center">
                                    <p className="white-text">Zoom effect</p>
                                </div> */}
                        </div>
                        </MDBCol>
                    </div>
                </MDBContainer>
            
        )
    }
}

export default Form;