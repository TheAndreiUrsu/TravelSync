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

        return (
        <Grid container spacing={1} style={{background:'linear-gradient(to bottom, #3870E5, #5ae67f)'}}>
            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">Super Small Playlist</Typography>
                <Typography component="h6" variant="h6">Curated Playlist</Typography>
                <Typography component="subtitle1" variant="subtitle1">{user.name}'s Personalized Playlist</Typography>
                <Typography component="body1" variant="body1">
                {playlist && (
                    <>
                        <p>Playlist size: {playlist.length}</p>
                        <ul>
                            {playlist.map((song, index) => (
                                <li key={index} style={{ background: "#ffffff" }}>
                                    <Link to={song.uri}>
                                        <p>{index + 1}: {song.name} by {song.artist}</p>
                                    </Link>
                                </li>
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