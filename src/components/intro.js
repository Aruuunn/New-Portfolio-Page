import React from "react"
import { Grid  , useTheme , useMediaQuery } from "@material-ui/core"
import ProfilePic from "../images/Group 4.png";
import WavingHandIcon from '../images/wavinghand@2x.png';

function Intro() {

    const theme = useTheme();
    const xl = useMediaQuery(theme.breakpoints.up('xl'));
   
  return (
    <div>
      <Grid container justify="center" alignItems="flex-start">
        <Grid container justify="space-around" alignItems="center" style={{ maxWidth: "1366px" ,minHeight:'90vh',fontFamily:"'Merriweather',serif"}}>
          <Grid
            xs={12}
            container
            item
            justify="center"
            alignItems="flex-start"
            md={6}
          >
              <img src={ProfilePic} style={{width:'70%',maxWidth:'300px',height:'auto' ,position:'relative' , top:'-60px' }}/>
          </Grid>
          <Grid xs={12} container item justify="center" alignItems="center" md={6} style={{fontSize:xl ? '32px' : '24px',lineHeight:xl ? '56px' :'40px'}}>
            <div style={{maxWidth:'600px',margin:'15px'}}>
              <img src={WavingHandIcon} style={{height:xl ?'40px' :'32px',width:'auto',marginRight:'10px'}}/>
             <span style={{fontSize:xl ?'40px' :'32px',fontFamily:"'Lora',serif",fontWeight:'bold'}}>Hi , I am Arun .</span> I am a Web developer, Machine Learning and Tech
              enthusiast , Cat and Coffee lover. I would love to work on
              projects which helps innocent people and make this world a better
              place. If you are working on any such project , do consider
              collaborating with me :).
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Intro
