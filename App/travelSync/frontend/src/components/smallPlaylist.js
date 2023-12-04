import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import {Link} from "react-router-dom";


export default class SmallPlaylist extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const user = JSON.parse(localStorage.getItem('user'));
        const playlist = JSON.parse(localStorage.getItem('playlist'));
<<<<<<< HEAD
        if(!playlist){
            return <div>Nothing to see here.</div>;
        }
=======
>>>>>>> main

        return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
<<<<<<< HEAD
                <Typography component="h4" variant="h4">Personalized Playlist</Typography>
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
=======
                <Typography component="h4" variant="h4">Small Playlist</Typography>
                <Typography component="h6" variant="h6">Curated Playlist</Typography>
                <Typography component="subtitle1" variant="subtitle1">{user.name}'s Personalized Playlist</Typography>
                <Typography component="body1" variant="body1">
                    {playlist && (
>>>>>>> main
                    <>
                        <p>Playlist size: {playlist.length}</p>
                        <ul>
                            {playlist.map((song, index) => (
                                <p>{index+1}: {song.name} by {song.artist}</p>
                            ))}
                        </ul>
                    </>
                )}
                </Typography>
                <Button color="primary" variant="contained" to="/" component={Link}>Back</Button>
            </Grid>    
        </Grid>
        
        );
        
    }
}
