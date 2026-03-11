const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { title: 'Flower Shop' });
});

app.get('/products', (req, res) => {
    const products = [
        { name: 'Hoa Hong Do', price: '200.000 VND', image: '/images/templatemo_image_01.jpg', desc: 'Bo hoa hong do tuoi dep' },
        { name: 'Hoa Tulip', price: '250.000 VND', image: '/images/templatemo_image_02.jpg', desc: 'Hoa tulip nhap khau Ha Lan' },
        { name: 'Hoa Huong Duong', price: '150.000 VND', image: '/images/templatemo_image_03.jpg', desc: 'Hoa huong duong tuoi sang' },
        { name: 'Hoa Lan', price: '350.000 VND', image: '/images/templatemo_image_04.jpg', desc: 'Hoa lan ho diep sang trong' },
        { name: 'Hoa Cuc', price: '120.000 VND', image: '/images/templatemo_image_01.jpg', desc: 'Hoa cuc vang tuoi dep' },
    ];
    res.render('products', { title: 'San Pham - Flower Shop', products: products });
});

app.get('/about', (req, res) => {
    const info = {
        name: 'Flower Shop',
        established: 2020,
        description: 'Cua hang hoa tuoi uy tin hang dau TP.HCM',
        address: '123 Nguyen Hue, Quan 1, TP.HCM',
        phone: '0901234567'
    };
    res.render('about', { title: 'Gioi Thieu - Flower Shop', info: info });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
