import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getCategory , getCategories } from "./apiAdmin";
import axios from 'axios'
const API  = process.env.REACT_APP_API_URL

const ManageCategory = () => {

    const [category, setCategory] = useState([]);

    const { user, token } = isAuthenticated();

    const loadCategory = async () => {
        // console.log(Date.now())
        var categories =   await getCategories() ;
        console.log(categories)
        setCategory(categories) 
        // console.log(Date.now())
       
       
    };

    // const destroy = categoryId => {
    //     deleteCategory(categoryId, user._id, token).then(data => {
    //         if (data.error) {
    //             console.log(data.error);
    //         } else {
    //             loadCategory();
    //         }
    //     });
    // };

    useEffect(() => {
        loadCategory();
    }, []);

    return (
        <Layout
            title="Manage Category"
            description="Perform CRUD on products"
            className="container-fluid"
        >
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center">
                        Total {category.length} categories
                    </h2>
                    <hr />
                    <ul className="list-group">
                        {category.map((c, i) => (
                            <li
                                key={i}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <strong>{c.name}</strong>
                                <Link to={`/admin/category/update/${c._id}`}>
                                    <span className="badge badge-warning badge-pill">
                                        Update
                                    </span>
                                </Link>
                                {/* <span
                                    onClick={() => destroy(p._id)}
                                    className="badge badge-danger badge-pill"
                                >
                                    Delete
                                </span> */}
                            </li>
                        ))}
                    </ul>
                    <br />
                </div>
            </div>
        </Layout>
    );
};

export default ManageCategory;