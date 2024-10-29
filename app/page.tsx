"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swiper from "./component/card/Swiper";
import Post from "./component/card/postCard";
import data from "./hooks/useFetch/useFetch";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import { RootState } from "./redux/store";
import Image from "next/image";

const HomePage = () => {
  const router = useRouter();

  // GET ALL POSTS FROM STORE
  const allPosts = useSelector((state: RootState) => state.allPosts.posts);

  // GET ALL POSTS CATEGORY FROM STORE
  const postCategory = useSelector(
    (state: RootState) => state.allPosts.postCategory
  );

  // GET POSTS WITH MORE THAN 10 LIKES
  const most = allPosts.filter(
    (post: { attributes: { like: { numberOfLikes: number } } }) =>
      post.attributes.like.numberOfLikes >= 200
  );

  // CHECK IF THE USER IS LOGGED IN OR NOT
  const isUserLogged = useSelector(
    (state: RootState) => state.user.isUserLogged
  );

  useEffect(() => {
    // IF USER IS NOT LOGGED IN, REDIRECT TO THE AUTH PAGE
    if (!isUserLogged) {
      router.push("/auth/login");
    }
  }, []);

  return (
    <>
      <Header />

      <section className="hero">
        <div className="container">
          <div className="text-content">
            <h3>Welcome to BlogBeast</h3>
            <h1>
              where you can find your voice, share your story, and connect with
              others who share your passion
            </h1>

            <div className="cta">
              {/* <input type="email" placeholder="Enter your email Id" /> */}
              <Link href="/auth/signup">
                <span className="primary-btn">
                  Join Us <i className="fas fa-arrow-right"></i>
                </span>
              </Link>
              <Link href="/posts">
                <span className="secondary-btn">
                  Explore <i className="fas fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="image-content">
            <Image
              src={"/asset/1.jpeg"}
              width={1000}
              height={1000}
              alt="blog"
            />
          </div>
        </div>
      </section>

      <section className="hot-topics">
        <div className="container">
          <div className="blog-card swiper">
            <h2 className="heading">hot topics</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
              minima ipsam? Ipsa, veniam praesentium minima ea aut placeat.
              Earum quisquam magni autem officiis placeat eaque delectus,
              cupiditate atque eius nostrum.
            </p>

            <Swiper />
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="heading">trending articles</h2>
          <div className="articles">
            {most.slice(0, 6).map((post) => {
              return <Post key={`uniqueid-${post.id}`} post={post} />;
            })}
          </div>
          <div className="button-block">
            <Link href="/posts" className="primary-btn">
              more posts <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      <section className="tags">
        <div className="container">
          <h2 className="heading">popular tags</h2>
          <p>Most searched keywords</p>

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

      <section className="tips">
        <div className="container">
          <div className="life-tips">
            {data.tipsData.map((tip) => (
              <div className="tip" key={tip.id}>
                <div className="tip-img">
                  <Image
                    width={800}
                    height={800}
                    src={tip.image}
                    alt={tip.title}
                  />
                </div>
                <h3 className="art-title">{tip.title}</h3>
                <p>{tip.content}</p>
                <div className="tags-time">
                  <span>{tip.tags}</span>
                  <span>
                    <i className="fas fa-clock"></i> {tip.readTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="most-read-post">
        <div className="container">
          <h2 className="heading">most read posts</h2>
          <div className="most-read">
            {most.slice(0, 6).map((post) => {
              return (
                <div key={`mostread:${post.id}`} className="post">
                  <Image
                    width={800}
                    height={800}
                    src={`/asset/${post.id}.jpeg`}
                    alt="most read post"
                  />
                  <div className="title-date">
                    <Link href={`/posts/${post.id}`}>
                      <p>{post.title}</p>
                    </Link>
                    <div className="read-release">
                      <span>{post.readMin} mins read</span> ~{" "}
                      <span>{post.released}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="last-comment">
        <div className="container">
          <h2 className="heading">last comments</h2>
          <div className="comments">
            {most.slice(0, 4).map((post) => {
              return (
                <div key={`comment:${post.id}`} className="from-user">
                  <p>{post.attributes.comments[0].comment}</p>
                  <div>
                    <Image
                      width={800}
                      height={800}
                      src={`/asset/${post.id}.jpeg`}
                      alt="profile"
                    />
                    <div className="name-time">
                      <p>{post.author}</p>
                      <span>{post.released}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
