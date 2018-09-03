
// Omitted
import API from "../utils/api";

export default class BookmarkService {

    get(id) {
        // console.log(process.env.NODE_ENV)
        // return fakeBookmarkService.getBookmark(id)
    }

    async getAll(options) {
        const archivedReq = options.archived || false;
        const response = await API.get(`bookmarks?archived=${archivedReq}`);
        if (response.status === 200) {
            return Promise.resolve(response.data);
        }
        return Promise.reject("Failed to retrieve data from the server.");
    }

    async update(id, bookmark) {
        const response = await API.put(`bookmarks/${id}`, bookmark)
        if (response.status === 200) {
            return Promise.resolve(true);
        }
        return Promise.reject(`Failed to update the bookmark with id: ${id}`);
    }

    async remove(id) {
        const response = await API.delete(`bookmarks/${id}`)
        if (response.status === 200) {
            return Promise.resolve(true);
        }
        return Promise.reject(`Failed to delete the bookmark with id: ${id}`);
    }

    save(bookmark) {
        // if (!process.env.NODE_ENV) {
        //     return fakeBookmarkService.saveBookmark(bookmark);
        // }
        // // get data from firestore
        // return firestoreBookmarkService.saveBookmark(bookmark)
    }

    filterBookmark(bookmarks, bookmarkItem) {
        // const bookmark = bookmarks.find(m => m.id === bookmarkItem.id);
        // if (bookmark) {
        //     bookmarks.splice(bookmarks.indexOf(bookmark), 1);
        // }
    }
}