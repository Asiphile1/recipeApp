import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RegistrationPage.css';
// import backgroundImage from '../assets/cover3.jpg'; 


const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    try {
      await axios.post('http://localhost:3002/users', { email, password });
      alert('Registration successful');
      navigate('/login');
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    
<div className="wholePage-container">
    <div className="picture-container">
      <div className="register-container">
        <h2>Register</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
    </div>
  );
};

export default RegistrationPage;








// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'; // Importing axios for making requests
// import './RegistrationPage.css';


// const RegistrationPage = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState(''); 
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = async () => {
//     if (username && email && password) { // Include email in validation
//       try {
//         // Check if the email already exists
//         const response = await axios.get(`http://localhost:3001/users?email=${email}`);
//         if (response.data.length > 0) {
//           alert('Email is already registered');
//         } else {
//           // Save the new user to the JSON server
//           await axios.post('http://localhost:3001/users', { username, email, password });
//           alert('Registration successful');
//           navigate('/');
//         }
//       } catch (error) {
//         console.error('Error during registration:', error);
//         alert('An error occurred. Please try again.');
//       }
//     } else {
//       alert('Please fill in all fields');
//     }
//   };

//   return (
//     <div className="registration-container">
//       <h2>Register</h2>
//       <input
//         type="text"
//         id="username"
//         name="username"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="email"
//         id="email"
//         name="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         id="password"
//         name="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleRegister}>Register</button>
//       <button className="back-button" onClick={() => navigate('/')}>
//         Back to Login
//       </button>
//     </div>
//   );
// };

// export default RegistrationPage;










// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './RegistrationPage.css';

// const RegistrationPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = () => {
//     if (username && password) {
//       alert('Registration successful');
//       // Save the user's credentials to the JSON Server or LocalStorage
//       // Perform any other registration logic here
//       navigate('/');
//     } else {
//       alert('Please fill in all fields');
//     }
//   };

//   return (
//     <div className="registration-container">
//       <h2>Register</h2>
//       <input
//         type="text"
//         id="username" // Unique id attribute
//         name="username" // Unique name attribute
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         id="password" // Unique id attribute
//         name="password" // Unique name attribute
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleRegister}>Register</button>
//       <button className="back-button" onClick={() => navigate('/')}>
//         Back to Login
//       </button>
//     </div>
//   );
// };

// export default RegistrationPage;


















// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './RegistrationPage.css';


// const RegistrationPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();


// // const RegistrationPage = () => {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');
// //   const navigate = useNavigate();

// const handleRegister = async () => {
//   if (email && password) {
//     try {
//       // Check if the email already exists
//       const response = await axios.get(`http://localhost:3001/users?email=${email}`);
//       if (response.data.length > 0) {
//         alert('Email already registered. Please use a different email.');
//       } else {
//         // Register the new user
//         await axios.post('http://localhost:3001/users', { email, password });
//         alert('Registration successful');
//         navigate('/');
//       }
//     } catch (error) {
//       console.error('Error registering user:', error);
//       alert('An error occurred. Please try again.');
//     }
//   } else {
//     alert('Please fill in all fields');
//   }


//   // const handleRegister = () => {
//   //   if (username && password) {
//   //     alert('Registration successful');
//   //     navigate('/');
//   //   } else {
//   //     alert('Please fill in all fields');
//   //   }
//   // };

//   return (
//     <div className="registration-container">
//       <h2>Register</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleRegister}>Register</button>
//       <button className="back-button" onClick={() => navigate('/')}>
//         Back to Login
//       </button>
//     </div>
//   );
// };

// export default RegistrationPage;
