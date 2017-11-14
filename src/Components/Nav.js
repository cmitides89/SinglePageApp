import React, {Component} from 'react';
class Nav extends Component{
    render(){
        return(
            <div className = "Nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Facebook</a></li>
                </ul>
            </div>
        );
    }
}
export default Nav;