import React from "react"
import { Grid , Button } from "@material-ui/core"
import LinkedInImage from "../images/linkedin.svg"
import InstagramImage from "../images/insta.svg"
import GithubImage from "../images/git.svg"

function ContactMe(props) {
  return (
    <div style={{ marginTop: "100px" }} {...props}>
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
              Contact Me
            </div>
            <Grid container alignItems="center">
              <Button
                href="https://www.linkedin.com/in/arun-murugan-50885717a/"
                target="_blank"
                rel="no-referrer"
              >
                <img
                  src={LinkedInImage}
                  style={{
                    height: "100%",
                    maxHeight: "45px",
                    width: "auto",
                    marginRight: "20px",
                  }}
                />
              </Button>
              <Button
                href="https://www.instagram.com/_arunmurugan_/"
                target="_blank"
                rel="no-referrer"
              >
                 <img
                src={InstagramImage}
                style={{
                  height: "100%",
                  maxHeight: "45px",
                  width: "auto",
                  marginRight: "20px",
                }}
              />
              </Button>
              <Button
                href="https://github.com/ArunMurugan78"
                target="_blank"
                rel="no-referrer"
              >
                  <img
                src={GithubImage}
                style={{
                  height: "100%",
                  maxHeight: "45px",
                  width: "auto",
                  marginRight: "20px",
                }}
              />
              </Button>
            
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default ContactMe
