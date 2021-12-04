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
                
                <Grid item md={2} xs={2}><SideBarMenu/></Grid>
                <Grid item md={10} xs={10}><HomePage/></Grid>
            </Grid>
        </div>
    )
}

export default BodyContent
