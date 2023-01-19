import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import '../App.css'
import Logo from '../assets/150x150logo.png'
import { useStateValue } from '../context/StateProvider';
import { useNavigate } from 'react-router-dom';
import Aboutus from './Aboutus';



function Footer() {
    const [{user}, dispatch]  =useStateValue();
    const [modal, setModal] = useState(false);
    
    const navigate = useNavigate()
    const loginClick = () => {
        if (!user) {
            dispatch({
                type: 'OPENLOGINDIALOG'
            });
        }
    }

    const learnMoreAgriculture = () => {
        if (user) {
            navigate('/locations');
        } else {
            dispatch({
                type: 'OPENLOGINDIALOG'
            });
        }
    }

    const learnMoreDashboard = () => {
        if (user) {
            navigate('/dashboard');
        } else {
            dispatch({
                type: 'OPENLOGINDIALOG'
            });
        }
    }

    const learnMoreBlogs = () => {
        if (user) {
            navigate('/blogs');
        } else {
            dispatch({
                type: 'OPENLOGINDIALOG'
            });
        }
    }

    const toggleModal= () => {
        setModal(true)
      }
    
      const toggleModalOff= () => {
        setModal(false)
      }

  return (
    <>
    <Box p={5} sx={{height:'max-content', backgroundColor:'#1a202c', display:'flex', justifyContent:'space-around'}}>
        <Box sx={{width:'20%'}} >
        <img width={200} height={200} src={Logo} alt='logo' />
            
        </Box>
        <Stack direction={'column'}>
            <Box className='footer-hover' sx={{display:'flex', flexDirection:'row', color:'white'}}>
                <LocationOnIcon />
                <Typography variant='subtitle2' className='footer-hover' >NED Universtiy of engineering and technology</Typography>
            </Box>
            <Box className='footer-hover' mt={2} sx={{display:'flex', flexDirection:'row', color:'white'}}>
                <EmailIcon />
                <Typography ml={1} variant='subtitle2' >x2crops@.gmail.com</Typography>
            </Box>
        </Stack>
        <Box sx={{color:'white'}} >
            <Stack direction={'column'}>
                <Typography className='footer-hover' variant='subtitle2' onClick={toggleModal}>About US</Typography>
                <Typography mt={1} className='footer-hover' variant='subtitle2' onClick={learnMoreBlogs} >Blogs</Typography>
                <Typography mt={1} className='footer-hover' variant='subtitle2' onClick={learnMoreDashboard}>Analytics</Typography>
                <Typography mt={1} className='footer-hover' variant='subtitle2' onClick={learnMoreAgriculture} >Sites/Locations</Typography>
                <Typography mt={1} onClick={loginClick} className='footer-hover' variant='subtitle2'>Login/Register</Typography>
            </Stack>
        </Box>
    </Box>
    <Box pt={2} pb={2} sx={{height:'max-content', backgroundColor:'#1a202c', textAlign:'center', color:'white', display:'flex', flexDirection:'column', alignItems:'center' ,justifyContent:'center' }}>
        <Box sx={{width:'70%', height:'2px' ,borderTop:'1px solid white'}}></Box>
        Copyright  X2 Crop - All rights reserverd
    </Box>
    <Aboutus open={modal} handleClose={toggleModalOff}/>
    </>
  )
}

export default Footer