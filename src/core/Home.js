import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts } from './apiCore';
import Card from './Card';
import Search from './Search';
import Footer from './footer';

const Home = () => {
    const [productsBySell, setProductsBySell] = useState([]);
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [error, setError] = useState(false);

    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsBySell(data);
            }
        });
    };

    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            console.log(data);
            if (data.error) {
                setError(data.error);
            } else {
                setProductsByArrival(data);
            }
        });
    };

    useEffect(() => {
        loadProductsByArrival();
        loadProductsBySell();
    }, []);

    return (
        
        <Layout
            title="RK INDUSTRIES"
            description="we sell rubber products"
            className="container-fluid"
        >
            
            <Search />
            <h2 className="mb-4">New Arrivals</h2>
            <div className="row">
                {productsByArrival.map((product, i) => (
                    <div key={i} className="col-sm-12 col-lg-3   col-md-4">
                        <Card product={product} />
                    </div>
                ))}
            </div>

            <h2 className="mb-4import Footer from './footer';
">Best Sellers</h2>
            <div className="row">
                {productsBySell.map((product, i) => (
                    <div key={i} className="col-sm-12 col-lg-3   col-md-4">
                        <Card product={product} />
                    </div>
                ))}
            </div>
            <Footer/>
        </Layout>
    );
};



export default Home;
