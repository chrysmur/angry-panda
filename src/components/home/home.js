import React, {Component} from 'react';
import MainNav from '../navbar/navbar' 

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
                <MainNav />
            </div>
        );
    }
}
 
export default Home;