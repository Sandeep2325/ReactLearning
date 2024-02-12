import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config.js";
import parse from "html-react-parser";
 
function PostCard({ $id, title, featuredImage, content }) {
  console.log(parse(content))
  return (
    <Link to={`/post/${$id}`} style={{ textDecoration: 'none' }}>
      <div className="card" style={{ width: "18rem", height:"100%" }} >
        <img
          src={appwriteService.getFilePreview(featuredImage)}
          alt={title}
          className="card-img-top"
          width={285}
          height={160}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{ parse(content)}</p>
          <a className="btn btn-primary authbtn">
            View
          </a>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
