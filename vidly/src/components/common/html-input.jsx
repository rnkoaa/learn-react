import React from "react";

const HtmlInput = (props) => {
    return ( 
        <input
              type="email"
              value={props.name}
              onChange={this.handleChange}
              className="form-control"
              id={props.name}
              name={props.name}
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
     );
}
 
export default HtmlInput;