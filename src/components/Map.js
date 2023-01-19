import { Card, CardActionArea, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useTitle, useTitleContainer } from './GeneralComponents'
import MainNavbar from './MainNavbar';
import Sidebar from './Sidebar';
import blog1 from '../assets/farm1.jpeg'
import fao from '../assets/FAO.jpg'
import office2 from '../assets/office2.jpg'
import office3 from '../assets/office3.jpg'
import office4 from '../assets/office4.jpg'
import office from '../assets/office.jpg'
import '../App.css'







function Map() {

  const AgriculturalOffices = [
    {name:'Food and Agriculture Organization Of The United Nations (FAO)'},
    {name:'Pakistan Agricultural Research Council (PARC)'},
    {name:  "Ministry Of National Food Security and Research (MNFSR)"},
    {name: "Agricultural Department"},
    {name:'Agriculture And Cooperatives'}
  ]

    const Title = useTitle();
    const TitleContainer = useTitleContainer();
  return (
    <>
    <MainNavbar />
    <Box sx={{ display: 'flex', width: '100%' }} >
        <Sidebar />
        <Box sx={{ width: 'calc(100% - 62px)', maxHeight: "calc(100vh - 55px)" }}>
            <TitleContainer style={{ marginBottom: "30px" }}>
                <Title>Suitable sites and locations</Title>
            </TitleContainer>

        <Box p={0} sx={{display:'flex',height:'80%' }}>
        <Box  pl={3} pr={3} sx={{width:'25%', overflowY:'scroll', overflowX:'hidden' }}>
          <Typography mb={3} variant='h5' sx={{borderBottom:'1px solid black'}} >Agricultural Offices</Typography>
          <Box sx={{display:'flex', flexDirection:'column', width:'100%', height:'100%'}}>

          <a className='links'  target="_blank" href="https://www.fao.org/pakistan/our-office/en/">
          <Box mb={5}>
            <Card sx={{}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image={fao}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" fontWeight={550} component="div">
                        Food and Agriculture Organization Of The United Nations (FAO)
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </Box>
            </a>

            <a className='links'  target="_blank" href="http://www.parc.gov.pk/">
            <Box mb={5}>
            <Card sx={{}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image={office2}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" fontWeight={550} component="div">
                        Pakistan Agricultural Research Council (PARC)
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </Box>
            </a>

            <a className='links'  target="_blank" href="http://www.mnfsr.gov.pk/">
            <Box mb={4}>
            <Card sx={{}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image={office3}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" fontWeight={550} component="div">
                        Ministry Of National Food Security and Research (MNFSR)
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </Box>
            </a>

            <a className='links'  target="_blank" href="https://www.agripunjab.gov.pk/">
            <Box mb={4}>
            <Card sx={{}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image={office4}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" fontWeight={550} component="div">
                        Agriculture and department
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </Box>
            </a>

            <a className='links'  target="_blank" href="https://balochistan.gov.pk/agri/">
            <Box mb={4}>
            <Card sx={{}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image={office}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" fontWeight={550} component="div">
                        Agriculture and Cooperative
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </Box>
            </a>
          </Box>
        </Box>
        <Box sx={{width:'75%', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <iframe width="900" height="450" src="https://datastudio.google.com/embed/reporting/dc1be72b-2a31-45cc-b2f3-c2d221f7a5c8/page/MNkCD"  style={{border:"0"}}></iframe>
        </Box>
        
        </Box>




        </Box>
        </Box>
    </>
  )
}

export default Map