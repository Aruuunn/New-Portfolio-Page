import React from "react"
import { Grid, Paper , Button } from "@material-ui/core";
import LinkImage from '../images/link.svg';


function Experience(props) {
  return (
    <div style={{ marginTop: "100px" }} {...props}>
      <Grid
        container
        justify="center"
        alignItems="center"
      
      >
        <Grid
          container
          item
          justify="flex-start"
          alignItems="center"
          style={{ maxWidth: "1366px",width:'100%' ,margin: "10px",}}
        >
          <div style={{width:'100%'}}>
            <div
              style={{
                fontFamily: "'Lora',serif",
                fontSize: "32px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Previous Work Experience
            </div>
            <Paper variant="outlined" style={{padding:'20px 0 20px 20px'}}>
              <Grid container justify="space-between">
                <Grid container alignItems="center" item xs={10}>
                  
                    <div
                    style={{
                      fontFamily: "'Merriweather',serif",
                      fontSize: "16px",
                      marginRight:'20px'
                    }}
                  >
                    Jun 2020 - Jul 2020
                  </div>
                  <div
                    style={{
                      fontFamily: "'Merriweather',serif",
                      fontSize: "16px",
                      fontWeight:'bold',
                   
                    }}
                  >
                   Software Developer Intern at Learnogether
                  </div>
                    
                 
                </Grid>
                <Grid container justify="flex-end" item xs={2}>
                    <Button href="https://www.dropbox.com/s/6yt8lioi18mls5x/Certificate%20Arun.pdf?dl=0" target="_blank" rel="no-referrer">
                       <img src={LinkImage} style={{height:'25px',width:'auto'}}/>
                    </Button>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Experience
