import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import appwriteService from "../appwrite/config";
import Container from "../components/container/Container";
import PostForm from "../components/post-form/PostForm";
function EditPost() {
  const [post, setpost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setpost(post);
        } else {
          navigate("/");
        }
      });
    }
  }, [slug, navigate]);
  return(
    <div className="py-6 pt-5">
      <Container>
        <PostForm post={post}/>
      </Container>

    </div>
  )
}

export default EditPost;
