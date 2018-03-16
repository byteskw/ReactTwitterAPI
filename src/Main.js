import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './Main.css';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import LinearProgress from 'material-ui/LinearProgress';

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
        this.timer = setTimeout(() => this.progress(35), 200);
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
            this.timer = setTimeout(() => this.progress(completed + diff), 200);
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
            <LinearProgress mode="determinate" value={this.state.completed} color="#006064"/>
            <AppBar onClick = {this.ShowMenu}
                title="Main"
            />
            
            {this.state.menu ? 
            <div className="menu">
                <Card>
            <List className="menu-view">
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
        : null}
            


            {this.state.load ? 
            <div>
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
                        </p>
                    </div>
                    </Card>
                 </div>
             </div> : null}
            </MuiThemeProvider>
        );
    }
}

export default Main;