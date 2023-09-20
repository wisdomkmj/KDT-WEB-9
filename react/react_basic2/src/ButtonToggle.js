import { Component } from "react";

class ButtonToggle extends Component {
    
    state = {
        visible: true
    }

    handleVisible = () => {
        this.setState(()=>({ visible: !this.state.visible}));
    };
    
    

    
    
    render() {
        

        return (
            <>
                <button onClick={this.handleVisible}>{this.state.visible ? "사라져라" : "보여라"}</button>
                <div><b>{this.state.visible && "안녕하세요"}</b></div>
            </>
        )
    }
}

export default ButtonToggle;