import React from "react";


class Welcome extends React.Component{

    constructor(props){
        super(props);
    }
    
    
    render(){
        return(
            <div>
                <h1 className="text-center mt-5">{this.props.title}</h1>
            </div>
        )
    }
}


export default Welcome;