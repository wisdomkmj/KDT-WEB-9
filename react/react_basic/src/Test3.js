import { Component } from "react";
// import PropTypes from "prop-types";

class TestComponent3 extends Component {
    render() {
        const food = "치킨";
        const style = {
            color: "red",
        }
        return (
            <>
                <h2><span style={style}>{food}</span> bb</h2>
                {/* <h2>2: {this.props.food} 야미</h2> */}
            </>
        );
    }
}

// Test3.defaultProps = {
//     food: "치킨",
// };

export default TestComponent3;