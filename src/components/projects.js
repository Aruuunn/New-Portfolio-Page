import React from "react"
import { Grid, Link } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { useTheme, useMediaQuery } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import GithubLogo from "../images/Path 312@2x.png"
import Img from "gatsby-image"
import "./projects.css"

const list = [
  {
    name: "Shortest Path Finder",
    url: "https://shortest-path-finder.web.app/",
    repo: "https://github.com/ArunMurugan78/Shortest-Path-Visualiser",
    description:
      "A Visualisation Tool to visualise Dijkstra's Algorithms and A* algorithm made using Reactjs and Bootstrap",
  },
  {
    name: "Blogzz",
    url: "https://blogzzzz.herokuapp.com/",
    repo: "https://github.com/ArunMurugan78/blog",
    description:
      "A Blogging Application made using Reactjs, Redux , Bootstrap , Expressjs and MongoDB. It supports CRUD operations and many more!",
  },

  {
    name: "Cat Face Landmark prediction",
    url: "https://github.com/ArunMurugan78/Cat-Face-Landmark-Prediction",
    repo: "https://github.com/ArunMurugan78/Cat-Face-Landmark-Prediction",
    description:
      "A python program to predict face landmark of a Cat! It is based on Deeplearning.",
  },
  {
    name: "Classic Snake Game",
    url: "https://classic-snakee-game.web.app/",
    repo: "https://github.com/ArunMurugan78/snake",
    description: "Classic Snake Game made using Reactjs",
  },

  {
    name: "A News App",
    url: "https://news-e2759.web.app/",
    repo: "https://github.com/ArunMurugan78/News-app",
    description: "A news app made using Reactjs and News Api",
  },
  {
    name: "Corona Stats",
    url: "https://corona-stats-now.web.app/",
    repo: "https://github.com/ArunMurugan78/Corona-Stats",
    description: "A Covid-19 Tracker App made using Reactjs",
  },
]

function MediaCard(props) {
  const { fluid, idx } = props
  console.log("KEY", props)

  const { name, url, repo, description } = list[idx - 1]

  return (
    <Card
      style={{
        maxWidth: "400px",
        width: "100%",
        marginRight: "20px",
        marginBottom: "20px",
        marginTop: "20px",

        position: "relative",
      }}
      key={idx}
    >
      <Grid container direction="column" justify="flex-end" style={{height:'100%'}}>

        <div style={{ maxWidth: "400px", width: "100%" }} className="card">
          <div>
            <Img fluid={fluid} style={{ maxWidth: "400px", width: "100%" }} />

            <Link href={url} rel="noreferrer" target="_blank">
              <div className="light"></div>
            </Link>
          </div>

          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                style={{ fontFamily: "'Lora',serif" }}
                component="h2"
              >
                {name}
              </Typography>
              <Typography
                variant="body"
                style={{ fontFamily: "'Merriweather',serif" }}
              >
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </div>

        <CardActions>
          <Grid container justify="space-between">
            <Button
              href={url}
              rel="noreferrer"
              target="_blank"
              size="large"
              variant="contained"
              style={{ backgroundColor: "#FF9234", color: "white" }}
            >
              Open
            </Button>
            <Button rel="noreferrer" target="_blank" href={repo}>
              <img src={GithubLogo} style={{ height: "30px", width: "auto" }} />
            </Button>
          </Grid>
        </CardActions>
      </Grid>
    </Card>
  )
}

function MyProjects(props) {
  const theme = useTheme()
  const lg = useMediaQuery(theme.breakpoints.up("lg"))
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/g" }
          relativeDirectory: { eq: "projects" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Grid
      {...props}
      container
      justify="center"
      alignItems="center"
      style={{ marginTop: "150px" }}
    >
      <Grid
        container
        justify="space-between"
        alignItems="center"
        item
        style={{
          maxWidth: "1366px",
          margin: "10px",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "'Lora',serif",
              fontSize: "32px",
              fontWeight: "bold",
            }}
          >
            My Projects
          </div>
          <div
            style={{
              fontFamily: "'Merriweather',serif",
              fontSize: "16px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            I love learning by doing projects. If you like my projects do
            consider giving my project a star on GitHub.
          </div>
          <Grid
            container
            justify={lg ? "space-between" : "space-around"}
            style={{ marginTop: "10px" }}
          >
            {data.allFile.edges.map(image => {
              return (
                <MediaCard
                  fluid={image.node.childImageSharp.fluid}
                  idx={parseInt(image.node.base.split(".")[0][1])}
                />
              )
            })}
          </Grid>
        </div>
      </Grid>
    </Grid>
  )
}

export default MyProjects
