import React from "react";
import {MDBInputGroup, MDBListGroup, MDBListGroupItem, MDBContainer} from "mdbreact";


class Todo extends React.Component{

    
    constructor(props){
        super(props);
        this.state = {
            items : [],
            textContent : ""
        };
    }

    textChange=(e)=>{
        this.setState({textContent : e.target.value});
    }
    
    addItem=(e)=>{
        e.preventDefault();
        let currentText = this.state.textContent;
        let currentItems = this.state.items;
        currentItems.push(currentText);
        this.setState({items:currentItems});
    }
    
    removeItem=(i)=>{
        if(!window.confirm("Are you sure want to delete this.?")){
            return;
        }
        let currentItems = this.state.items;
        currentItems.splice(i,1);
        this.setState({items:currentItems});
    }


    render(){


        return(

            <React.Fragment>
                <MDBContainer>
                <h2 className="text-center mt-5">React Todo List</h2>
                <div className="row flex-center mt-5">
                    <form className="col-md-6 col-md-offset-3">
                        <div className="row">
                            <div className="input-field col-md-12">
                            <MDBInputGroup
                                material
                                containerClassName="mb-3 mt-0"
                                hint="Item Name"
                                append={<button className="m-0 px-4 py-2 z-depth-0 btn btn-lg btn-info" 
                                onClick={this.addItem}>Add</button>}
                                onChange={this.textChange}
                            />
                                <h3 className="text-center"></h3>
                            </div>
                        </div>
                    </form>
                </div>
                    <MDBListGroup className="mt-5">

                        { this.state.items.map((itm,k)=>{

                            return(

                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                                    {itm}
                                    <button 
                                    key={k} 
                                    className="btn btn-danger" 
                                    onClick={ ()=>{ this.removeItem(k) } }>Delete
                                    </button>
                                </MDBListGroupItem>
                            )

                        }) }

                    </MDBListGroup>
                </MDBContainer>
            </React.Fragment>
        )
    }
}

export default Todo;