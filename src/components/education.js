import React from "react"
import { Grid, Paper } from "@material-ui/core";

function Education(props) {
  return (
    <div {...props} style={{ marginTop: "100px" }}>
      <Grid container justify="center" alignItems="center">
        <Grid
          container
          item
          justify="flex-start"
          alignItems="center"
          style={{ maxWidth: "1366px", width: "100%", margin: "10px" }}
        >
          <div style={{ width: "100%" }}>
            <div
              style={{
                fontFamily: "'Lora',serif",
                fontSize: "32px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Educational Background
            </div>
            <Paper
              variant="outlined"
              style={{ padding: "20px", marginBottom: "20px" }}
            >
              <Grid container>
                <div
                  style={{
                    fontFamily: "'Merriweather',serif",
                    fontSize: "16px",
                    marginRight: "80px",
                  }}
                >
                  2019 - 2023
                </div>
                <div
                  style={{
                    fontFamily: "'Merriweather',serif",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Thiagarajar College of Engineering, Madurai, Tamil Nadu, India
                </div>
              </Grid>
            </Paper>
            <Paper
              variant="outlined"
              style={{ padding: "20px", marginBottom: "20px" }}
            >
              <Grid container>
                <div
                  style={{
                    fontFamily: "'Merriweather',serif",
                    fontSize: "16px",
                    marginRight: "80px",
                  }}
                >
                  2017 - 2019
                </div>
                <div
                  style={{
                    fontFamily: "'Merriweather',serif",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Hindu Senior Secondary School, Indira Nagar, Chennai, Tamil Nadu, India
                </div>
              </Grid>
            </Paper>
            <Paper
              variant="outlined"
              style={{ padding: "20px", marginBottom: "20px" }}
            >
              <Grid container>
                <div
                  style={{
                    fontFamily: "'Merriweather',serif",
                    fontSize: "16px",
                    marginRight: "120px",
                  }}
                >
                   - 2019
                </div>
                <div
                  style={{
                    fontFamily: "'Merriweather',serif",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Reserve Bank Staff Quarters, Besant Nagar, Chennai, Tamil Nadu, India
                </div>
              </Grid>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Education
