const express = require('express');
const app = express();
const port = 6000;
const path = require('path');

async function setupServer() {
    app.set("view engine", "ejs");
    // use this line 8 for accessing path of ejs files
    app.set('views', path.join(__dirname, 'views'));
    // app.use(express.static(path.join(__dirname, 'assets')));
    // we have to use this line 10 to give the access to css and assets
    app.use(express.static(path.join(__dirname, 'views')));
    
    
    app.get('/', async (req, res) => {
        const style = "css/home.css";
        res.render('home', { title: 'Home', style: style } );
    
    });
    
    app.get('/purchase', async (re, res) => {
        const style = "css/purchase.css";
        const total_amount_buy = '';
        res.render('purchase', {
            title: 'Purchase', 
            price: 'price', 
            style: style, 
            totalBuy: total_amount_buy
        });
    
    });
    
    app.get('/market', async (re, res) => {
        const style = "./css/market.css";
        res.render('market', {title: 'Market', style: style});
    });
    
    app.get('/learn', async (re, res) => {
        const style = "./css/learn.css";
        const coin = "";
        const coin_explanation = "";
        res.render('learn', {
            title: 'Learn',
            coin: coin, 
            coin_explanation: coin_explanation, 
            style: style
        });
    });

    app.get('/dashboard', async (re, res) => {
        const style = "css/dashboard.css";
        res.render('dashboard', {title: 'Dash Board', style: style});  
    });

    app.listen(port, () => {
        console.log(`Server started on port`);
    });
}

setupServer();