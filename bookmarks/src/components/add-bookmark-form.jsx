import React from 'react';

const AddBookmarkItemForm = (props) => {

   const handleFormChange = (event) => {
        console.log(event.target.value);
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
                                <form>
                                    <div className="form-group row">
                                        <label htmlFor="websiteName" className="col-sm-2 col-form-label">Name</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" onChange={handleFormChange} id="websiteName" placeholder="Name of Website..." />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="url" className="col-sm-2 col-form-label">Url</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="url" onChange={handleFormChange} placeholder="http://example.com" />
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

export default AddBookmarkItemForm;