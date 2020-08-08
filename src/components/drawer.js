import React from 'react'
import {Drawer , List ,ListItem  } from '@material-ui/core';
import LaptopImage from '../images/laptop.jpg';
import './drawer.css';

function SideDrawer(props) {
    const { open , onClose} = props;
    return (
        <div style={{overflowY:'hidden',minHeight:'90vh'}}>
<Drawer anchor="left" open={open} onClose={onClose} style={{overflowY:'hidden'}}>
            <img src={LaptopImage} style={{width:'300px',height:'auto'}}/>
    <List style={{backgroundColor:'#D92027',color:'white',paddingTop:'30px',paddingLeft:'10px',paddingRight:'10px',overflowY:'hidden',height:'100%'}}>
   <ListItem className="item">
   SKILLSET
    </ListItem>
    <ListItem  className="item">
        PROJECTS
    </ListItem>
    <ListItem  className="item">
        EXPERIENCE
    </ListItem>
    <ListItem  className="item">
        EDUCATION
    </ListItem>
    <ListItem  className="item">
        CERTIFICATIONS
    </ListItem>
    <ListItem  className="item">
        CONTACT ME
    </ListItem>
            </List>
        </Drawer>
        </div>
        
    )
}

export default SideDrawer;
