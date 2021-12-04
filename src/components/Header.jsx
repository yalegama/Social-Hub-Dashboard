import { AppBar, Avatar, Badge, InputBase, Toolbar, Typography } from '@material-ui/core'
import { Email, Notifications, Search, SettingsInputComponentRounded } from '@material-ui/icons';

import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles=makeStyles((theme)=>({
appBar:{
    backgroundColor:'white',
    position:'static'
},
tabBar:{
    justifyContent:'space-between'
},
logo:{
    fontWeight:'bold',
    color:'blue'
},
logoText:{
    color:'#00008B',
    fontWeight:'bold',
    marginLeft:100,
},
logoTextLink:{
    textDecoration:'none'
},
menuIcons:{
    color:'	#4169E1',
    cursor:'pointer',
    display:'flex',
    alignItems:'center',
    marginRight:20
},
icons:{
    marginLeft:30
},
searchContainer:{
    display:'flex',
    alignItems:'center',
    backgroundColor:'#b2beb5',
    height:35,
    borderRadius:10,
    width:800,
    
    
},
inputBase:{
    color:'black',
    width:"100%"
},
searchIcon:{
    color:'blue',
    cursor:'pointer',
    marginLeft:20,

},
avatar:{
    height:50,
    width:50
}
}))

function Header() {
    const classes=useStyles();
    return (
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.tabBar}>
                <div className={classes.logoText}>
                    <a className={classes.logoTextLink} href="">
                    <Typography
                    className={classes.logo} 
                    variant="h5"
                    >
                    Social Hub <br/>Sri Lanka
                    </Typography>
                    </a>
                </div>
                <div>
                    <div className={classes.searchContainer}>
                        <Search className={classes.searchIcon}/>
                        <InputBase className={classes.inputBase}></InputBase>
                    </div>
                </div>
                <div className={classes.menuIcons}>
                    <div className={classes.menuIcons}>
                        <Badge badgeContent={5}
                        color="secondary"
                        >
                        <Notifications className={classes.icons}/>
                        </Badge>
                        <Badge badgeContent={1}
                        color="secondary"
                        >
                            <Email className={classes.icons}/>
                        </Badge>
                        <SettingsInputComponentRounded className={classes.icons}/>
                    </div>
                    <div>
                        <Avatar className={classes.avatar} src="data:image/jpeg;base64,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" />
                    </div>
                </div>

            </Toolbar>
        </AppBar>
    )
}

export default Header
