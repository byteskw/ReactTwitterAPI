import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

export class Main extends React.Component{
    render(){
        return(
            <MuiThemeProvider>
                <Card>
                  <CardHeader title="InsertNameHere" subtitle="InsertSubTitleHere" avatar="" />
                  <CardTitle title="Post your tweet !"/>
                    <TextField hintText="What's Happening ?" multiLine={true} rows={1} rowsMax={10} />
                    <CardActions>
                  <RaisedButton type="submit" label="Tweet" primary={true} />
                   </CardActions>
                 </Card>
            </MuiThemeProvider>
        );
    }
}
const styles={
    inputWrapper: {
        background: 'red',
    },
}

export default Main;