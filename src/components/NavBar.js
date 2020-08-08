import React , {useState} from 'react'
import {AppBar , Grid  ,Hidden  } from '@material-ui/core';
import InstagramLogo from '../images/1@2x.png';
import GithubLogo from '../images/Path 305@2x.png';
import LinkedInLogo from '../images/icons8-linkedin.png';
import MenuIcon from '../images/menu.svg';
import './NavBar.css';
import Drawer from './drawer';

function NavBar() {
    const [open ,setOpen] = useState(false);

    return (
        <div style={{height:'50px',width:'100%'}}>
            <AppBar position="fixed" className="appbar">
                <Grid container justify="center" alignItems="center" style={{padding:'15px'}}>
<Grid alignItems="center" justify="space-between" container item style={{maxWidth:'1366px'}}>
    <Hidden only={['lg','xl']}>
    <img src={MenuIcon} style={{width:'24px',height:'auto' ,marginRight:'15px',color:'white'}} onClick={()=>setOpen(true)}/>

    </Hidden>
<Grid  container item lg={1} sm={6} xs={4} style={{fontSize:'24px',fontWeight:'bold'}}>
Arun
</Grid>
<Hidden mdDown>
<Grid container item lg={7} alignItems="flex-end" justify="space-evenly" style={{fontFamily:"'Merriweather',serif",fontSize:'16px',marginLeft:'50px',position:'relative',top:'1px',width:'100%'}}>
 <div>
   SKILLSET
    </div>
    <div>
        PROJECTS
    </div>
    <div>
        EXPERIENCE
    </div>
    <div>
        EDUCATION
    </div>
    <div>
        CERTIFICATIONS
    </div>
    <div>
        CONTACT ME
    </div>
</Grid>
</Hidden>

<Grid container item justify="flex-end" sm={5} xs lg={3}>
<img src={InstagramLogo} style={{width:'30px',height:'auto' ,marginRight:'15px'}}/>
<img src={GithubLogo} style={{width:'30px',height:'auto',marginRight:'15px'}}/>
<img src={LinkedInLogo} style={{width:'30px',height:'auto',marginRight:'15px'}}/>



</Grid>



</Grid>
                </Grid>
            

            </AppBar>
            <Drawer open={open} onClose={() => setOpen(false)}/>
        </div>
    )
}

export default NavBar;
