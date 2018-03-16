import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './Main.css';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import CircularProgress from 'material-ui/CircularProgress';
import {Avatar} from './Avatar';
import {People} from './People';
//bootstrap & jquery
import 'bootstrap/dist/css/bootstrap.min.css';

import 'jquery/dist/jquery.js';

const styles = {
    example: {
        position: "fixed",
        top:0
    }
};

export class Main extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            completed: 0,
            load: false,
            menu: false,
            tweets: [],
            avatar: [],
        };
        this.ShowMenu = this.ShowMenu.bind(this);
    }

    componentDidMount() {
        this.timer = setTimeout(() => this.progress(35), 100);
        fetch('https://randomuser.me/api/?results=10')
        .then(results => results.json())
        .then(data => {let tweets = data.results.map((item)=>{
            return(
                <div key={item.results} className="tweetListWrapper">
                    <Card>
                    <CardHeader title={item.name.first} subtitle={item.login.username} avatar={item.picture.medium} />
                    <Divider />
                    <div className="tweetDetail">
                        <p>
                            View
                        </p>
                    </div>
                    </Card>
                 </div>
            );
        });
        this.setState({
            tweets: tweets,
        });
    })
      }
    componentWillMount(){
        clearTimeout(this.timer);
    }

    progress(completed){
        if(completed > 100){
            this.setState({completed: 100, load: true});
        }else{
            this.setState({completed});
            const diff = Math.random() * 10;
            this.timer = setTimeout(() => this.progress(completed + diff), 100);
        }
    }

    ShowMenu(){
        if(this.state.menu === true){
            this.setState({menu: false});
        }else{
            this.setState({menu: true});
        }
        
    }

    render(){
        return(
            <MuiThemeProvider>
            <AppBar onClick = {this.ShowMenu} 
                title="Main"
                style={{position:"fixed",top:"0"}}
                
            />
           {this.state.menu ? 
                 <div className="menu">
                    <Card>
                        <List>
                            <ListItem primaryText="Beranda"/>
                            <Divider />
                            <ListItem primaryText="Notifikasi"/>
                            <Divider />
                            <ListItem primaryText="Pesan"/>
                            <Divider />
                            <ListItem primaryText="Drafts" />
                        </List>
                    </Card>
                 </div> : null}

            {this.state.load ? 
                <div>
                  <Avatar />
                  <div className="followWrapper">
                        <People />
                </div>
                <div className="tweetWrapper">
                    <Card>
                    <div className="inputWrapper">
                        <TextField hintText="What's Happening ?" multiLine={true} rows={1} rowMax={2} fullWidth={true}/>
                        <CardActions style={{}}>
                            <RaisedButton type="submit" label="Tweet" primary={true} />
                        </CardActions>
                    </div>
                    </Card>
                 </div>
                 
                 {this.state.tweets}
                 
             </div> : 
                  <center> 
                     <CircularProgress size={100} thickness={5} className="circular-prog" value={this.state.completed} /> 
                  </center>
                }
            </MuiThemeProvider>
        );
    }
}

export default Main;