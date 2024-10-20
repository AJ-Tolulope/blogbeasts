'use client'

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Post from "../component/card/postCard";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import "./BlogPosts.css";

const BlogPosts = () => {
  const router = useRouter();

  // GET ALL POSTS DATA FROM STORE
  const allPosts = useSelector((state) => state.allPosts.posts);

  // GET ALL POSTS CATEGORY FROM STORE
  const postCategory = useSelector((state) => state.allPosts.postCategory);

  // CHECK IF THE USER IS LOGGED IN OR NOT
  const isUserLogged = useSelector((state) => state.user.isUserLogged);

  useEffect(() => {
    // IF USER IS NOT LOGGED IN, REDIRECT TO THE AUTH PAGE
    if (!isUserLogged) {
      router.push("/auth/signup");
    }

    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // FILTER THROUGH ALL POSTS DATA BY CATEGORY,
  // RETURN ONLY THE POSTS WITH SAME CATEGORY
  function filterCategory(category) {
    const post = allPosts.filter((post) => post.category === category);
    const getPost = post.slice(0, 3).map((post) => {
      return <Post key={post.title} post={post} />;
    });
    return getPost;
  }

  return (
    <>
      <Header />

      <section className="category">
        <div className="container">
          <h2>Categories</h2>
          <div>
            {postCategory.map((category) => {
              return (
                <Link key={`uniqueid-${category}`} href={`/tag/${category}`}>
                  <span className="btn-c">{category}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="features">
        {postCategory.map((category) => {
          return (
            // CHECK IF THE RETURNED POST DATA FILTERED BY CATEGORY
            filterCategory(category).length > 0 ? (
              <div className="container" key={`uniquepost${category}`}>
                <h2 className="heading">{category}</h2>

                <div className="articles">{filterCategory(category)}</div>

                <div className="button-block">
                  <Link href={`/tag/${category}`} className="primary-btn">
                    see more on {category}
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )
          );
        })}
      </section>

      <Footer />
    </>
  );
};

export default BlogPosts;
