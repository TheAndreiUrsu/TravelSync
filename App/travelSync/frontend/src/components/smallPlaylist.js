import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import {Link} from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";


export default class SmallPlaylist extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const user = JSON.parse(localStorage.getItem('user'));
        const playlist = JSON.parse(localStorage.getItem('playlist'));
        if(!playlist){
            return <div>No infromation of user</div>;
        }

        return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">Small Playlist</Typography>
            </Grid>    
            <Grid item xs={12} align="center">
                <FormControl component="fieldset">
                    <FormHelperText>
                        <div align='center'>
                            Curated list of songs
                        </div>
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="primary" variant="contained" to="/" component={Link}>Back</Button>
            </Grid>
            <Grid item xs={12} align="center">
            <div>
                <h2>Personalized Playlist</h2>
                {playlist && (
                    <>
                        <p>Your genre is {playlist.genre}</p>
                        <p>The country you are traveling to is {playlist.country_to}</p>
                        <p>How many songs you want in the playlist is {playlist.duration_playlist}</p>
                    </>
                )}
            </div> 
            </Grid>
        </Grid>
        
        );
        
    }
}