'use client'

import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./Footer.css";

const Footer = () => {
  // GET ALL POSTS CATEGORY FROM STORE
  const postCategory = useSelector((state: RootState) => state.allPosts.postCategory);

  return (
    <footer>
      <div className="container">
        <div className="about">
          <span className="logo">
            <Image src={"/asset/logo.png"} width={300} height={300}  alt="" />
            <div className="logo-text">
              <span>B</span>log<span>B</span>east
            </div>
          </span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            exercitationem blanditiis maiores aliquam fuga nemo.
          </p>
        </div>
        <div className="categories">
          <h3 className="heading">categories</h3>
          <ul>
            {postCategory.map((category) => {
              return (
                <li key={`uniqueid-${category}`}>
                  <Link href={`/tag/${category}`}>{category}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="newsletter">
          <h3 className="heading">newsletter</h3>
          <p>
            Sign up to be the first to recieve the latest stories inspiring us,
            case studies, and industry news
          </p>
          <div className="input">
            <div className="text-input">
              <i className="far fa-user"></i>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="text-input">
              <i className="far fa-envelope"></i>
              <input type="email" placeholder="Enter your email address" />
            </div>
          </div>
          <span className="primary-btn">
            subscribe <i className="fas fa-arrow-right"></i>
          </span>
        </div>
      </div>
      <div className="last">
        <div className="copyright">
          <p>&copy; Created by thewebedits</p>
        </div>
        <div className="social">
          <div className="instagram">
            <Link href="https://instagram.com">
              <i className="fab fa-instagram"></i> Instagram
            </Link>
          </div>
          <div className="linkedin">
            <Link href="https://linkedin.com">
              <i className="fab fa-linkedin"></i> LinkedIn
            </Link>
          </div>
          <div className="whatsapp">
            <Link href="https://whatsapp.com">
              <i className="fab fa-whatsapp"></i> Whatsapp
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
