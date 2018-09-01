import React from 'react';
import {
    withRouter
  } from 'react-router-dom'
// import { ActionTypes } from '../contexts/action-types';
import axios from 'axios';

const AddBookmarkItemForm = (props) => {
    const bookmarkReset = {
        websiteName: "",
        websiteUrl: "" 
    };

    const bookmark = {
        websiteName: "",
        websiteUrl: ""
    }
    const handleFormChange = (event) => {
        bookmark[event.target.name] = event.target.value;

    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(bookmark);
       // props.dispatch(ActionTypes.CREATE_BOOKMARK, bookmark);
       axios.post(`http://localhost:3001/bookmarks`, bookmark)
      .then(res => {
        // console.log(res);
        // console.log(res.data);
        props.history.replace("/");  
      })
    
    }

    return (<div className="page-content">
        <div className="content clearfix">
            <div className="wrapper-content animated fadeInRight">
                <div id="forms" className="container mb-5">
                    <div className="section-title col-lg-8 col-md-10 ml-auto mr-auto">
                        <h3 className="mb-4">Add new Bookmark</h3>
                    </div>
                    <div className="col-lg-8 col-md-10 ml-auto mr-auto">
                        <div className="row mb-5">
                            <div className="col-md-12">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group row">
                                        <label htmlFor="websiteName" className="col-sm-2 col-form-label">Name</label>
                                        <div className="col-sm-10">
                                            <input type="text"
                                                name="websiteName"
                                                className="form-control" onChange={handleFormChange}
                                                id="websiteName" placeholder="Name of Website..." />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="websiteUrl" className="col-sm-2 col-form-label">Url</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control"
                                                name="websiteUrl"
                                                id="websiteUrl" onChange={handleFormChange} placeholder="http://example.com" />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

// export default AddBookmarkItemForm;
export default withRouter(AddBookmarkItemForm);