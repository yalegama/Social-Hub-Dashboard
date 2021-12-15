import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const useStyles=makeStyles((theme)=>({

    chartSection:{
    marginTop:30,
    marginLeft:175,
    WebkitBoxShadow: "0px 0px 20px 2px #b2beb5",
    width:1200,
    height:300
},
cahrtTitle:{
    fontWeight:'bold',
    padding:20
},
responsiveContainer:{
    height:'100',
    width:'100'
}
}))

function Chart() {

    const data = [
        {
          name: '',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Jan',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Feb',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'March',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Apr',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'May',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'June',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

    const classes=useStyles();
    return (
        <div className={classes.chartSection}>
            <div className={classes.chart}>
                <Typography
                className={classes.cahrtTitle}
                variant="h5"
                >
                    Active User Details
                </Typography>
                <div className={classes.chartContainer}>
                    <ResponsiveContainer width="100%" aspect={4/1}>
                    <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="blue" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="red" />
          <Line type="monotone" dataKey="amt" stroke="#8884d8" />
        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default Chart
