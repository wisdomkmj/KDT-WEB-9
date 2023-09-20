import { Component } from "react";

class ChangeColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textColor: "black", // 초기 텍스트 색상
            text: "검정색 글씨",
        };
    }

    // 빨간색으로 색상 변경 핸들러
    handleRedClick = () => {
        this.setState({ textColor: "red", text: "빨간색 글씨" });
    }

    // 파란색으로 색상 변경 핸들러
    handleBlueClick = () => {
        this.setState({ textColor: "blue", text: "파란색 글씨" });
    }

    render() {
        const { textColor, text } = this.state;

        return (
            <>
                <div>
                    <div style={{ color: textColor }}>{text}</div>
                    <button onClick={this.handleRedClick}>빨간색</button>
                    <button onClick={this.handleBlueClick}>파란색</button>
                </div>
            </>
        );
    }
}

export default ChangeColor;
