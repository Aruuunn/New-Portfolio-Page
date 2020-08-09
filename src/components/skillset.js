import React, { useState } from "react"
import { Grid, Tooltip, ClickAwayListener  ,Button } from "@material-ui/core"
import ReactLogo from "../images/react.png"
import BootstrapLogo from "../images/bootstrap.png"
import JsLogo from "../images/js.png"
import TypescriptLogo from "../images/ts.png"
import CssLogo from "../images/css.png"
import HtmlLogo from "../images/html.png"
import NodejsLogo from "../images/nodejs.png"
import XDLogo from "../images/xd.png"
import CppLogo from "../images/cpp.png"
import NestjsLogo from "../images/nestjs.png"
import ReduxLogo from "../images/redux.png"
import ExpressjsLogo from "../images/expressjs.png"
import MaterialUI from "../images/material-ui.png"
import { withStyles } from "@material-ui/core"

const CustomTooltip = withStyles({
  tooltip: {
    backgroundColor: "#D92027",
    fontSize: "16px",
    padding: "10px",
    borderRadius: 0,
    fontFamily: "'Lora',serif",
    fontWeight: "bold",
  },
  arrow: {
    color: "#D92027",
  },
})(Tooltip)

const MyCustomToolTip = props => {
  const [open, setOpen] = useState(false)
  const { children } = props
  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <CustomTooltip
        {...props}
        open={open}
        onClose={() => setOpen(false)}
        PopperProps={{
          disablePortal: true,
        }}
      >
        <Button onClick={() => setOpen(true)} style={{backgroundColor:'inherit'}}>
        {children}
        </Button>
      </CustomTooltip>
    </ClickAwayListener>
  )
}

function Skillset(props) {
  return (
    <div style={{ marginTop: "100px" }} {...props}>
      <Grid
        container
        justify="center"
        alignItems="flex-start"
        style={{ margin: "10px" }}
      >
        <Grid
          container
          item
          style={{ maxWidth: "1366px", fontFamily: "'Merriweather',serif" }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'Lora' ,serif",
                fontSize: "32px",
                lineHeight: "24px",
              }}
            >
              My Skill Set
            </h2>
            <div style={{ fontSize: "16px" }}>
              (Click the icons for proficiency level)
            </div>
          </div>
          <Grid container justify="flex-start" alignItems="center">
            <MyCustomToolTip
              disableFocusListener
              disableHoverListener
              disableTouchListener
              arrow
              placement="top"
              title="Javascript (intermediate)"
              style={{
                backgroundColor: "red",
                color: "white",
                paddingRight: "30px",
                paddingTop: "30px",
                paddingBottom: "30px",
                fontSize: "32px",
              }}
            >
              <img
                src={JsLogo}
                style={{ height: "70px", width: "auto", margin: "0px" }}
              />
            </MyCustomToolTip>
            <MyCustomToolTip
              disableFocusListener
              disableHoverListener
              disableTouchListener
              arrow
              placement="top"
              title="Reactjs (intermediate)"
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "30px",

                fontSize: "32px",
              }}
            >
              <img
                src={ReactLogo}
                style={{ height: "70px", width: "auto", margin: "20px" }}
              />
            </MyCustomToolTip>

            <MyCustomToolTip
              arrow
              disableFocusListener
              disableHoverListener
              disableTouchListener
              placement="top"
              title="Bootstrap (intermediate)"
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "30px",
                fontSize: "32px",
              }}
            >
              <img
                src={BootstrapLogo}
                style={{ height: "70px", width: "auto", margin: "20px" }}
              />
            </MyCustomToolTip>

            <MyCustomToolTip
              disableFocusListener
              disableHoverListener
              disableTouchListener
              arrow
              placement="top"
              title="Typescript (Beginner)"
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "30px",
                fontSize: "32px",
              }}
            >
              <img
                src={TypescriptLogo}
                style={{ height: "70px", width: "auto", margin: "20px" }}
              />
            </MyCustomToolTip>
            <MyCustomToolTip
              arrow
              disableFocusListener
              disableHoverListener
              disableTouchListener
              placement="top"
              title="CSS (Intermediate)"
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "30px",
                fontSize: "32px",
              }}
            >
              <img
                src={CssLogo}
                style={{ height: "70px", width: "auto", margin: "20px" }}
              />
            </MyCustomToolTip>
            <MyCustomToolTip
              arrow
              disableFocusListener
              disableHoverListener
              disableTouchListener
              placement="top"
              title="HTML (intermediate)"
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "30px",
                fontSize: "32px",
              }}
            >
              <img
                src={HtmlLogo}
                style={{ height: "70px", width: "auto", margin: "20px" }}
              />
            </MyCustomToolTip>
            <MyCustomToolTip
              arrow
              disableFocusListener
              disableHoverListener
              disableTouchListener
              placement="top"
              title="Nodejs (Intermediate)"
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "30px",
                fontSize: "32px",
              }}
            >
              <img
                src={NodejsLogo}
                style={{ height: "100px", width: "auto", margin: "10px" }}
              />
            </MyCustomToolTip>
            <MyCustomToolTip
              arrow
              disableFocusListener
              disableHoverListener
              disableTouchListener
              placement="top"
              title="Adobe XD (Beginner)"
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "30px",
                fontSize: "32px",
              }}
            >
              <img
                src={XDLogo}
                style={{ height: "70px", width: "auto", margin: "20px" }}
              />
            </MyCustomToolTip>
            <MyCustomToolTip
              arrow
              disableFocusListener
              disableHoverListener
              disableTouchListener
              placement="top"
              title="C++ (Intermediate)"
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "30px",
                fontSize: "32px",
              }}
            >
              <img
                src={CppLogo}
                style={{ height: "70px", width: "auto", margin: "20px" }}
              />
            </MyCustomToolTip>
            <MyCustomToolTip
              arrow
              disableFocusListener
              disableHoverListener
              disableTouchListener
              placement="top"
              title="Nestjs (Beginner)"
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "30px",
                fontSize: "32px",
              }}
            >
              <img
                src={NestjsLogo}
                style={{ height: "70px", width: "auto", margin: "20px" }}
              />
            </MyCustomToolTip>
            <MyCustomToolTip
              arrow
              disableFocusListener
              disableHoverListener
              disableTouchListener
              placement="top"
              title="Redux (Intermediate)"
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "30px",
                fontSize: "32px",
              }}
            >
              <img
                src={ReduxLogo}
                style={{ height: "70px", width: "auto", margin: "20px" }}
              />
            </MyCustomToolTip>
            <MyCustomToolTip
              arrow
              disableFocusListener
              disableHoverListener
              disableTouchListener
              placement="top"
              title="Expressjs (Beginner)"
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "30px",
                fontSize: "32px",
              }}
            >
              <img
                src={ExpressjsLogo}
                style={{ height: "30px", width: "auto", margin: "20px" }}
              />
            </MyCustomToolTip>
            <MyCustomToolTip
              arrow
              disableFocusListener
              disableHoverListener
              disableTouchListener
              placement="top"
              title="Material UI for Reactjs (Beginner)"
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "30px",
                fontSize: "32px",
              }}
            >
              <img
                src={MaterialUI}
                style={{ height: "70px", width: "auto", margin: "20px" }}
              />
            </MyCustomToolTip>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Skillset
