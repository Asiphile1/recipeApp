import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';
// import backgroundVideo from './assets/1720428-Uhd 3840 2160 25Fps(1).mp4';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:3002/users?email=${email}&password=${password}`);
      if (response.data.length > 0) {
        navigate('/home');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-video">
        <video className="video-background" autoPlay loop muted>
          <source src='./assets/1720428-Uhd 3840 2160 25Fps(1).mp4' type="video/mp4" />
        </video>
      </div>
      <div className="login-content">
        <h2>Login</h2>
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
        <button onClick={handleLogin}>Login</button>
        <p>
          Don't have an account with us yet? <Link to="/register">Register Here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;



// git lfs track "*.assets"


// git add .gitattributes
// git add <large-file>
// git commit -m "Track large files using Git LFS"



// git push origin maingit 


// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';
// import './LoginPage.css';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     // adding validation checking
//     if (!email || !password) {
//       alert('Please enter both email and password');
//       return;
//     }

//     try {
//       const response = await axios.get(`http://localhost:3001/users?email=${email}&password=${password}`);
//       if (response.data.length > 0) {
        
//         navigate('/home');
//       } else {
//         alert('Invalid email or password');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       alert('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
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
//       <button onClick={handleLogin}>Login</button>
//       <p>
//         Don't have an account with us yet? <Link to="/register">Register Here</Link>
//       </p>
//     </div>
//   );
// };

// export default LoginPage;

















// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';
// import './LoginPage.css';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3001/users?email=${email}&password=${password}`);
//       if (response.data.length > 0) {
//         // Successful login
//         navigate('/home');
//       } else {
//         alert('Invalid email or password');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       alert('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
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
//       <button onClick={handleLogin}>Login</button>
//       <p>
//         Don't have an account with us yet? <Link to="/register">Register Here</Link>
//       </p>
//     </div>
//   );
// };

// export default LoginPage;

















// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import './LoginPage.css';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (username === 'Asie' && password === 'Asie@24') {
//       navigate('/home');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//       <p>
//         Don't have an account with us yet? <Link to="/register">Register Here</Link>
//       </p>
//     </div>
//   );
// };

// export default LoginPage;
