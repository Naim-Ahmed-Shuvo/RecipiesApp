import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
class Home extends Component {
  render() {
    return (
      <div>
        
        <Header>
          <Link
            style={{
              width: "300px",
              position: "absolute",
              top: "450px",
              left: "530px",
            }}
            to="/recipes"
            className="btn btn-secondary mt-3 btn-lg"
          >
            Serch recipes
          </Link>
        </Header>
      </div>
    );
  }
}

export default Home;
