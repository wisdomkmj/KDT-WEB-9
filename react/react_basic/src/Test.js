import { Component } from "react";

class TestComponent extends Component {

    render() {
        
        const name = "김명준";
        const my_style = {
            backgroundColor: "blue",
            color: "orange",
            fontSize: "40px",
            padding: "12px",
        }
        return(
            <>
                <div style={my_style}>{name}</div>
            </>
        );
    }
}

export default TestComponent;