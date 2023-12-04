import React, { Component } from "react";
import SmallPlaylist from "./smallPlaylist";
import{ BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import {Link} from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem"; 
import { InputLabel } from "@material-ui/core";
import FlightIcon from '@material-ui/icons/Flight';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            countryTo: "",
            countryFrom:"",
            durationPlaylist: null,
            genre:""
        }
        this.handleName= this.handleName.bind(this);
        this.handleCountryTo=this.handleCountryTo.bind(this);
        this.handleCountryFrom=this.handleCountryFrom.bind(this);
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

    handleCountryFrom(object){
        this.setState({
            countryFrom: object.target.value,
        });
    }

    handleDuration(object){
        this.setState({
            durationPlaylist: object.target.value,
        });
    }

    handleCreatePlaylist() {
        const { history } = this.props;

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: this.state.name,
            genre: this.state.genre,
            countryTo: this.state.countryTo,
            countryFrom: this.state.countryFrom,
            durationPlaylist: this.state.durationPlaylist,
          }),
        };

      
        fetch('./api/createPlaylist', requestOptions)
          .then((response) => response.json())
          .then((data) => {
            console.log('API Response:', data);
            if (data && data.user && data.playlist) {
                localStorage.setItem('user', JSON.stringify(data.user));
                localStorage.setItem('playlist', JSON.stringify(data.playlist));
                history.push("/smallPlaylist");
              } 
          }
          )
      }

    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Grid container spacing={1} style={{background:'linear-gradient(to bottom, #3870E5, #5ae67f)'}}>
                            <Grid item xs={12} align="center">
                                <Typography component="h4" variant="h4">Welcome to TravelSync</Typography>
                            </Grid>
                            <Grid item xs={12} align="center">
                                <Typography component="h5" variant="h5">Maximize your traveling experience</Typography>
                            </Grid>
                            <Grid item xs={12} align="center">
                                <div>
                                    <Typography component="h6" variant="h6">Enter your name:</Typography>
                                    <Grid spacing={2} direction="row">
                                        <TextField value={this.state.name} required={true} variant="outlined" placeholder="Name" type="text" onChange={this.handleName} defaultValue="" inputProps={{style:{textAlign:"center"}}} style={{background:'#fafffb'}}></TextField>
                                    </Grid>
                                </div>
                            </Grid>
                            <Grid item xs={12} align="center">
                                <div>
                                    <Typography component="h6" variant="h6">Enter the country you are traveling from and to below:</Typography>
                                    <Grid spacing={50} direction="row">
                                        <FormControl>               
                                            <InputLabel>Country From</InputLabel>   
                                            <Select value={this.state.countryFrom} onChange={this.handleCountryFrom} label="Country From" variant="outlined" style={{ minWidth: '200px', height: '50px', background:'#fafffb' }}>
                                                <MenuItem value="Argentina">Argentina</MenuItem>
                                                <MenuItem value="Australia">Australia</MenuItem>
                                                <MenuItem value="Austria">Austria</MenuItem>
                                                <MenuItem value="Belgium">Belgium</MenuItem>
                                                <MenuItem value="Brazil">Brazil</MenuItem>
                                                <MenuItem value="Canada">Canada</MenuItem>
                                                <MenuItem value="Chile">Chile</MenuItem>
                                                <MenuItem value="Colombia">Colombia</MenuItem>
                                                <MenuItem value="CostaRica">Costa Rica</MenuItem>
                                                <MenuItem value="Denmark">Denmark</MenuItem>
                                                <MenuItem value="Ecuador">Ecuador</MenuItem>
                                                <MenuItem value="Finland">Finland</MenuItem>
                                                <MenuItem value="France">France</MenuItem>
                                                <MenuItem value="Germany">Germany</MenuItem>
                                                <MenuItem value="Global">Global</MenuItem>
                                                <MenuItem value="Indonesia">Indonesia</MenuItem>
                                                <MenuItem value="Ireland">Ireland</MenuItem>
                                                <MenuItem value="Italy">Italy</MenuItem>
                                                <MenuItem value="Malaysia">Malaysia</MenuItem>
                                                <MenuItem value="Mexico">Mexico</MenuItem>
                                                <MenuItem value="Netherlands">Netherlands</MenuItem>
                                                <MenuItem value="NewZealand">New Zealand</MenuItem>
                                                <MenuItem value="Norway">Norway</MenuItem>
                                                <MenuItem value="Peru">Peru</MenuItem>
                                                <MenuItem value="Philippines">Philippines</MenuItem>
                                                <MenuItem value="Poland">Poland</MenuItem>
                                                <MenuItem value="Portugal">Portugal</MenuItem>
                                                <MenuItem value="Singapore">Singapore</MenuItem>
                                                <MenuItem value="Spain">Spain</MenuItem>
                                                <MenuItem value="Sweden">Sweden</MenuItem>
                                                <MenuItem value="Switzerland">Switzerland</MenuItem>
                                                <MenuItem value="Taiwan">Taiwan</MenuItem>
                                                <MenuItem value="Turkey">Turkey</MenuItem>
                                                <MenuItem value="UK">UK</MenuItem>
                                                <MenuItem value="USA">USA</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FlightIcon fontSize="large" style={{transform:'rotate(90deg)',marginTop: '5px'}}></FlightIcon>
                                        <FormControl>
                                            <InputLabel>Country To</InputLabel>                     
                                            <Select value={this.state.countryTo} onChange={this.handleCountryTo} label="Country To" variant="outlined" style={{ minWidth: '200px', height: '50px', background:'#fafffb' }}>
                                                <MenuItem value="Argentina">Argentina</MenuItem>
                                                <MenuItem value="Australia">Australia</MenuItem>
                                                <MenuItem value="Austria">Austria</MenuItem>
                                                <MenuItem value="Belgium">Belgium</MenuItem>
                                                <MenuItem value="Brazil">Brazil</MenuItem>
                                                <MenuItem value="Canada">Canada</MenuItem>
                                                <MenuItem value="Chile">Chile</MenuItem>
                                                <MenuItem value="Colombia">Colombia</MenuItem>
                                                <MenuItem value="CostaRica">Costa Rica</MenuItem>
                                                <MenuItem value="Denmark">Denmark</MenuItem>
                                                <MenuItem value="Ecuador">Ecuador</MenuItem>
                                                <MenuItem value="Finland">Finland</MenuItem>
                                                <MenuItem value="France">France</MenuItem>
                                                <MenuItem value="Germany">Germany</MenuItem>
                                                <MenuItem value="Global">Global</MenuItem>
                                                <MenuItem value="Indonesia">Indonesia</MenuItem>
                                                <MenuItem value="Ireland">Ireland</MenuItem>
                                                <MenuItem value="Italy">Italy</MenuItem>
                                                <MenuItem value="Malaysia">Malaysia</MenuItem>
                                                <MenuItem value="Mexico">Mexico</MenuItem>
                                                <MenuItem value="Netherlands">Netherlands</MenuItem>
                                                <MenuItem value="NewZealand">New Zealand</MenuItem>
                                                <MenuItem value="Norway">Norway</MenuItem>
                                                <MenuItem value="Peru">Peru</MenuItem>
                                                <MenuItem value="Philippines">Philippines</MenuItem>
                                                <MenuItem value="Poland">Poland</MenuItem>
                                                <MenuItem value="Portugal">Portugal</MenuItem>
                                                <MenuItem value="Singapore">Singapore</MenuItem>
                                                <MenuItem value="Spain">Spain</MenuItem>
                                                <MenuItem value="Sweden">Sweden</MenuItem>
                                                <MenuItem value="Switzerland">Switzerland</MenuItem>
                                                <MenuItem value="Taiwan">Taiwan</MenuItem>
                                                <MenuItem value="Turkey">Turkey</MenuItem>
                                                <MenuItem value="UK">UK</MenuItem>
                                                <MenuItem value="USA">USA</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </div>
                            </Grid>
                            <Grid item xs={12} align="center">
                            <div>
                                    <Typography component="h6" variant="h6">Enter your favorite genre:</Typography>
                                    <Grid spacing={2} direction="row">
                                    <FormControl>
                                            <Select value={this.state.genre} onChange={this.handleGenre} label="Genre" variant="outlined" style={{ minWidth: '200px', height: '50px', background:'#fafffb'  }}>
                                                <MenuItem value="Indie">Indie</MenuItem>
                                                <MenuItem value="Rock">Rock</MenuItem>
                                                <MenuItem value="Country">Country</MenuItem>
                                                <MenuItem value="Trap">Trap</MenuItem>
                                                <MenuItem value="R&b">R&b/Soul</MenuItem>
                                                <MenuItem value="Reggaeton">Reggaeton</MenuItem>
                                                <MenuItem value="Metal">Metal</MenuItem>
                                                <MenuItem value="House">House</MenuItem>
                                                <MenuItem value="Opm">Opm</MenuItem>
                                                <MenuItem value="Rap">Rap</MenuItem>
                                                <MenuItem value="HipHop">Hip Hop</MenuItem>
                                                <MenuItem value="Dance">Dance/Electronic</MenuItem>
                                                <MenuItem value="Bolero">Bolero</MenuItem>
                                                <MenuItem value="Latin">Latin</MenuItem>
                                                <MenuItem value="Reggae">Reggae</MenuItem>
                                                <MenuItem value="Funk">Funk</MenuItem>
                                                <MenuItem value="Pop">Pop</MenuItem>
                                                <MenuItem value="Jazz">Jazz</MenuItem>
                                                <MenuItem value="KPop">K-pop</MenuItem>
                                                <MenuItem value="BoyBand">Boy Band</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </div>
                            </Grid>
                            <Grid item xs={12} align="center">
                                <div>
                                <Typography component="h6" variant="h6">Enter the number of songs in the playlist:</Typography>
                                    <TextField value={this.state.durationPlaylist} required={true} type="number" variant="outlined" placeholder="Number of Songs" onChange={this.handleDuration}  defaultValue="" inputProps={{style:{textAlign:"center"}}} style={{background:'#fafffb'}}></TextField> 
                                </div>
                            </Grid>
                            <Grid item xs={12} align="center">
                                <Button color="secondary" onClick={this.handleCreatePlaylist} variant="contained" component={Link} to={"/smallPlaylist"} disabled={!this.state.name || !this.state.countryTo || !this.state.genre || !this.state.durationPlaylist || !this.state.countryFrom}>Create A Playlist</Button>
                            </Grid>
                        </Grid>
                    </Route>
                    <Route exact path="/smallPlaylist" component={SmallPlaylist}/>
                </Switch>
            </Router>
            
          );
         
    }
}