import React, { useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Handle search functionality here
  };

  return (
    <div className="hero-section">
      <video className="hero-video" autoPlay muted loop>
        <source src="path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="search-overlay">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default HeroSection;













// import React, { useState } from 'react';
// import './HeroSection.css';
// // import hero-video from '../assets/1720428-uhd_3840_2160_25fps.mp4' not a react component 

// const HeroSection = ({ onSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleSearch = () => {
//     if (typeof onSearch === 'function') {
//       onSearch(query);
//     } else {
//       console.error('onSearch prop is not a function');
//     }
//   };

//   return (
//     <div className="hero-section">
//       <video autoPlay muted loop className="hero-video">
//         <source src="../assets/1720428-uhd_3840_2160_25fps.mp4" type="video/mp4" />
//       </video>
//       <div className="search-overlay">
//         <input
//           type="text"
//           placeholder="Search for recipes..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;






// import React, { useState } from 'react';
// import './HeroSection.css';

// const HeroSection = ({ onSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleSearch = () => {
//     onSearch(query);
//   };

//   return (
//     <div className="hero-section">
//       <video autoPlay muted loop className="hero-video">
//         <source src="your-video-url.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="search-overlay">
//         <input
//           type="text"
//           placeholder="Search for recipes..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
