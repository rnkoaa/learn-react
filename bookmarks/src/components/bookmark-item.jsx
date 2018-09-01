import React from 'react';
import moment from "moment";

import { ActionTypes } from "../contexts/action-types";

const BookmarkItem = ({ item, dispatch }) => {
    const renderArchive = bookmarkItem => {
        if (bookmarkItem.archived) {
            const dispatched = {
                action: ActionTypes.RESTORE_ARCHIVE_BOOKMARK,
                payload: bookmarkItem
            };
            return <a className="clickable" onClick={() => dispatch(dispatched)}> Restore</a>
        } else {
            const dispatched = {
                action: ActionTypes.ARCHIVE_BOOKMARK,
                payload: bookmarkItem
            };
            return <a className="clickable" onClick={() => dispatch(dispatched)}> Archive</a>
        }
    }

    return (<div className="bookmark-item">
        <div className="row">
            <div className="item-body col-md-12">
                <small
                    className="pull-right text-navy muted">
                    {moment(item.createdAt).fromNow()}
                </small>
                <a className="bookmark-title" href={item.url} target="_blank">{item.name}</a>
                <div className="bookmark-info">
                    <i className="fa fa-archive" aria-hidden="true" />
                    {renderArchive(item)}
                    <i className="fa fa-trash" />
                    <a className="clickable" onClick={() => dispatch({ action: ActionTypes.DELETE_BOOKMARK, payload: item })}> Delete</a>
                </div>
            </div>
        </div>
    </div>);
}

export default BookmarkItem;