import { Component } from "react";

class Board extends Component {
    constructor(props){
        super(props);

        //초기화
        this.state = {
            posts: [],
            author: "",
            title: "",
        };

        this.onChange = this.onChange.bind(this);
        this.addPosts = this.addPosts.bind(this);
    }

    onChange = (event) => {
        this.setState(()=>({author: event.target.value}));
       
    }  
    
    addPosts() {
        console.log(this.state.author);
        const newPosts = {
            newAuthor: this.state.author,
            newTitle: this.state.title,
        }
        this.setState(( ) => ({ comments: [...this.state.posts, newPosts], author:"", title:"" }))
    }

    render() {
        return (
            <>
                <form>
                    <label htmlForor="author">작성자 : </label>
                    <input id="author" type="text" value={this.setState.author} onChange={(e)=>this.onChange(e)} />
                    <label htmlForor="title">제목 : </label>
                    <input id="title" type="text" value={this.setState.title} onChange={(e)=>this.setState({title: e.target.value})} />
                    <button type="button" onclick={this.addPosts}>작성</button>
                </form>
                {/* <div>
                    <select>
                        <option value={""}>작성자</option>
                        <option value={""}>제목</option>
                    </select>
                    <input />
                    <button type="button">검색</button>
                </div> */}
                <table border={1} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map((value, index) =>{
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{value.newTitle}</td>
                                    <td>{value.newAuthor}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}

export default Board;