import React, { useState, useEffect } from 'react';
import { Grid, FormLabel, Button } from '@material-ui/core';
import UserService from '../services/userService';

const Sidebar = () => {
    const [user, setUser] = useState()
    useEffect(() => {
        UserService.getMe().then(data => {
            console.log(data);

            setUser(data)
        })
    }, [])
    return <Grid container style={{ height: "100%", width: "100%" }}>
        <Grid item style={{ width: "100%" }}>
            <div style={{ borderBottom: "1px solid #1291CA", padding: "5px", backgroundColor: "#1291CA", borderBottomLeftRadius: "5px" }}>
                {user && <FormLabel md="12" lg="12" style={{ color: "white" }}>
                    {
                        "Welcome, " +
                        user.name + " " +
                        user.surname
                    }
                </FormLabel>
                }
            </div>
        </Grid>
        <Grid item style={{ width: "100%" }}>

        </Grid>
        <Grid item style={{ width: "100%" }}>
            <Button>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    name="submitButton"
                    style={{ backgroundColor: "#1291ca" }}
                >
                    Submit exam
          </Button>
            </Button>
        </Grid>
    </Grid >
}

export default Sidebar;