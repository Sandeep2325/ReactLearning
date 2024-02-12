import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { useNavigate } from "react-router-dom";
import Container from "../components/container/Container";
import PostCard from "../components/PostCard";
function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      } else {
        console.log("No posts");
      }
    });
  }, []);
  if (posts.length === 0) {
    return (
      <div className="w-100 py-8">
        <Container>
          <div className="d-flex flex-wrap">
            <h1>Login to read posts or No posts to view</h1>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-100 py-8 pt-3">
      <Container>
        <div className="d-flex flex-wrap">
          
          {posts.map((post) => (
            <div className="p-2 w-25">
              <PostCard
                {...post}
                // id={post.$id}
                // title={post.title}
                // featuredImage={post.featuredImage}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
