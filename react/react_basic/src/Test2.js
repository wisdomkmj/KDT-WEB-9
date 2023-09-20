import { Component } from "react";
import logo from "./logo512.png";

class TestComponent2 extends Component {

    render() {

        const style = {
            color: "orange",
            fontSize: "40px",
            marginTop: "20px",
        }
        return(
            <>
                <div style={style}>
                    <h2>안녕하세요</h2>
                    <img src={logo} width="200px" height="200px" />
                </div>
            </>
        );
    }
}

export default TestComponent2;