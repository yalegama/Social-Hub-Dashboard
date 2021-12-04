import { AppBar, Badge, Toolbar } from '@material-ui/core'
import { Notifications } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles=makeStyles((theme)=>({
appBar:{
    backgroundColor:'white'
},
logoText:{
    color:'darkblue',
    fontWeight:'bold'
},
logoTextLink:{
    textDecoration:'none'
},
menuIcons:{
    color:'black',
    cursor:'pointer'
}
}))

function Header() {
    const classes=useStyles();
    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <div className={classes.logoText}>
                    <a className={classes.logoTextLink} href="">
                    Social Hub <br/>Dashboard
                    </a>
                </div>
                <div className={classes.menuIcons}>
                    <div className={classes.menuIcons}>
                        <Badge badgeContent={5}
                        color="secondary"
                        >
                        <Notifications/>
                        </Badge>
                    </div>
                </div>

            </Toolbar>
        </AppBar>
    )
}

export default Header
