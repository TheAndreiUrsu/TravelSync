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
            <div style={{ margin: 0, padding: 0, height: '100vh',background: 'linear-gradient(to bottom, #3870E5, #5ae67f)' }}>
        <Grid container spacing={1} style={{background:'linear-gradient(to bottom, #3870E5, #5ae67f)'}}>
            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">TravelSync Playlist</Typography>
                <Typography component="h6" variant="h6">{user.name}'s Curated Playlist</Typography>
                <Typography component="subtitle1" variant="subtitle1">The hottest {playlist.length} hits from {user.countryFrom} to {user.countryTo}</Typography>
                <Typography component="body1" variant="body1">
                {playlist && (
                    <>
                        <p></p>
                        <Grid container spacing={2}>
                            {playlist.map((song, index) => (
                                <Grid item key={index} xs={12}>
                                    <Paper style={{ padding: 10, background: "#ffffff", width:'300px'}}>
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