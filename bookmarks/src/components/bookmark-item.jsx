import React from 'react';

const BookmarkItem = () => {
    return (<div class="bookmark-item">
        <div class="row">
            <div class="item-body col-md-12">
                <small class="pull-right text-navy muted">5h ago</small>
                <div class="bookmark-actions">
                    <a href="#">
                        <i class="fa fa-chevron-up"> </i>
                    </a>
                    <div>32</div>
                    <a href="#">
                        <i class="fa fa-chevron-down"> </i>
                    </a>
                </div>
                <a href="#" class="bookmark-title">
                    It is a long established fact that a reader will be distracted
</a>
                <div class="bookmark-info">
                    <i class="fa fa-comments-o"></i> <a href="#">Comments (32)</a>
                    <i class="fa fa-clock-o"></i> <a href="#">1 Hours ago</a>
                    <i class="fa fa-user"></i> <a href="#">Andrew Williams</a>
                </div>
            </div>
        </div>
    </div>);
}

export default BookmarkItem;