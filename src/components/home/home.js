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
                <div>
                    <h2>
                        Welcome to Angry Panda
                    </h2>
                </div>
            </div>
        );
    }
}
 
export default Home;