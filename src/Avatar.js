import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './Avatar.css';

export class Avatar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            avatar: [],
        };
    }
    componentDidMount() {
        fetch('https://randomuser.me/api/?results=1')
        .then(results => results.json())
        .then(data => {let avatar = data.results.map((item)=>{
            return(
                <div key={item.results} className="avatarWrapper">
                    <Card>
                    <div className="avatar">
                    <CardHeader avatar={item.picture.medium} title={item.name.first} subtitle={item.login.username}/>
                    </div>
                    </Card>
                 </div>
            );
        });
        this.setState({
            avatar: avatar,
        });
    })
      }
    render(){
        return(
            <div>
                {this.state.avatar}
            </div>
        );
    }
}

export default Avatar;