import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Image } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'

class Navbar extends React.Component {
  rightNavItems = () => {
    const {
      auth: { user, handleLogout },
      location
    } = this.props;

    if (user) {
      return (
        <Menu.Menu
          position="right"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Link to="/profile">
            <Menu.Item style={{ display: "flex", alignItems: "center" }}>
              <Image size="normal" src={require("../images/user.png")} avatar/>
              <span style={{ color: "white" }}>
                {this.props.auth.user.name}
              </span>
            </Menu.Item>
          </Link>
        </Menu.Menu>
      );
    } else {
      return (
        <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item
              id="login"
              style={{ color: "black" }}
              name="login"
              style={{ color: "black" }}
              active={location.pathname === "/login"}
            />
          </Link>
          <Link to="/register">
            <Menu.Item
              id="register"
              style={{ color: "black" }}
              name="register"
              active={location.pathname === "/register"}
            />
          </Link>
        </Menu.Menu>
      );
    }
  };

  render() {
    return (
      <div>
        <Menu
          pointing
          secondary
          style={{
            backgroundColor: "light grey",
            display: "flex",
            alignItems: "center"
          }}
        >
          <Link to="/">
            <Image
              src={require("../images/utoob.png")}
              size="normal"
              style={{ height: "40px", width: "120px", margin: "15px" }}
            />
          </Link>
          {/* <Link to="/videos">
            <Menu.Item
              name="videos"
              id="videos"
              style={{ color: "grey" }}
              active={pathname === "/videos"}
            /> */}
          {/* </Link> */}
          {this.rightNavItems()}
        </Menu>
      </div>
    );
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Navbar {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}

export default withRouter(ConnectedNavbar);
