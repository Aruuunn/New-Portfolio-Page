import React , {useState } from "react"
import { Grid, Paper, Button } from "@material-ui/core"
import LinkImage from "../images/link.svg"
import CourseraImage from "../images/coursera.png"
import FreeCodeCampImage from "../images/freecodecamp.svg"

const list = [
  {
    image: CourseraImage,
    type: "COURSERA",
    name: "Convolutional Neural Networks in TensorFlow",
    url:
      "https://www.coursera.org/account/accomplishments/certificate/DYXGWR3DN8R4",
  },
  {
    image: CourseraImage,
    type: "COURSERA",
    name:
      "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
    url:
      "https://www.coursera.org/account/accomplishments/certificate/DYH9UWAC4KQ6",
  },
  {
    image: CourseraImage,
    type: "COURSERA",
    name:
      "Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization",
    url:
      "https://www.coursera.org/account/accomplishments/certificate/QSVXKGWJ8R9F",
  },
  {
    image: CourseraImage,
    type: "COURSERA",
    name: "Neural Networks and Deep Learning",
    url:
      "https://www.coursera.org/account/accomplishments/certificate/SZUTWP6JJX4D",
  },
  {
    image: CourseraImage,
    type: "COURSERA",
    name: "Convolutional Neural Networks",
    url: "Convolutional Neural Networks",
    url:
      "https://www.coursera.org/account/accomplishments/certificate/7GTLU8Z72ST8",
  },
  {
    image: CourseraImage,
    type: "COURSERA",
    name:
      "Divide and Conquer, Sorting and Searching, and Randomized Algorithms",
    url:
      "https://www.coursera.org/account/accomplishments/certificate/P8PC3MXGEL48",
  },
  {
    image: CourseraImage,
    type: "COURSERA",
    name: "Graph Search, Shortest Paths, and Data Structures",
    url:
      "https://www.coursera.org/account/accomplishments/certificate/DC6M6W9FYGNW",
  },
  {
    image: FreeCodeCampImage,
    type: "FREECODECAMP",
    name: "Javascript Algorithms and DataStructures",
    url:
      "https://www.freecodecamp.org/certification/fccc4398c81-772b-43b1-8a82-02054228c2ee/javascript-algorithms-and-data-structures",
  },
  {
    image: FreeCodeCampImage,
    type: "FREECODECAMP",
    name: "Responsive Web Design",
    url:
      "https://www.freecodecamp.org/certification/fccc4398c81-772b-43b1-8a82-02054228c2ee/responsive-web-design",
  },
]

function Certifications(props) {
    const [limit ,setLimit ] = useState(3);
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
              Certifications
            </div>
            {list.slice(0,limit).map((o, idx) => (
              <Paper
                key={idx}
                variant="outlined"
                style={{ marginBottom: "20px" }}
              >
                <Grid container justify="space-between">
                  <Grid container alignItems="center" item xs={10}>
                    {o.type === "FREECODECAMP" ? (
                      <Grid
                        container
                        justify="center"
                        alignItems="center"
                        style={{
                          marginRight: "130px",
                          width: "65px",

                          height: "65px",
                          backgroundColor: "black",
                        }}
                      >
                        <img
                          src={o.image}
                          style={{
                            backgroundColor: "black",
                            height: "auto",
                            margin: 0,
                            width: "60px",
                          }}
                        />{" "}
                      </Grid>
                    ) : (
                      <div
                        style={{
                          marginRight: "130px",
                          height: "65px",
                        }}
                      >
                        <img
                          src={o.image}
                          style={{ height: "100%", margin: 0, width: "auto" }}
                        />
                      </div>
                    )}

                    <div
                      style={{
                        fontFamily: "'Merriweather',serif",
                        fontSize: "16px",
                        fontWeight: "bold",
                        padding:'5px'
                      }}
                    >
                      {o.name}
                    </div>
                  </Grid>
                  <Grid container justify="flex-end" item xs={2}>
                    <Button href={o.url} target="_blank" rel="no-referrer">
                      <img
                        src={LinkImage}
                        style={{ height: "25px", width: "auto" }}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            ))}
           { limit<=list.length ? 
           <Button style={{color:'grey'}} onClick={() => setLimit(l => l+3)}>
                SHOW MORE
            </Button> :null}
            {limit > 3?<Button onClick={() => setLimit(3)} style={{marginLeft:'20px'}}>SHOW LESS</Button>:null}
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Certifications
