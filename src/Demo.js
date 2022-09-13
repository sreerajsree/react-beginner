import React from 'react';
import { MDBInput, MDBContainer } from "mdbreact";


function alertt(){
    alert('This is the Function Alert!')
}

class Demo extends React.Component{
    

    constructor(props){
        super(props);
        this.state = {
            counter : 0,
            enable : false,
            textcontent : ""
        }
    }

    
    increment=()=>{
        this.setState( (prev,props)=>(
                { counter : prev.counter+1 }
        ));
    }

    decrement=()=>{
        this.setState((prev,props)=>(
                { counter : prev.counter-1 }
        ));
    }

    checkClicked=()=>{
        this.setState((prev,props)=>(
                { enable : !prev.enable }
        ));
    }

    textchangeEvent=(e)=>{
        this.setState({ textcontent : e.target.value })
    }

    render(){

        return(
            <React.Fragment>
                <MDBContainer>
                    <div className="text-center">
                        <button className="btn btn-secondary" style={{ borderRadius: "10em" }} onClick={ ()=>{ alert('This is the Inline Alert!') } }>Inline Alert</button>
                        <button className="btn btn-pink" style={{ borderRadius: "10em" }} onClick={ alertt }>Function Alert</button>
                    </div>
                    <div className="text-center mt-5">
                        <button className="btn btn-default mb-5" onClick={ this.increment }>increment</button>
                        <h1 className="mb-5">You have Clicked { this.state.counter } times</h1>
                        <button className="btn btn-danger mb-5" onClick={ this.decrement }>decrement</button>
                    </div>
                    <div className="custom-control custom-checkbox text-center">
                        <input type="checkbox" class="custom-control-input" id="defaultUnchecked" onClick={this.checkClicked} />
                        <label className="custom-control-label" for="defaultUnchecked">Enable</label>
                        <h2 className="mt-5">Checkbox is { this.state.enable?"Enabled":"Disabled" }</h2>
                    </div>
                    <div className="row flex-center mt-5">
                        <form className="col-md-4 col-md-offset-3">
                            <div className="row">
                                <div className="input-field col-md-12">
                                    <MDBInput label="Name" icon="user" onChange={this.textchangeEvent} />
                                    <h3 className="text-center">{ this.state.textcontent }</h3>
                                </div>
                            </div>
                        </form>
                    </div>
                </MDBContainer>
            </React.Fragment>
            
        )
}
}


export default Demo;