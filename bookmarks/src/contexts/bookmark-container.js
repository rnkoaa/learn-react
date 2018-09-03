import { Container } from 'unstated';
import axios from "axios";
import { ActionTypes } from "./action-types";
import BookmarkService from '../services/bookmark-service';

const bookmarkService = new BookmarkService();

class BookmarkContainer extends Container {
    state = {
        bookmarks: [],
        bookmarksLoaded: false,
        bookmarksLoading: false,
        archived: false,
        currentPageTitle: "",
    }

    dispatch = ({ action, payload }) => {
        switch (action) {
            case ActionTypes.DELETE_BOOKMARK:
                this.removeBookmark(payload.id);
                break;
            case ActionTypes.ARCHIVE_BOOKMARK:
                payload.archived = true;
                this.updateBookmark(payload.id, payload);
                break;
            case ActionTypes.RESTORE_ARCHIVE_BOOKMARK:
                payload.archived = false;
                this.updateBookmark(payload.id, payload);
                break;
            case ActionTypes.CREATE_BOOKMARK:
                console.log("Creating new bookmark: ", payload);
                break;
            case ActionTypes.LOAD_BOOKMARKS:
                payload = payload || {};
                this.loadBookmarks(payload.archived);
                break;
            default:
                console.log("Unknown Action to handle...", action);
                break;
        }
    }

    loadBookmarks = async (archivedReq) => {
        try {
            const results = await bookmarkService.getAll({ archived: archivedReq });
            this.setState({
                bookmarks: results,
                bookmarksLoaded: true,
                archived: archivedReq,
            });
        } catch (err) {
            console.log("An error ocurred while trying to retrieve bookmarks....", err);
        }
    }
    updateBookmark = async (id, bookmark) => {
        try {
            const success = await bookmarkService.update(id, bookmark);
            if (success) {
                const filteredBookmarks = this.state.bookmarks.filter(item => item.id !== bookmark.id);
                this.setState({ bookmarks: filteredBookmarks });
            }
        } catch (err) {
            console.log("An error ocurred while trying to update bookmark....", err);
        }
    }


    addBookmark = bookmark => {
        // const newTodo = { id: this.id++, marked: false, description: todo };
        // this.setState({
        //     todos: [...this.state.todos, newTodo]
        // });
    };

    removeBookmark = async (id) => {
        try {
            const success = await bookmarkService.remove(id);
            if (success) {
                const filteredBookmarks = this.state.bookmarks.filter(item => item.id !== id);
                this.setState({ bookmarks: filteredBookmarks });
            }
        } catch (err) {
            console.log("An error ocurred while trying to delete bookmark....", err);
        }
    };
}

export default BookmarkContainer;