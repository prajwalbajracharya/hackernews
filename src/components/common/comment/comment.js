import React from 'react';
import Reply from './reply';
import ReactHTMLParser from 'react-html-parser';

class Comment extends React.Component {
    state = {
    }

    componentDidMount() {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json?print=pretty`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({...data})
            });
    }

    render() {
        return(
           <>
               <div className="comment__text">
                   {ReactHTMLParser(this.state.text)}
                   {this.state.kids && this.state.kids.map(id => <Reply id={id}/>)}
                </div>
           </>
           );
    }
}

export default Comment;