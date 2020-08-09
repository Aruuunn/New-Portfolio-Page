import React, { useEffect , useState } from "react"
import { Grid, useTheme, useMediaQuery, Hidden , } from "@material-ui/core"
import WavingHandIcon from "../images/wavinghand@2x.png"
import Img from "gatsby-image"
import { useStaticQuery, graphql , Link } from "gatsby"
import DownArrow from "../images/Path 201@2x.png"
import "./intro.css"

const Image = props => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "me.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  console.log(data)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} {...props} />
}

function Intro(props) {
  const { isScrolled, setScrolled } = props;
  const [showArrow ,setShowArrow] = useState(false);

  setTimeout(() => {
    setShowArrow(true);
  },10*1000)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled();
    })
  }, [])

  if(isScrolled){
    window.removeEventListener('scroll',() => {
      setScrolled()
    });
  }
  const theme = useTheme()
  const xl = useMediaQuery(theme.breakpoints.up("xl"))
  const xs = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <div {...props}>
      <Grid container justify="center" alignItems="flex-start">
        <Grid
          container
          justify="space-around"
          alignItems="center"
          style={{
            maxWidth: "1366px",
            minHeight: "100vh",
            fontFamily: "'Merriweather',serif",
          }}
        >
          <Grid
            xs={12}
            container
            item
            justify="center"
            alignItems="flex-start"
            md={6}
          >
            <Image
              style={{
                width: "70%",
                maxWidth: "250px",
                height: "auto",
                position: "relative",
                top: xl ? "-120px" : "-50px",
              }}
            />
          </Grid>
          <Grid
            xs={12}
            container
            item
            justify="center"
            alignItems={ "center"}
            md={6}
            style={{
              fontSize: xl ? "32px" : "24px",
              lineHeight: xl ? "56px" : "40px",
              position: "relative",
              top: !xs ? "-20px" : "-60px",
            }}
          >
            <div style={{ maxWidth: "600px", margin: "15px" }}>
              <img
                src={WavingHandIcon}
                style={{
                  height: xl ? "40px" : "32px",
                  width: "auto",
                  marginRight: "10px",
                }}
              />
              <span
                style={{
                  fontSize: xl ? "40px" : "32px",
                  fontFamily: "'Lora',serif",
                  fontWeight: "bold",
                }}
              >
                Hi , I am Arun .
              </span>{" "}
              I am a Web developer, Machine Learning and Tech enthusiast , Cat
              and Coffee lover. <Link to="#skills" style={{color:'grey',fontFamily:"'Lora',serif" }}>Learn About Me</Link>
            </div>
          </Grid>
      
            <Hidden smDown>
              <img
                src={DownArrow}
                style={{ width: "30px", height: "auto" ,visibility:isScrolled ||( !showArrow )?'hidden':'visible' }}
                className="down-arrow"
              />
            </Hidden>
        
        </Grid>
      </Grid>
    </div>
  )
}

export default Intro
