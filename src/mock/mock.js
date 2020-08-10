import Mock from 'mockjs'
Mock.mock('/api/user/login', {
    "status": 0,
    "data": {
        "pageNum": 1,
        "pageSize": 10,
        "size": 1,
        "orderBy": null,
        "startRow": 1,
        "endRow": 1,
        "total": 1,
        "pages": 1,
        "list": [{
            "id": 1,
            "categoryId": 3,
            "name": "iphone7",
            "subtitle": "双十一促销",
            "mainImage": "mainimage.jpg",
            "price": 7199.22
        }],
        "firstPage": 1,
        "prePage": 0,
        "nextPage": 0,
        "lastPage": 1,
        "isFirstPage": true,
        "isLastPage": true,
        "hasPreviousPage": false,
        "hasNextPage": false,
        "navigatePages": 8,
        "navigatepageNums": [
            1
        ]
    }
})