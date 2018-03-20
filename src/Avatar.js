import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './Main.css';

export class Avatar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            avatar: [],
        };
    }
    render(){
        return(
            <div>
            <div className="avatarWrapper">
                    <Card>
                    <div className="avatar">
                    <CardHeader avatar="http://fanaru.com/random/image/thumb/160391-random-seriously-face-avatar.jpg" title="John" subtitle="john"/>
                    </div>
                    </Card>
                 </div>
            </div>
        );
    }
}

export default Avatar;