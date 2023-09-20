import PropTypes from "prop-types";

//함수형 컴포넌트
//function 컴포넌트명 or cont 컴포넌트명 = () => {}
function FunctionComponent(props) {
    //function FunctionComponent({ myClass }) {객체 구조분해할당
    const myClass = "kdt9..22"

    return (
        <>
            <h1>반갑습니다. {myClass}에 오신것을 환영합니다.</h1>
            <p>여기는 함수형 컴포넌트</p>
            <h2>props {props.myClass}</h2>
            {/* <h2>{props.children}</h2> */}
        </>
    )
}

FunctionComponent.defaultProps = {
    myClass: "kdt123",
};

FunctionComponent.propTypes = {
    myClass: PropTypes.string,
};

export default FunctionComponent;