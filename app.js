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

app.get('/gallery', (req, res) => {
    const images = [
        { src: '/images/templatemo_image_01.jpg', caption: 'Hoa Hong Do' },
        { src: '/images/templatemo_image_02.jpg', caption: 'Hoa Tulip' },
        { src: '/images/templatemo_image_03.jpg', caption: 'Hoa Huong Duong' },
        { src: '/images/templatemo_image_04.jpg', caption: 'Hoa Lan Ho Diep' },
    ];
    res.render('gallery', { title: 'Thu Vien Anh - Flower Shop', images: images });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
