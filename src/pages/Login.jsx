// src/pages/Login.jsx
import Button from '../components/Button'
import React, { useState, useEffect } from 'react';
import login_icon from '../assets/LoginIcons/login_icon.png'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Login.css'
const Login = () => {
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
    width: (windowSize.width-900),
    maxWidth:'1200px',
    minWidth:'300px',
  };
  const [UserName, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
  };
  setValidated(true);
  return (
    <div style={containerStyle}>
        <img src={login_icon} className="logo" alt="LoginIcon"></img>
      <Form noValidate validated={validated} onSubmit={handleSubmit} style={styles.form}>
        <div className='row'>
            <div className='col-6 col-sm-3 col-md-3 col-xl-3 text-align-center'>
                <label className='form-label-text'>User Name :</label>
            </div>
           <div className='col-6 col-sm-8 col-md-8 col-xl-8'>
                {/* <input
                  type="text"
                  placeholder="User Name"
                  value={UserName}
                  onChange={(e) => setEmail(e.target.value)}
                  className='form-control'
                  required
                /> */}
                <Form.Control
                    required
                    type="text"
                    placeholder="User Name"
                    value={UserName}
                    onChange={(e) => setEmail(e.target.value)}
                />
           </div>
        </div>
        <div className='row'>
            <div className='col-6 col-sm-3 col-md-3 col-xl-3 text-align-center'>
                <label className='form-label-text'>Password :</label>
            </div>
            <div className='col-6 col-sm-8 col-md-8 col-xl-8'>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='form-control'
                  required
                />
            </div>
        </div>
        <Button label="Login" onClick={handleSubmit} />
      </Form>
    </div>
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
}
export default Login;
