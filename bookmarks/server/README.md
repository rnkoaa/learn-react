# Readme

Start json-server

    ```sh
    json-server --watch db.json --port 3001
    ```

1. Get All bookmarks with pagination

    ```sh
    http get :3001/bookmarks\?_limit=2\&_page=2
    ```

2. Get All non archived bookmarks with pagination

    ```sh
    http get :3001/bookmarks\?archived=false
    ```

3. Get All archived bookmarks with pagination

    ```sh
    http get :3001/bookmarks\?archived=true
    ```

4. Get Bookmark with id:
    ```sh
    http get :3001/bookmarks/1
    ```