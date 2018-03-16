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
            menu: false
        };
        this.ShowMenu = this.ShowMenu.bind(this);
    }

    componentDidMount() {
        this.timer = setTimeout(() => this.progress(5), 100);
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
                
            />
           

            {this.state.load ? 
            <div>
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
                 </div>
              <div className="follow">
                    <Card style={{paddingBottom: '70px'}}>
                    <CardHeader style={{float:'left'}} title="Untuk Diikuti" subtitle="Lihat Semua" avatar="" />
                    <CardActions style={{float:'right', marginTop:'12px'}}>
                            <RaisedButton type="submit" label="Follow" primary={true} />
                    </CardActions>
                    </Card>
                 </div>
            
                <div className="tweetWrapper">
                    <Card>
                    <CardHeader title="InsertNameHere" subtitle="InsertSubTitleHere" avatar="" />
                    <div className="inputWrapper">
                        <TextField hintText="What's Happening ?" multiLine={true} rows={1} rowsMax={10} fullWidth={true}/>
                        <CardActions style={{float:'right'}}>
                            <RaisedButton type="submit" label="Tweet" primary={true} />
                        </CardActions>
                    </div>
                    </Card>
                 </div>
                 <div className="tweetWrapper">
                    <Card>
                    <CardHeader title="InsertNameHere" subtitle="InsertSubTitleHere" avatar="" />
                    <div className="tweetDetail">
                        <p>
                            View
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </div>
                    </Card>
                    
                    <Card>
                    <CardHeader title="InsertNameHere" subtitle="InsertSubTitleHere" avatar="" />
                    <div className="tweetDetail">
                        <p>
                            View
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </div>
                    </Card>
                    <Card>
                    <CardHeader title="InsertNameHere" subtitle="InsertSubTitleHere" avatar="" />
                    <div className="tweetDetail">
                        <p>
                            View
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </div>
                    </Card>
                 </div>
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