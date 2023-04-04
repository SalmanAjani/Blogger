import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const SingleBlog = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="blogimage"
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="userimage"
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/create?edit=2`}>
              <button>Edit</button>
            </Link>
            <button>Delete</button>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          molestiae, iure quaerat nobis qui veritatis, fugit rem facilis
          voluptatibus nesciunt numquam, recusandae enim exercitationem
          dignissimos. Nostrum, at. Sit, ad dignissimos.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          molestiae, iure quaerat nobis qui veritatis, fugit rem facilis
          voluptatibus nesciunt numquam, recusandae enim exercitationem
          dignissimos. Nostrum, at. Sit, ad dignissimos.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          molestiae, iure quaerat nobis qui veritatis, fugit rem facilis
          voluptatibus nesciunt numquam, recusandae enim exercitationem
          dignissimos. Nostrum, at. Sit, ad dignissimos.quaerat nobis qui
          veritatis, fugit rem facilis voluptatibus nesciunt numquam, recusandae
          enim exercitationem dignissimos. Nostrum, at. Sit, ad dignissimos.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          molestiae, iure quaerat nobis qui veritatis, fugit rem facilis
          voluptatibus nesciunt numquam, recusandae enim exercitationem
          dignissimos. Nostrum, at. Sit, ad dignissimos. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Nam molestiae, iure quaerat nobis
          qui veritatis, fugit rem facilis voluptatibus nesciunt numquam,
          recusandae enim exercitationem dignissimos. Nostrum, at. Sit, ad
          dignissimos.
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};

export default SingleBlog;
