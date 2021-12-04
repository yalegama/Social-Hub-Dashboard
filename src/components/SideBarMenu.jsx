import { ChatSharp, Home, Timeline } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles=makeStyles((theme)=>({
    sideBarContainer:{
    },
    itemContainer:{
        display:'flex',
        alignItems:'center',
        cursor:'pointer',
        backgroundColor:' #eeeae9',
        marginLeft:20,
        margin:1,
        height:50,
        borderRadius:10,
        "&:hover":{
            backgroundColor:'blue'
        }

    },
    icon:{
        marginLeft:100
    }
}))

function SideBarMenu() {
    const classes=useStyles();
    return (
        <div className={classes.sideBarContainer}>
            <div className={classes.wrapSidebar}>
                <div className={classes.sideBarItemContainer}>
                    <h3>Dashboard</h3>
                    <div className={classes.itemContainer}>
                        <Home className={classes.icon} />
                        Home
                    </div>
                    <div className={classes.itemContainer}>
                        <ChatSharp className={classes.icon}/>
                        Messages
                    </div>
                    <div className={classes.itemContainer}>
                        <Timeline className={classes.icon}/>
                        Analytic
                    </div>
                </div>
                <div className={classes.sideBarItemContainer}>
                    <h3>Quick Sale</h3>
                    <div className={classes.itemContainer}>
                        <Home className={classes.icon}/>
                        Home
                    </div>
                    <div className={classes.itemContainer}>
                        <ChatSharp className={classes.icon}/>
                        Messages
                    </div>
                    <div className={classes.itemContainer}>
                        <Timeline className={classes.icon}/>
                        Analytic
                    </div>
                </div>
                <div className={classes.sideBarItemContainer}>
                    <h3>Dashboard</h3>
                    <div className={classes.itemContainer}>
                        <Home className={classes.icon}/>
                        Home
                    </div>
                    <div className={classes.itemContainer}>
                        <ChatSharp className={classes.icon}/>
                        Messages
                    </div>
                    <div className={classes.itemContainer}>
                        <Timeline className={classes.icon}/>
                        Analytic
                    </div>
                </div>
                <div className={classes.sideBarItemContainer}>
                    <h3>Dashboard</h3>
                    <div className={classes.itemContainer}>
                        <Home className={classes.icon}/>
                        Home
                    </div>
                    <div className={classes.itemContainer}>
                        <ChatSharp className={classes.icon}/>
                        Messages
                    </div>
                    <div className={classes.itemContainer}>
                        <Timeline className={classes.icon}/>
                        Analytic
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBarMenu
