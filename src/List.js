import React from "react";
import {MDBContainer, MDBTable, MDBTableBody, MDBTableHead} from "mdbreact"



class List extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            items : ["apple", "orange", "watermelon", "pineapple", "banana"],
            users : [

                {id: "1", name:'sreeraj', age:'24'},
                {id: "2", name:'jishnu', age:'25'},
                {id: "3", name:'sreeram', age:'23'}
            ]
        };
    }

    render(){

        var item = this.state.items.map(function(itm,k){
            return <a className="list-group-item list-group-item-action"  key={k}>{ itm }</a>
        })

        var user = this.state.users.map(function(itm,k){
            return  <tr>
                        <td>{itm.id}</td>
                        <td>{itm.name}</td>
                        <td>{itm.age}</td>
                    </tr>
        })

        return(

            <React.Fragment>
                <MDBContainer>
                    <h1 className="text-center mt-3 mb-4"><u>Listing</u></h1>
                    <div className="list-group text-center">
                        
                        { item }
                        
                    </div>
                    <div>
                    <h1 className="text-center mt-3 mb-4"><u>Table Listing</u></h1>
                        <MDBTable>
                            <MDBTableHead color="primary-color" textWhite>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {user}
                            </MDBTableBody>
                        </MDBTable>
                    </div>   
                </MDBContainer>
            </React.Fragment>
        )
    }

    
}

export default List;
