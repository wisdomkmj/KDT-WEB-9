import { Component } from "react";

class MessageClass extends Component {
    // constructor(props) {
    //     super(props);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    handleClick() {
        alert("message")
        // alert(this.props.message);
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick}>show message</button>
            </>
        )
    }

}

export default MessageClass;