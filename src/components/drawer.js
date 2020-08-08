import React from "react"
import { Drawer, List, ListItem } from "@material-ui/core"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import "./drawer.css"

function SideDrawer(props) {
  const { open, onClose } = props

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "laptop.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div style={{ overflowY: "hidden", minHeight: "90vh" }}>
      <Drawer
        anchor="left"
        open={open}
        onClose={onClose}
        style={{ overflowY: "hidden" }}
      >
        <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
          style={{ width: "250px", height: "auto" }}
        />
        <List
          style={{
            backgroundColor: "#D92027",
            color: "white",
            paddingTop: "30px",
            paddingLeft: "10px",
            paddingRight: "10px",
            overflowY: "hidden",
            height: "100%",
          }}
        >
          <Link to="#skills" className="link">
            <ListItem className="item">SKILLSET</ListItem>
          </Link>

          <Link to="#projects" className="link">
            <ListItem className="item">PROJECTS</ListItem>
          </Link>
          <Link to="#experience" className="link">
            <ListItem className="item">EXPERIENCE</ListItem>
          </Link>
          <Link to="#education" className="link">
            <ListItem className="item">EDUCATION</ListItem>
          </Link>
          <Link to="#certification" className="link">
            <ListItem className="item">CERTIFICATIONS</ListItem>
          </Link>
          <Link to="#contactme" className="link">
            <ListItem className="item">CONTACT ME</ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  )
}

export default SideDrawer
