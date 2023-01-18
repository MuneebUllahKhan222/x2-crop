
import { useTitle, useTitleContainer } from "./GeneralComponents";
import styled from "styled-components";
import { Box, MenuItem, Paper, Select, Typography } from "@mui/material";
import Chart from 'react-apexcharts'
import MainNavbar from "./MainNavbar";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";




const Dashboard = () => {

    const Title = useTitle();
    const TitleContainer = useTitleContainer();
const [production, setproduction] = useState(null)
const [productionIndex, setproductionIndex] = useState(null)
const [productionValues, setproductionValues] = useState(null)
const [consumptionIndex, setconsumptionIndex] = useState(null)
const [consumptionValues, setconsumptionValues] = useState(null)
const [timberIndex, settimberIndex] = useState(null)
const [timberValues, settimberValues] = useState(null)
    
    // console.log(data);
     useEffect(() => {
    //    const response =data()
    //    console.log(response);
    // const data = async () => {
    //     axios.get('http://127.0.0.1:8000/production')
    // }
    
    axios.get('http://127.0.0.1:8000/production')
    .then((res) => {
        console.log(res);
        setproductionIndex(res?.data?.Index)
        const rounded = res?.data?.Values.map(value => value.toFixed(2))
        console.log(rounded, 'rounded');
        setproductionValues(rounded)
        setproduction(res?.data)
    }).catch(e => {
        console.log(e);
    })
     }, [])


     useEffect(() => {
        axios.get('http://127.0.0.1:8000/consumption')
    .then((res) => {
        console.log(res);
        setconsumptionIndex(res?.data?.Index)
        const rounded = res?.data?.Values.map(value => value.toFixed(2))
        console.log(rounded, 'rounded');
        setconsumptionValues(rounded)
        setproduction(res?.data)
    }).catch(e => {
        console.log(e);
    })
     }, [])


     useEffect(() => {
        axios.get('http://127.0.0.1:8000/consumption')
    .then((res) => {
        console.log(res);
        setconsumptionIndex(res?.data?.Index)
        const rounded = res?.data?.Values.map(value => value.toFixed(2))
        console.log(rounded, 'rounded');
        setconsumptionValues(rounded)
        setproduction(res?.data)
    }).catch(e => {
        console.log(e);
    })
     }, [])

     useEffect(() => {
        axios.get('http://127.0.0.1:8000/timber')
    .then((res) => {
        console.log(res);
        settimberIndex(res?.data?.Index)
        const rounded = res?.data?.Values.map(value => value.toFixed(2))
        console.log(rounded, 'rounded');
        settimberValues(rounded)
        setproduction(res?.data)
    }).catch(e => {
        console.log(e);
    })
     }, [])
     
     console.log(timberIndex);
     console.log(timberValues);
     console.log(production);
     
    const chartOptions = {
        options: {
            chart: {
                id: "basic-bar"
            },
            // fill:{
            //     colors:['']
            // },
            // markers:{
            //     colors:['red']
            // },
            colors: ["rgb(0, 128, 0)", 'rgb(120, 236, 120)', 'rgb(178, 226, 178)'],
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                // categories: ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            // categories: production?.Index 
            categories: productionIndex 
            // categories: [...production?.Index]
            }
        },
        series: [
            {
                name: "series-1",
                // data:production?.Values
                data:productionValues
                // data: [30, 40, 45, 50, 49, 60, 70, 91, 65, 40, 45, 62]
            }
        ]
    }


    const chartOptionsConsumption = {
        options: {
            chart: {
                id: "basic-bar"
            },
            // fill:{
            //     colors:['']
            // },
            // markers:{
            //     colors:['red']
            // },
            colors: ["rgb(0, 128, 0)", 'rgb(120, 236, 120)', 'rgb(178, 226, 178)'],
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                // categories: ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            // categories: production?.Index 
            categories: consumptionIndex 
            // categories: [...production?.Index]
            }
        },
        series: [
            {
                name: "series-1",
                // data:production?.Values
                data:consumptionValues
                // data: [30, 40, 45, 50, 49, 60, 70, 91, 65, 40, 45, 62]
            }
        ]
    }



    const options1 = {
        chart: {
            height: 280,
            type: "radialBar",

        },
        series: [62, 89, 37],
        colors: ["rgb(0, 128, 0)", 'rgb(120, 236, 120)', 'rgb(178, 226, 178)'],
        // fill:{
        //     colors:['red', 'green', 'blue'],
        // },
        plotOptions: {

            radialBar: {
                hollow: {
                    // margin: 15,
                    size: "60%"
                },
                dataLabels: {
                    total: {
                        show: false,
                        label: 'TOTAL'
                    }
                }
            }
        },
        labels: ['Sindh', 'Kpk', 'Punjab']
    };


    const barOptions = {
        chart: {
            // width:'',
            type: 'bar',
            stacked: false,
            // stackType: "99%",
        },
        grid: {
            show: false,
        },
        yaxis: {
            show: false
        },
        xaxis: {
            position: 'top'
        },
        plotOptions: {
            bar: {
                columnWidth: '45%',
                borderRadius: 10,
                borderRadiusApplication: 'end',
            },
        },
        legend: {
            show: false,
        },
        // rgb(120, 236, 120)
        series: [{
            data:
            [{
                        x: 'Jan',
                        y: 10,
                        fillColor: 'rgb(120, 236, 120)',
                    }, {
                        x: 'Feb',
                        y: 18,
                        fillColor: 'rgb(120, 236, 120)',
                    }, {
                        x: 'Mar',
                        y: 9,
                        fillColor: 'rgb(120, 236, 120)',
                    }, {
                        x: 'Apr',
                        y: 13,
                        fillColor: 'rgb(120, 236, 120)',
                    }
                        , {
                        x: 'May',
                        y: 13,
                        fillColor: 'rgb(120, 236, 120)',
                    }
                        , {
                        x: 'Jun',
                        y: 13,
                        fillColor: 'rgb(120, 236, 120)',
                    }
                        , {
                        x: 'Jul',
                        y: 13,
                        fillColor: 'rgb(120, 236, 120)',
                    }, {
                        x: 'Aug',
                        y: 13,
                        fillColor: 'rgb(120, 236, 120)',
                    }, {
                        x: 'Sep',
                        y: 13,
                        fillColor: 'rgb(120, 236, 120)',
                    }, {
                        x: 'Oct',
                        y: 13,
                        fillColor: 'rgb(120, 236, 120)',
                    }, {
                        x: 'Nov',
                        y: 13,
                        fillColor: 'rgb(120, 236, 120)',
                    }, {
                        x: 'Dec',
                        y: 13,
                        fillColor: 'rgb(120, 236, 120)',
                    }
        
                    ]
            //  [{
            //     x: timberIndex[0],
            //     y: timberValues[0],
            //     fillColor: 'rgb(120, 236, 120)'
            // }, {
            //     x: timberIndex[1],
            //     y: timberValues[1],
            //     fillColor: 'rgb(0, 128, 0)'
            // }, {
            //     x: timberIndex[2],
            //     y: timberValues[2],
            //     fillColor: 'rgb(0, 128, 0)'
            // }, {
            //     x: timberIndex[3],
            //     y: timberValues[3],
            //     fillColor: 'rgb(0, 128, 0)'
            // }
            //     , {
            //     x: timberIndex[4],
            //     y: timberValues[4],
            //     fillColor: 'rgb(0, 128, 0)'
            // }
            //     , {
            //     x: timberIndex[5],
            //     y: timberValues[5],
            //     fillColor: 'rgb(0, 128, 0)'
            // }
            //     , {
            //     x: timberIndex[6],
            //     y: timberValues[6],
            //     fillColor: 'rgb(0, 128, 0)'
            // }, {
            //     x: timberIndex[7],
            //     y: timberValues[7],
            //     fillColor: 'rgb(0, 128, 0)'
            // }, {
            //     x: timberIndex[8],
            //     y: timberValues[8],
            //     fillColor: 'rgb(0, 128, 0)'
            // }

            // ]
        },
        // {
        //     data: [{
        //         x: 'Jan',
        //         y: 10,
        //         fillColor: 'rgb(120, 236, 120)',
        //     }, {
        //         x: 'Feb',
        //         y: 18,
        //         fillColor: 'rgb(120, 236, 120)',
        //     }, {
        //         x: 'Mar',
        //         y: 9,
        //         fillColor: 'rgb(120, 236, 120)',
        //     }, {
        //         x: 'Apr',
        //         y: 13,
        //         fillColor: 'rgb(120, 236, 120)',
        //     }
        //         , {
        //         x: 'May',
        //         y: 13,
        //         fillColor: 'rgb(120, 236, 120)',
        //     }
        //         , {
        //         x: 'Jun',
        //         y: 13,
        //         fillColor: 'rgb(120, 236, 120)',
        //     }
        //         , {
        //         x: 'Jul',
        //         y: 13,
        //         fillColor: 'rgb(120, 236, 120)',
        //     }, {
        //         x: 'Aug',
        //         y: 13,
        //         fillColor: 'rgb(120, 236, 120)',
        //     }, {
        //         x: 'Sep',
        //         y: 13,
        //         fillColor: 'rgb(120, 236, 120)',
        //     }, {
        //         x: 'Oct',
        //         y: 13,
        //         fillColor: 'rgb(120, 236, 120)',
        //     }, {
        //         x: 'Nov',
        //         y: 13,
        //         fillColor: 'rgb(120, 236, 120)',
        //     }, {
        //         x: 'Dec',
        //         y: 13,
        //         fillColor: 'rgb(120, 236, 120)',
        //     }

        //     ]
        // }, {
        //     data: [{
        //         x: 'Jan',
        //         y: 10,
        //         fillColor: '#E6EDF9'
        //     }, {
        //         x: 'Feb',
        //         y: 18,
        //         fillColor: '#E6EDF9'
        //     }, {
        //         x: 'Mar',
        //         y: 2,
        //         fillColor: '#E6EDF9'
        //     }, {
        //         x: 'Apr',
        //         y: 13,
        //         fillColor: '#E6EDF9'
        //     }
        //         , {
        //         x: 'May',
        //         y: 13,
        //         fillColor: '#E6EDF9'
        //     }
        //         , {
        //         x: 'Jun',
        //         y: 13,
        //         fillColor: '#E6EDF9'
        //     }
        //         , {
        //         x: 'Jul',
        //         y: 13,
        //         fillColor: '#E6EDF9'
        //     }, {
        //         x: 'Aug',
        //         y: 13,
        //         fillColor: '#E6EDF9'
        //     }, {
        //         x: 'Sep',
        //         y: 13,
        //         fillColor: '#E6EDF9'
        //     }, {
        //         x: 'Oct',
        //         y: 13,
        //         fillColor: '#E6EDF9'
        //     }, {
        //         x: 'Nov',
        //         y: 13,
        //         fillColor: '#E6EDF9'
        //     }, {
        //         x: 'Dec',
        //         y: 13,
        //         fillColor: '#E6EDF9'
        //     }

            ]
        // }]
    }


    return (
        <>
        <Box sx={{ width: '100%',display: "flex", flexDirection: "column"}} >
        <MainNavbar />
        <Box sx={{display:'flex'}} >
            <Sidebar/>
            <Box sx={{ width: "calc(100% - 55px)", display: { sm: 'block', xs: 'flex' }, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <TitleContainer style={{ marginBottom: "30px" }}>
                    <Title>Dashboard</Title>
                </TitleContainer>



                {/* Component from here */}

                <Box mb={7} sx={{ width: '100%', height: '50%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>

            <Box sx={{ width: '50%', height: 'max-content', display: 'flex', flexDirection: 'column' }} >
                <Box mb={2} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '20px', fontWeight: '700' }} >Total Users on platform</Typography>
                    <Typography sx={{ fontSize: '18px', fontWeight: '550' }} >Year</Typography>
                </Box>
                <Paper elevation={2} sx={{ width: '100%', margin: '0 auto', padding: '20px', backgroundColor: '#FBFBFB', borderRadius: '10px' }}>
                    <Chart
                        options={chartOptions.options}
                        series={chartOptions.series}
                        type="area"
                        width="90%"
                        height='290'
                    />
                </Paper>
            </Box>

                  <Box sx={{ width: '40%', height: 'max-content', display: 'flex', flexDirection: 'column' }}>
                      <Box mb={2} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography sx={{ fontSize: '20px', fontWeight: '700' }} >Users Stats </Typography>
                          <Typography sx={{ fontSize: '18px', fontWeight: '550' }} >Year</Typography>

                      </Box>
                      <Paper elevation={2} sx={{ width: '100%', margin: '0 auto', padding: '20px', backgroundColor: '#FBFBFB', borderRadius: '10px', display:'flex', justifyContent:'flex-start' }}>
                          <Chart
                              options={options1}
                              series={options1.series}
                              type="radialBar"
                              width="90%"
                              height='320'
                          />
                          <Box ml={8} mt={4} sx={{display:'flex', flexDirection:'column', alignItems:'space-around', justifyContent:'center'}}>
                              <Box sx={{display:'flex', flexDirection:'column'}}>
                                  <Typography sx={{fontWeight:'550', fontSize:'15px'}} >Sindh</Typography>
                                  <Typography sx={{fontWeight:'650', fontSize:'19px'}} >8085</Typography>
                              </Box>
                              <Box sx={{display:'flex', flexDirection:'column'}}>
                              <Typography sx={{fontWeight:'550', fontSize:'15px'}} >KPK</Typography>
                                  <Typography sx={{fontWeight:'650', fontSize:'19px'}} >2000</Typography>
                              </Box>
                              <Box sx={{display:'flex', flexDirection:'column'}}>
                              <Typography sx={{fontWeight:'550', fontSize:'15px'}} >Punjab</Typography>
                                  <Typography sx={{fontWeight:'650', fontSize:'19px'}} >3000</Typography>
                              </Box>
                          </Box>
                      </Paper>
                  </Box>

                  </Box>


                  <Box mb={3} sx={{ width: '100%', height: '50%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <Paper elevation={2} sx={{ width: '50%', margin: '0 auto', padding: '20px', backgroundColor: '#FBFBFB', borderRadius: '10px', display: 'flex', flexDirection: 'column' }}>
                        <Box mb={2} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography sx={{ fontSize: '20px', fontWeight: '700' }} >Growth</Typography>
                            <Typography sx={{ fontSize: '15px', fontWeight: '550' }} >This Year</Typography>
                        </Box>
                        <Chart
                            options={barOptions}
                            series={barOptions.series}
                            type="bar"
                            width="100%"
                            height='290'
                        />
                    </Paper>

                    <Paper elevation={2} sx={{ width: '40%', margin: '0 auto', padding: '20px', backgroundColor: '#FBFBFB', borderRadius: '10px', display: 'flex', flexDirection: 'column' }}>
                        <Box mb={2} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography sx={{ fontSize: '20px', fontWeight: '700' }} >Users</Typography>
                            <Select value={'year'}>
                                <MenuItem value={'year'} >Year</MenuItem>
                                <MenuItem value={'month'} >Month</MenuItem>
                            </Select>
                        </Box>
                        <Chart
                            options={chartOptionsConsumption.options}
                            series={chartOptionsConsumption.series}
                            type="area"
                            width="90%"
                            height='290'
                        />
                    </Paper>
                </Box>

                <Box mb={3} sx={{ width: '100%', height: '50%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <Box sx={{ width: '50%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Paper p={2} elevation={2} sx={{ width: '20%', height: '200px', margin: '0 auto', padding: '20px', backgroundColor: '#FBFBFB', borderRadius: '10px', display: 'flex', flexDirection: 'column' }}>
                            <Box mb={3} sx={{ height: '50px', width: '50px', backgroundColor: 'rgb(120, 236, 120)', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            </Box>
                            <Typography sx={{fontSize:'14px',fontWeight:'550' }}>Users</Typography>
                            <Typography mt={1} sx={{fontSize:'18px',fontWeight:'650' }}>72.6K</Typography>
                            <Typography mt={1} sx={{fontSize:'14px',fontWeight:'500' }}>+25%</Typography>
                        </Paper>
                        <Paper p={2} elevation={2} sx={{ width: '20%', height: '200px', margin: '0 auto', padding: '20px', backgroundColor: '#FBFBFB', borderRadius: '10px', display: 'flex', flexDirection: 'column' }}>
                            <Box mb={3} sx={{ height: '50px', width: '50px', backgroundColor: 'rgb(120, 236, 120)', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            </Box>
                            <Typography sx={{fontSize:'14px',fontWeight:'550' }}>Bounce Rate</Typography>
                            <Typography mt={1} sx={{fontSize:'18px',fontWeight:'650' }}>15.5K</Typography>
                            <Typography mt={1}  sx={{fontSize:'14px',fontWeight:'500' }}>+35%</Typography>
                        </Paper>
                        <Paper p={2} elevation={2} sx={{ width: '20%', height: '200px', margin: '0 auto', padding: '20px', backgroundColor: '#FBFBFB', borderRadius: '10px', display: 'flex', flexDirection: 'column' }}>
                            <Box mb={3} sx={{ height: '50px', width: '50px', backgroundColor: 'rgb(120, 236, 120)', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            </Box>
                            <Typography sx={{fontSize:'14px',fontWeight:'550' }}>Active</Typography>
                            <Typography mt={1} sx={{fontSize:'18px',fontWeight:'650' }}>10.6K</Typography>
                            <Typography mt={1} sx={{fontSize:'14px',fontWeight:'500' }}>-13%</Typography>
                        </Paper>
                        <Paper p={2} elevation={2} sx={{ width: '20%', height: '200px', margin: '0 auto', padding: '20px', backgroundColor: '#FBFBFB', borderRadius: '10px', display: 'flex', flexDirection: 'column' }}>
                            <Box mb={3} sx={{ height: '50px', width: '50px', backgroundColor: 'rgb(120, 236, 120)', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            </Box>
                            <Typography sx={{fontSize:'14px',fontWeight:'550' }}>Returning</Typography>
                            <Typography mt={1} sx={{fontSize:'18px',fontWeight:'650' }}>12.3K</Typography>
                            <Typography mt={1} sx={{fontSize:'14px',fontWeight:'500' }}>+13%</Typography>
                        </Paper>

                    </Box>

                    <Box sx={{ width: '40%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                    </Box>

                </Box>

            </Box>
            
            </Box>
            </Box>
            
            </>
    );
}

export default Dashboard;



// data: 
//             [{
//                 x: timberIndex[0],
//                 y: 10,
//                 fillColor: 'rgb(120, 236, 120)'
//             }, {
//                 x: timberIndex[1],
//                 y: 18,
//                 fillColor: 'rgb(0, 128, 0)'
//             }, {
//                 x: timberIndex[2],
//                 y: 5,
//                 fillColor: 'rgb(0, 128, 0)'
//             }, {
//                 x: timberIndex[3],
//                 y: 13,
//                 fillColor: 'rgb(0, 128, 0)'
//             }
//                 , {
//                 x: timberIndex[4],
//                 y: 13,
//                 fillColor: 'rgb(0, 128, 0)'
//             }
//                 , {
//                 x: timberIndex[5],
//                 y: 13,
//                 fillColor: 'rgb(0, 128, 0)'
//             }
//                 , {
//                 x: timberIndex[6],
//                 y: 13,
//                 fillColor: 'rgb(0, 128, 0)'
//             }, {
//                 x: timberIndex[7],
//                 y: 13,
//                 fillColor: 'rgb(0, 128, 0)'
//             }, {
//                 x: timberIndex[8],
//                 y: 13,
//                 fillColor: 'rgb(0, 128, 0)'
//             }, {
//                 x: timberIndex[9],
//                 y: 13,
//                 fillColor: 'rgb(0, 128, 0)'
//             }

//             ]
//         },

