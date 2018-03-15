import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './Main.css';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';

export class Main extends React.Component{
    render(){
        return(
            <MuiThemeProvider style={{boxShadow: 'none'}}>
            <AppBar
                title="insertTitleHere"
              />
                <div className="menu">
            <List>
                <ListItem primaryText="Inbox"/>
                <ListItem primaryText="Starred"/>
               <ListItem primaryText="Sent mail"/>
                <ListItem primaryText="Drafts" />
                  <ListItem primaryText="Inbox"/>
            </List>
            </div>
                <div className="tweetWrapper">
                <Card containerStyle={{background: 'rgb(23, 125, 209)', color: 'white'}}>
                  <CardHeader title="InsertNameHere" subtitle="InsertSubTitleHere" avatar="" />
                  <CardTitle subtitle="Post your tweet !"/>
                  <div className="inputWrapper">
                    <TextField hintText="What's Happening ?" multiLine={true} rows={1} rowsMax={10} />
                    <CardActions>
                  <RaisedButton type="submit" label="Tweet" primary={true} />
                   </CardActions>
                   </div>
                 </Card>
                 </div>
                 <Divider />
                 <div className="tweetWrapper">
                 <Card>
                  <CardHeader title="InsertNameHere" subtitle="InsertSubTitleHere" avatar="" />
                  <div className="tweetDetail">
                    <p>
                        INSERT TWEET HERE
                    </p>
                   </div>
                 </Card>
                 </div>
            </MuiThemeProvider>
        );
    }
}

export default Main;