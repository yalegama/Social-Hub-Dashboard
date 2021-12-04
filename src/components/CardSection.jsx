import { Card, CardContent, Typography } from '@material-ui/core'
import { ArrowDownwardOutlined, ArrowDropDown, ArrowUpward } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles=makeStyles((theme)=>({
    card:{

        WebkitBoxShadow: "0px 0px 20px 2px #000000"
    },
    cardSection:{
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        marginTop:60,

    },
    cardContent:{
        height:130,
        width:250
    },
cardTitle:{
    fontWeight:'bold',
},
secondLine:{
    display:'flex',
    marginTop:20
},
title2:{
    fontWeight:'bold',
    marginLeft:30
},
title3:{
    marginLeft:100,
    
},
negative:{
    color:'red',
},
positive:{
    color:'green'
},
subtitle:{
    marginTop:20
}
}))

function CardSection() {
    const classes=useStyles();
    return (
        <div className={classes.cardSection}>
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Typography
                    className={classes.cardTitle}
                    variant="h5"
                    >
                        Revenue
                    </Typography>
                    <div className={classes.secondLine}>
                        <Typography
                        variant="h6"
                        className={classes.title2}
                        >
                            $2,454
                        </Typography>
                        <Typography
                        className={classes.title3}
                        >
                            -11.4
                        </Typography>
                        <ArrowDownwardOutlined className={classes.negative}/>
                    </div>
                    <Typography className={classes.subtitle}>
                        Compared To Last Month
                    </Typography>
                </CardContent>
            </Card><Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Typography
                    className={classes.cardTitle}
                    variant="h5"
                    >
                        Sales
                    </Typography>
                    <div className={classes.secondLine}>
                        <Typography
                        variant="h6"
                        className={classes.title2}
                        >
                            $4,454
                        </Typography>
                        <Typography
                        className={classes.title3}
                        >
                            -11.4
                        </Typography>
                        <ArrowDownwardOutlined className={classes.negative}/>
                    </div>
                    <Typography className={classes.subtitle}>
                        Compared To Last Month
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Typography
                    className={classes.cardTitle}
                    variant="h5"
                    >
                        Cost
                    </Typography>
                    <div className={classes.secondLine}>
                        <Typography
                        variant="h6"
                        className={classes.title2}
                        >
                            $2,454
                        </Typography>
                        <Typography
                        className={classes.title3}
                        >
                            -11.4
                        </Typography>
                        <ArrowUpward className={classes.positive}/>
                    </div>
                    <Typography className={classes.subtitle}>
                        Compared To Last Month
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default CardSection
