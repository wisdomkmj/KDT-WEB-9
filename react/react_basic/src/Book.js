import "./Book.css"
import book from "./logo512.png"

const Book = ({title, author, price, type}) => {
    return (
        <>
            <div className="box">
                <div className="best">이번주 베스트셀러</div>
                <img src={book} width="250px" height="250px" />
                <div className="a"><b>{title}</b></div>
                <div className="b">저자: {author}</div>
                <div className="b">판매가: {price}</div>
                <div className="b">구분: {type}</div>
            </div>
        </>
    );
}

export default Book;