import React from "react";
import axios from "axios";
import './index.css'
import { MDBContainer, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';


class Axios extends React.Component{

    constructor(){
        super();
        this.state = {
            posts : []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/comments').then(response=>{
            // console.log(response.data[1])
            this.setState({posts : response.data})
        })
    }

    render(){

        return(
            <React.Fragment>
                <MDBContainer>
                    <h1 className="text-center mt-5 mb-5">Axios-Ajax</h1>
                    <MDBTable responsive hover bordered>
                        <MDBTableHead>
                            <tr className="text-center">
                                <th style={{ fontWeight: 'bold', fontSize: '18px' }}>ID</th>
                                <th style={{ fontWeight: 'bold', fontSize: '18px' }}>Name</th>
                                <th style={{ fontWeight: 'bold', fontSize: '18px' }}>E-Mail</th>
                                <th style={{ fontWeight: 'bold', fontSize: '18px' }}>Body</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {this.state.posts.map((itm,k)=>{

                                return(

                                    <tr>
                                        <td>{itm.id}</td>
                                        <td>{itm.name}</td>
                                        <td>{itm.email}</td>
                                        <td>{itm.body}</td>
                                    </tr>

                                )

                            })}
                        </MDBTableBody>
                    </MDBTable>
                </MDBContainer>
            </React.Fragment>
        )
    }
}

export default Axios;