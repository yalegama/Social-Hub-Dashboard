import { makeStyles } from '@material-ui/core'
import React from 'react'
import CardSection from './CardSection';
import Chart from './Chart';

const useStyles=makeStyles((theme)=>({

}))

function HomePage() {
    const classes=useStyles();
    return (
        <div className={classes.homePageContainer}>
            <div>
                <CardSection/>
                <Chart/>
            </div>
        </div>
    )
}

export default HomePage
