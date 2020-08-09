import React, { useState } from "react"
import { AppBar, Grid, Hidden, Button, Fade } from "@material-ui/core"
import InstagramLogo from "../images/1@2x.png"
import GithubLogo from "../images/Path 305@2x.png"
import LinkedInLogo from "../images/icons8-linkedin.png"
import MenuIcon from "../images/menu.svg"
import "./NavBar.css"
import Drawer from "./drawer"
import { Link } from "gatsby"

function NavBar(props) {
  const [open, setOpen] = useState(false)
  const { isScrolled } = props

  return (
    <div style={{ height: "50px", width: "100%" }}>
      <AppBar position="fixed" className="appbar">
        <Grid
          container
          justify="center"
          alignItems="center"
          className="nav"
          style={{ padding: isScrolled ? '5px' : "15px" }}
        >
          <Grid
            alignItems="center"
            justify="space-between"
            container
            item
            style={{ maxWidth: "1366px" }}
          >
            <Hidden only={["lg", "xl"]}>
              <img
                src={MenuIcon}
                style={{
                  width: "24px",
                  height: "auto",
                  marginRight: "15px",
                  color: "white",
                }}
                onClick={() => setOpen(true)}
              />
            </Hidden>
            <Grid
              container
              item
              lg={1}
              sm={6}
              xs={4}
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              Arun
            </Grid>
            <Hidden mdDown>
              <Grid
                container
                item
                lg={7}
                alignItems="flex-end"
                justify="space-evenly"
                style={{
                  fontFamily: "'Merriweather',serif",
                  fontSize: "16px",
                  marginLeft: "50px",
                  position: "relative",
                  top: "1px",
                  width: "100%",
                }}
              >
                <Fade in={isScrolled} timeout={1000} >
                  <Link to="#skills" className="link">
                    SKILLSET
                  </Link>
                </Fade>
                <Fade in={isScrolled} timeout={1000}>
                  <Link to="#projects" className="link">
                    PROJECTS
                  </Link>
                </Fade>
                <Fade in={isScrolled} timeout={1000}>
                  <Link to="#experience" className="link">
                    EXPERIENCE
                  </Link>
                </Fade>
                <Fade in={isScrolled} timeout={1000}>
                  <Link to="#education" className="link">
                    EDUCATION
                  </Link>
                </Fade>
                <Fade in={isScrolled} timeout={1000}>
                  <Link to="#certification" className="link">
                    CERTIFICATIONS
                  </Link>
                </Fade>
                <Fade in={isScrolled} timeout={1000}>
                  <Link to="#contactme" className="link">
                    CONTACT ME
                  </Link>
                </Fade>
              </Grid>
            </Hidden>
            <Hidden smDown>
              <Grid
                container
                item
                justify="flex-end"
                style={{ marginRight: "10px", marginLeft: "10px" }}
                sm={5}
                xs
                lg={3}
              >
                <Button
                  href="https://www.instagram.com/_arunmurugan_/"
                  target="_blank"
                  rel="no-referrer"
                >
                  <img
                    src={InstagramLogo}
                    style={{
                      width: "30px",
                      height: "auto",
                      marginRight: "15px",
                    }}
                  />
                </Button>
                <Button
                  href="https://github.com/ArunMurugan78"
                  target="_blank"
                  rel="no-referrer"
                >
                  <img
                    src={GithubLogo}
                    style={{
                      width: "30px",
                      height: "auto",
                      marginRight: "15px",
                    }}
                  />
                </Button>
                <Button
                  href="https://www.linkedin.com/in/arun-murugan-50885717a/"
                  target="_blank"
                  rel="no-referrer"
                >
                  <img
                    src={LinkedInLogo}
                    style={{
                      width: "30px",
                      height: "auto",
                      marginRight: "15px",
                    }}
                  />
                </Button>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </AppBar>
      <Drawer open={open} onClose={() => setOpen(false)} />
    </div>
  )
}

export default NavBar
