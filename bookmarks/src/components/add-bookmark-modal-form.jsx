import React from 'react';

import {
    Modal, ModalHeader, ModalBody, ModalFooter, Button
} from "reactstrap";

const AddBookmarkModalForm = ({
    modalToggle,
    onSubmit,
    cancelForm,
    className
}) => {
    const nameRef = React.createRef();
    const urlRef = React.createRef();
    const bookmark = {
        websiteName: "",
        websiteUrl: ""
    }

    const handleFormChange = e => {

    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        bookmark.websiteName = nameRef.current.value;
        bookmark.websiteUrl = urlRef.current.value;

        urlRef.current.value = "";
        nameRef.current.value = "";

        onSubmit(bookmark);
    }

    return (
        <form>
            <Modal isOpen={modalToggle} toggle={cancelForm} className={className}>
                <ModalHeader toggle={cancelForm}>Add a new Bookmark</ModalHeader>
                <ModalBody>
                    <div className="form-group row">
                        <label htmlFor="websiteName" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text"
                                name="websiteName"
                                ref={nameRef}
                                className="form-control" onChange={handleFormChange}
                                id="websiteName" placeholder="Name of Website..." />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="websiteUrl" className="col-sm-2 col-form-label">Url</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control"
                                name="websiteUrl"
                                id="websiteUrl"
                                ref={urlRef}
                                onChange={handleFormChange} placeholder="http://example.com" />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" type="submit" onClick={ handleFormSubmit} >Save</Button>{' '}
                    <Button color="secondary" onClick={cancelForm}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </form>
    );
}

export default AddBookmarkModalForm;