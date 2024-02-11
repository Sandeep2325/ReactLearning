import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config.js";
function PostCard({ $id, title, featuredImage }) {
  console.log(featuredImage);
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-100 bg-gray rounded-xl p-4">
        <div className="w-100 d-flex justify-content-center mb-4">
          <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
          className="rounded-xl"
          />
        </div>
        <h2 className="text-xl fw-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
