import React from "react"
import { Grid  , useTheme , useMediaQuery ,Hidden } from "@material-ui/core"
import WavingHandIcon from '../images/wavinghand@2x.png';
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import DownArrow from '../images/Path 201@2x.png';
import './intro.css';


const Image = (props) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Group 4.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          },
        },
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} {...props} />
}

function Intro() {

    const theme = useTheme();
    const xl = useMediaQuery(theme.breakpoints.up('xl'));
    const xs = useMediaQuery(theme.breakpoints.up('xs'));
    
   
  return (
    <div>
      <Grid container justify="center" alignItems="flex-start">
        <Grid container justify="space-around" alignItems="center" style={{ maxWidth: "1366px" ,minHeight:'100vh',fontFamily:"'Merriweather',serif"}}>
          <Grid
            xs={12}
            container
            item
            justify="center"
            alignItems="flex-start"
            md={6}
          >
              <Image style={{width:'70%',maxWidth:'250px',height:'auto' ,position:'relative' , top:xl ? '-120px': '-90px' }}/>
          </Grid>
          <Grid xs={12} container item justify="center" alignItems="center" md={6} style={{fontSize:xl ? '32px' : '24px',lineHeight:xl ? '56px' :'40px',position:'relative',top:!xs ?'-30px' : 0}}>
            <div style={{maxWidth:'600px',margin:'15px'}}>
              <img src={WavingHandIcon} style={{height:xl ?'40px' :'32px',width:'auto',marginRight:'10px'}}/>
             <span style={{fontSize:xl ?'40px' :'32px',fontFamily:"'Lora',serif",fontWeight:'bold'}}>Hi , I am Arun .</span> I am a Web developer, Machine Learning and Tech
              enthusiast , Cat and Coffee lover. I would love to work on
              projects which helps innocent people and make this world a better
              place. If you are working on any such project , do consider
              collaborating with me :)
            </div>
          </Grid>
<Hidden smDown>
<img src={DownArrow} style={{width:'30px',height:'auto'}} className="down-arrow"/>

</Hidden>

        </Grid>
      </Grid>

    </div>
  )
}

export default Intro
