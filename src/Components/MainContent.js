import React, {Component} from 'react';
import BlogPostItem from './BlogPostItem.js';
class MainContent extends Component{
    render(){
        {/*blog post components will go in here*/}
        let blogPostItems;
        if(this.props.maincontents){
            blogPostItems = this.props.maincontents.map(maincontents =>{
                return(<BlogPostItem key={maincontents.title} maincontents={maincontents}/>
                );
            });
        }
    
        return(
            <div className="MainContent" idName="main">
            {/*in here we will have each blogpost*/}
            {blogPostItems}
            </div>
        );
    }
    
}

export default MainContent;