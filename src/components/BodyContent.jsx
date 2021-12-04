import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import HomePage from './HomePage'
import SideBarMenu from './SideBarMenu'

const useStyles=makeStyles((theme)=>({
    bodyContent:{
        display:'flex'
    }
}))

function BodyContent() {
    const classes=useStyles();
    return (
        <div>
            <Grid container>
                <Grid item md={4}><HomePage/></Grid>
                <Grid item md={8}><SideBarMenu/></Grid>
            </Grid>
        </div>
    )
}

export default BodyContent
