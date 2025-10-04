import React, { useState, useEffect } from 'react';
import login_icon from '../assets/LoginIcons/login_icon.png'
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Container from '@mui/material/Container';
import './Login.css'
import { Password } from '@mui/icons-material';
import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const navigate = useNavigate();
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textAlign: 'center',
    width: (windowSize.width - 900),
    maxWidth: '1200px',
    minWidth: '300px',
  };
  const [UserName, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  // const [showPassword, setShowPassword] = React.useState(false);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  // const handleMouseUpPassword = (event) => {
  //   event.preventDefault();
  // };
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    };
    if (UserName !="" && Password !="") {
      navigate('/home1');
    }
    setValidated(true);
  }

  return (
    <Container style={containerStyle} className='shadow'>
      <img src={login_icon} className="logo" alt="LoginIcon"></img>
      <Form noValidate validated={validated} onSubmit={handleSubmit} style={styles.form}>
        <div className='row text-center'>
          <TextField id="txtUserName"
            label="User Name"
            onChange={(e) => setEmail(e.target.value)}
            variant="standard"
            value={UserName}
            size="small"
            className='maxWidth-300'
          />
        </div>
        <div className='row text-center'>
          <TextField id="txtPassword"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            variant="standard"
            value={Password}
            size="small"
            className='maxWidth-300'
          />
        </div>
         <div className='row text-center'>
        <Button variant="contained" className='maxWidth-400' onClick={handleSubmit}>Login</Button>
        </div>
      </Form>
    </Container>
  );
};

const styles = {
  container: {
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textAlign: 'center',
    width: '500px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '35px',
    margin: 'auto',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Login;
