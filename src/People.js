import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './Main.css';

export class People extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            people: [],
        };
    }
    componentDidMount() {
        fetch('https://randomuser.me/api/?results=5')
        .then(results => results.json())
        .then(data => {let people = data.results.map((item)=>{
            return(
                <div className="follow">
                    <Card>
                    <div className="peopleDetail">
                    <div className="headerWrapper">
                    <CardHeader style={{}} title={item.name.first} subtitle={item.login.username} avatar={item.picture.medium} />
                    </div>
                    <CardActions style={{ marginTop: '4%',}}>
                            <RaisedButton type="submit" label="Follow" primary={true} />
                    </CardActions>
                    </div>
                    </Card>
                 </div>
            );
        });
        this.setState({
            people: people,
        });
    })
      }
    render(){
        return(
            <div>
                {this.state.people}
            </div>
        );
    }
}

export default People;