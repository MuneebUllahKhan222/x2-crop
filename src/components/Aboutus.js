import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { borderBottom } from '@mui/system';


function Aboutus({open ,handleClose}) {

//   const handleClickOpen = () => {
//     setOpen(true);
//   };



  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{color:''}}
        PaperProps={{
            style: {
            backgroundColor: '#FFFFFF',
            boxShadow: 'none',
            },
    }}
      >
        <DialogTitle sx={{fontSize:'20px', fontWeight:550, color:'rgb(0,128,0)'}} id="alert-dialog-title">
          X2Crop
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText sx={{fontSize:'15px', fontWeight:500, color:'white'}} >
           Recruitment.ai is an interview assesment website that assess your interview through it AI and help you improve and take your interviews to next level. <br /> <hr /> Developed by, <br /> Muneeb Ullah Khan <br /> Muhammad Usama Shahid <br /> Mujtaba Mateen
          </DialogContentText> */}
          <DialogContentText sx={{fontSize:'15px', fontWeight:500, color:'black'}} >
           X2Crop is a agricultural website that facilitates the farmer by providing informative blogs, analytics and locations using its simple user interface and user experience. <br /> <hr style={{border: "1px solid rgb(0,128,0)"}}/>Team X2CROP, <br /> Muneeb Ullah Khan <br /> Muhammad Usama Shahid <br /> Mujtaba Mateen <br /> Hammad Khan
          </DialogContentText>
           
        </DialogContent>
        <DialogActions>
          <Button sx={{color:'rgb(0,128,0)'}} onClick={handleClose} >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Aboutus