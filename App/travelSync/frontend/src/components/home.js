import React, { Component } from "react";
import SmallPlaylist from "./smallPlaylist";
import LargePlaylist from "./largePlaylist";
import{ BrowserRouter as Router, Switch, Route, withRouter} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            countryTo: "United States",
            durationPlaylist: 1,
            genre:"Pop"
        }
        this.handleName= this.handleName.bind(this);
        this.handleCountryTo=this.handleCountryTo.bind(this);
        this.handleDuration=this.handleDuration.bind(this);
        this.handleGenre=this.handleGenre.bind(this);
        this.handleCreatePlaylist= this.handleCreatePlaylist.bind(this);
    }

    handleName(object){
        this.setState({
            name: object.target.value,
        });
    }

    handleGenre(object){
        this.setState({
            genre: object.target.value,
        });
    }

    handleCountryTo(object){
        this.setState({
            countryTo: object.target.value,
        });
    }

    handleDuration(object){
        this.setState({
            durationPlaylist: object.target.value,
        });
    }

    handleCreatePlaylist() {
        const { history } = this.props; // This should work without withRouter
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: this.state.name,
            genre: this.state.genre,
            countryTo: this.state.countryTo,
            durationPlaylist: this.state.durationPlaylist,
          }),
        };
      
        fetch('./api/createPlaylist', requestOptions)
          .then((response) => response.json())
          .then((data) => {
            console.log('API Response:', data);
            if (data && data.user && data.playlist) {
                // Store data in localStorage
                localStorage.setItem('user', JSON.stringify(data.user));
                localStorage.setItem('playlist', JSON.stringify(data.playlist));
      
                // Redirect to OtherPage
                history.push('/otherPage');
              } 
          })
      }

    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Grid container spacing={1}>
                            <Grid item xs={12} align="center">
                                <Typography component="h4" variant="h4">Welcome to TravelSync</Typography>
                            </Grid>
                            <Grid item xs={12} align="center">
                                <FormControl component="fieldset">
                                    <FormHelperText>
                                        <div align='center'>
                                        Maximize your traveling experience 
                                         </div>
                                    </FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} align="center">
                                <FormControl>
                                    <FormHelperText><div align="center">Enter your name below: </div></FormHelperText>
                                    <TextField required={true} type="text" onChange={this.handleName} defaultValue="" inputProps={{style:{textAlign:"center"}}}>
                                    </TextField>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} align="center">
                                <FormControl>
                                    <FormHelperText><div align="center">Enter the country you are traveling to below: </div></FormHelperText>
                                    <TextField required={true} type="text" onChange={this.handleCountryTo} defaultValue="" inputProps={{style:{textAlign:"center"}}}>
                                    </TextField>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} align="center">
                                <FormControl>
                                    <FormHelperText><div align="center">Enter your favorite genre below: </div></FormHelperText>
                                    <TextField required={true} type="text" onChange={this.handleGenre} defaultValue="" inputProps={{style:{textAlign:"center"}}}>
                                    </TextField>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} align="center">
                                <FormControl>
                                    <FormHelperText><div align="center">Enter the number of songs in the playlist: </div></FormHelperText>
                                    <TextField required={true} type="number" onChange={this.handleDuration}  defaultValue="" inputProps={{style:{textAlign:"center"}}}>
                                    </TextField>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} align="center">
                                <Button color="secondary" onClick={this.handleCreatePlaylist} variant="contained" component={Link} to="/smallPlaylist">Create A Playlist</Button>
                            </Grid>
                        </Grid>
                    </Route>
                    <Route path="/smallPlaylist" component={SmallPlaylist}/>
                    <Route path="/largePlaylist" component={LargePlaylist}/>
                </Switch>
            </Router>
            
          );
         
    }
}

