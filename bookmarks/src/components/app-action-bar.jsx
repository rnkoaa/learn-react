import React, { Component } from "react";
import AddBookmarkModalForm from "./add-bookmark-modal-form";
import { Subscribe } from "unstated";
import { ActionTypes } from "../contexts/action-types";
import BookmarkContainer from "../contexts/bookmark-container";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

class AppActionBar extends Component {
  state = {
    isOpen: false,
    addBookmarkModalToggle: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  cancelBookmarkCreateForm = () => {
    this.resetModal();
  };

  resetModal = () => {
    const { addBookmarkModalToggle } = this.state;
    this.setState({
      addBookmarkModalToggle: !addBookmarkModalToggle
    });
  }

  handleSubmit = (dispatch, bookmark) => {
    dispatch({ action: ActionTypes.CREATE_BOOKMARK, payload: bookmark });
    this.resetModal();
  }

  render() {
    return (
      <Subscribe to={[BookmarkContainer]}>
        {
          bookmarkContainer => {
            return (<div>
              <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Bookmarks!</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink className="clickable"
                        onClick={() => this.setState({ addBookmarkModalToggle: true })}>
                        Add Bookmark Modal
                      </NavLink>
                      <AddBookmarkModalForm
                        onSubmit={(bookmark) => this.handleSubmit(bookmarkContainer.dispatch, bookmark)}
                        modalToggle={this.state.addBookmarkModalToggle}
                        cancelForm={this.cancelBookmarkCreateForm} />
                    </NavItem>
                    <NavItem>
                      <NavLink href="/archives">Archives</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/">Bookmarks</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
            )
          }}
      </Subscribe>
    );
  }
}
export default AppActionBar;
