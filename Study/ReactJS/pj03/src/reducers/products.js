const initialState = [
    {
        id: 1,
        name: 'Iphone 20',
        img: 'https://image.thanhnien.vn/768/uploaded/nthanhluan/2020_04_16/iphone-12-render-phone-arena-2_quuh.jpg',
        des: 'Sản phẩm do Apple sản xuất',
        price: 200,
        inventory: 10,
        rating: 3
    },
    {
        id: 2,
        name: 'Samsung 20',
        img: 'https://cdn.tgdd.vn/Files/2020/12/01/1310754/galaxy-s21_800x450.jpg',
        des: 'Sản phẩm do Samsung sản xuất',
        price: 300,
        inventory: 20,
        rating: 4
    },
    {
        id: 3,
        name: 'Realme 20',
        img: 'https://photo-cms-sggp.zadn.vn/Uploaded/2021/yfsgf/2020_09_18/realme-7-16_sjuc.jpg',
        des: 'Sản phẩm do Realme sản xuất',
        price: 400,
        inventory: 30,
        rating: 5
    },
];


const productReducer = (state = initialState, action) => {
    switch (action.type) {
        


        default:
            return state;
    }
}

export default productReducer;