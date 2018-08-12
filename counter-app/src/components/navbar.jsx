import React, { Component } from 'react';

// stateless functional component
// const NavBar = (props) => {
//     return (
//         <nav className="navbar navbar-light bg-light">
//           <a className="navbar-brand" href="">
//             Navbar <span className="badge badge-pill badge-secondary">{props.counters.length}</span>
//           </a>
//         </nav>
//       );
// }

// stateless functional component with destructured arguments
const NavBar = ({counters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="">
            Navbar <span className="badge badge-pill badge-secondary">{counters.length}</span>
          </a>
        </nav>
      );
}
export default NavBar;
