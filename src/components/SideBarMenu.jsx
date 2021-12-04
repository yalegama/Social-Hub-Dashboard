import { colors } from '@material-ui/core';
import { AddShoppingCart, AttachMoney, ChatBubbleRounded, ChatSharp, FeedbackOutlined, Home, Mail, Message, Person, Timeline } from '@material-ui/icons';
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
                    <h3 style={{color:'#696969'}}>Dashboard</h3>
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
                    <h3 style={{color:'#696969'}}>Quick Sale</h3>
                    <div className={classes.itemContainer}>
                        <Person className={classes.icon}/>
                        Users
                    </div>
                    <div className={classes.itemContainer}>
                        <AddShoppingCart className={classes.icon}/>
                        Product
                    </div>
                    <div className={classes.itemContainer}>
                        <AttachMoney className={classes.icon}/>
                        Transaction
                    </div>
                    <div className={classes.itemContainer}>
                        <ChatBubbleRounded className={classes.icon}/>
                        Repots
                    </div>
                </div>
                <div className={classes.sideBarItemContainer}>
                    <h3 style={{color:'#696969'}}>Notification</h3>
                    <div className={classes.itemContainer}>
                        <Mail className={classes.icon}/>
                        Mail
                    </div>
                    <div className={classes.itemContainer}>
                        <FeedbackOutlined className={classes.icon}/>
                        Feedback
                    </div>
                    <div className={classes.itemContainer}>
                        <Message className={classes.icon}/>
                        Messages
                    </div>
                </div>
                <div className={classes.sideBarItemContainer}>
                    <h3 style={{color:'#696969'}}>Staff</h3>
                    <div className={classes.itemContainer}>
                        <Message className={classes.icon}/>
                        Manage
                    </div>
                    <div className={classes.itemContainer}>
                        <ChatSharp className={classes.icon}/>
                        Analytics
                    </div>
                    <div className={classes.itemContainer}>
                        <Timeline className={classes.icon}/>
                        Reports
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBarMenu
