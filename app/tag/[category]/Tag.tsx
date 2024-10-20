'use client'


import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { PostType } from "@/app/hooks/useFetch/useFetch";
import Post from "../../component/card/postCard";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import "./Tag.css";
import { RootState } from "@/app/redux/store";

type Params = {
  params: { category: string },
};

const Tag = ({ params }: Params) => {
  const router = useRouter();

  // GET THE POST CATEGORY
  const postCategory = params.category;

  // GET ALL POSTS FROM STORE
  const allPosts = useSelector((state: RootState) => state.allPosts.posts);

  // GET CURRENT POST
  const posts = allPosts.filter(
    (data: PostType) => data.category === postCategory
  );

  // SET ALL POSTS TITLES
  const [postTitles, setPostTitles] = useState<string[]>([]);

  // SET USER SEARCH VALUE
  const [userSearch, setUserSearch] = useState<string>("");

  // CHECK IF THE USER IS LOGGED IN OR NOT
  const isUserLogged = useSelector((state: RootState) => state.user.isUserLogged);

  useEffect(() => {
    // IF USER IS NOT LOGGED IN, REDIRECT TO THE AUTH PAGE
    if (!isUserLogged) {
      router.push("/auth/signup");
    }

    
  }, []);

  function searchUserInput() {
    if (userSearch) {
      // I CREATED A SEARCH FUNCTIONALITY [JUST TO SEE HOW IT WORK, THERE'S PROBABLY AN ALTERNATIVE]
      posts.forEach((post) => {
        setPostTitles((prev) => {
          return [...prev, post.title];
        });
      });

      // SPLIT THE USER INPUT INTO AN ARRAY OF EACH WORDS
      const searchWords = userSearch.split(" ");

      // LOOP THROUGH EACH WORDS
      searchWords.forEach((el) => {
        // LOOP THROUGH EACH TITLE OF ALL POSTS
        postTitles.forEach((str) => {
          // SPLIT THE TITLE INTO ARRAY OF EACH WORDS
          const strArray = str.split(" ");

          // LOOP THROUGH EACH TITLE ARRAY, AND CHECK IF MATCHED WITH USER INPUT ARRAY
          strArray.forEach((word) => {
            if (word === el) {
              console.log(`we're in... we've got ${word}`);
            }
          });
        });
      });
    }
  }

  return (
    <>
      <Header />

      <section className="tag">
        <div className="container">
          <div className="container search">
            <input
              value={userSearch}
              onChange={(e) => {
                setUserSearch(e.target.value);
              }}
              type="text"
              placeholder="search for an article"
            />
            <i className="fas fa-search icon" onClick={searchUserInput}></i>
          </div>

          {posts.length > 0 ? (
            <div className="post-tags">
              {posts.map((post) => {
                return <Post key={post.title} post={post} />;
              })}
            </div>
          ) : (
            <p style={{ textAlign: "center" }}>
              there is no post on {postCategory}
            </p>
          )}

          <div className="navigator">
            {posts.length > 3 ? (
              <>
                <span className="primary-btn">prev</span>
                <span className="primary-btn">next</span>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Tag;
