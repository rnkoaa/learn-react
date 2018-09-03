import { Container } from 'unstated';
import { ActionTypes } from "./action-types";
import BookmarkService from '../services/bookmark-service';
import toastr from 'toastr'

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
                this.saveBookmark(payload);
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

                this.showToast("Succesfully updated bookmark.", "success")
            }
        } catch (err) {
            console.log("An error ocurred while trying to update bookmark....", err);
        }
    }
    saveBookmark = async (bookmark) => {
        try {
            const results = await bookmarkService.save(bookmark);
            if (results) {
                const { bookmarks } = this.state;
                const updatedBooks = [...bookmarks];
                updatedBooks.push(results)
                console.log(updatedBooks);
                this.setState({ bookmarks: updatedBooks });

                this.showToast("Succesfully saved bookmark.", "success")
              
            }
        } catch (err) {
            console.log("An error ocurred while trying to update bookmark....", err);
        }
    }

    removeBookmark = async (id) => {
        try {
            const success = await bookmarkService.remove(id);
            if (success) {
                const filteredBookmarks = this.state.bookmarks.filter(item => item.id !== id);
                this.setState({ bookmarks: filteredBookmarks });
                this.showToast("Succesfully removed bookmark.", "success")
            }
        } catch (err) {
            console.log("An error ocurred while trying to delete bookmark....", err);
        }
    };

    showToast = (message, type) => {
        toastr.options = {
            positionClass: 'toast-top-right',
            hideDuration: 300,
            preventDuplicates: true,
            timeOut: 1500
        }
        toastr.clear()
        setTimeout(() => toastr.success(message), 300)
    }
}

export default BookmarkContainer;