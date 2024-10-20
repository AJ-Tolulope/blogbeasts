'use client'

import { useState, useEffect } from "react";
import Link from 'next/link';
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/app/redux/store";
import Image from "next/image";
import PostCard from "../../component/card/postCard";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import Reactions from "../../features/reactions/Reactions";
import Comments from "../../features/comments/Comments";
import SendComment from "../../features/comments/SendComment";
import "./Blog.css";

type Params = {
  params: { id: string },
};

const Blog = ({ params }: Params) => {
  const router = useRouter();

  const postId = params.id;

  const allPosts = useSelector((state: RootState) => state.allPosts.posts);

  const post = allPosts.filter((data) => data.id === postId)[0];

  const recentPosts = allPosts
    .filter((recent) => recent.id !== postId)
    .slice(0, 3);

  const [comments, setComments] = useState(post.attributes.comments);

  const isUserLogged = useSelector((state: RootState) => state.user.isUserLogged);

  useEffect(() => {
    if (!isUserLogged) {
      router.push("/auth/signup");
    }
  },[isUserLogged, router]);

  useEffect(() => {
    setComments(post.attributes.comments);
  }, [post]);

  return (
    <>
      <Header />

      <section className="blog">
        <div className="container blog-content">
          <div className="main">
            <div className="blog-image">
              <Image
                src={`/assets/${post.id}.jpeg`}
                width={1000}
                height={1000}
                alt=""
              />
            </div>

            <div>
              <Link href={`/tag/${post?.category}`}>
                <span className="btn-c">Category - {post?.category}</span>
              </Link>
            </div>

            <h2 className="post-title">{post?.title}</h2>

            <div className="post-details">
              <span>
                <i className="far fa-user"></i>
                {post?.author} |
              </span>
              <span>
                <i className="far fa-calendar"></i>
                {post?.released} |
              </span>
              <span>
                <i className="far fa-clock"></i>
                {post?.readMin} mins read
              </span>
            </div>

            <div className="post-content">
              <p>{post?.content}</p>
            </div>

            <Reactions currentPost={post} />
          </div>

          <div className="side" id="comment">
            <h3 className="heading">comments</h3>
            <div className="user-comments">
              {comments.map((comment) => {
                return (
                  <Comments key={`commentsid${comment.id}`} comment={comment} />
                );
              })}
            </div>

            {/* custom component, input field which collects user's comment */}
            <SendComment setComments={setComments} comments={comments} />
          </div>
        </div>

        <div className="container recent-posts">
          <h3 className="heading">recent blog posts</h3>
          <div className="grid">
            {recentPosts?.map((recent) => {
              return <PostCard key={`recentposts${recent.id}`} post={recent} />;
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
