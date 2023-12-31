
{/* Utilzied the MUI docuemtation for Select: https://mui.com/material-ui/react-select/*/}
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {Link} from "react-router-dom";

export default class SmallPlaylist extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const user = JSON.parse(localStorage.getItem('user'));
        const playlist = JSON.parse(localStorage.getItem('playlist'));

        return (

        <div style={{height: '100vh',background: 'linear-gradient(to bottom, #3870E5, #5ae67f)' }}>
         {/* Utilzied stack overflow to determine how to use for loops to output our song list: https://stackoverflow.com/questions/57142732/how-do-i-build-a-sentence-with-link-in-react-using-a-loop*/}
        <Grid container spacing={1} style={{background:'linear-gradient(to bottom, #3870E5, #5ae67f)'}}>
            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">TravelSync Playlist</Typography>
                <Typography component="h6" variant="h6">{user.name}'s Curated Playlist</Typography>
                <Typography component="subtitle1" variant="subtitle1">The hottest {playlist.length} hits from {user.countryFrom} to {user.countryTo}</Typography>
                <br/>
                <Typography component="subtitle2" variant="subtitle2">Merge Sorted from {user.countryFrom}, Quick Sorted from {user.countryTo} by Artist</Typography>
                <Typography component="body1" variant="body1">
                {playlist && (
                    <>
                        <p></p>
                        <Grid container spacing={2}>
                            {playlist.map((song, index) => (
                                <Grid item key={index} xs={12}>
                                    <Paper style={{background: "#ffffff", width:'300px'}}>
                                        <Link to={{pathname: song.uri}} target="_blank">
                                            <Typography variant="body1">
                                                {index + 1}: {song.name} by {song.artist}
                                            </Typography>
                                        </Link>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                </>
                )}
                </Typography>
                <p></p>
                <Button color="primary" variant="contained" to="/" component={Link}>Back</Button>
            </Grid>
        </Grid>
        </div>
        );
        
    }
}