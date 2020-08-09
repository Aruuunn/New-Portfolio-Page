import React from "react"
import { Grid } from "@material-ui/core"
import HeartIcon from '../images/heart.svg'
function Footer() {
  return (
    <div
      style={{
     
        marginTop: "100px",
        marginRight: 0,
        marginLeft: 0,
        marginBottom: 0,
        width: "100%",
        backgroundColor: "#D92027",
        color: "white",
        position:'sticky'
        ,bottom:0
      }}
    >
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{
            height: "70px",
          fontFamily: "'Merriweather',serif",
          fontSize: "16px",
        }}
      >
        made with <img src={HeartIcon} style={{height:'16px',width:'auto' ,margin:'10px'}}/> by Arun
      </Grid>
    </div>
  )
}

export default Footer
