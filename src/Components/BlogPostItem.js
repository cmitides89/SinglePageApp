import React,{Component} from 'react';

class BlogPostItem extends Component{
    render(){
        return(
            <div className ="BlogPost">
                <h1 className="title">{this.props.maincontents.title}</h1>
                <p>{this.props.maincontents.date}</p>
                <p>{this.props.maincontents.body}</p>
            </div>
        );
    }
}

export default BlogPostItem;