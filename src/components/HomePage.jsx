import { makeStyles } from '@material-ui/core'
import React from 'react'
import CardSection from './CardSection';

const useStyles=makeStyles((theme)=>({

}))

function HomePage() {
    const classes=useStyles();
    return (
        <div className={classes.homePageContainer}>
            <div>
                <CardSection/>
            </div>
        </div>
    )
}

export default HomePage
