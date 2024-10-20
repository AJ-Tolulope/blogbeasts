import Link from "next/link";
import Image from "next/image";
import "./postCard.css";

const PostCard = ({ post }) => {
  return (
    <div className="article" key={post.id}>
      <div className="article-img">
        <Link href={`/posts/${post.id}`}>
          <Image
            src={`/asset/${post.id}.jpeg`}
            width={1000}
            height={1000}
            alt={`article-${post.id}`}
          />
        </Link>
      </div>

      <div className="article-details">
        <div className="tags-time">
          <span>Category - {post.category}</span>
          <span>
            <i className="fas fa-clock"></i> {post.readMin} mins read
          </span>
        </div>

        <h3 className="article-title">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </h3>

        <p className="brief">{post.content}</p>

        <div className="article-authur">
          <div>
            <Image
              src={`/asset/${post.id}.jpeg`}
              width={500}
              height={500}
              alt={post.author}
            />
            <div>
              <h4 className="name">{post.author}</h4>
              <span className="release">{post.released}</span>
            </div>
          </div>

          <span className="readmore">
            <Link href={`/posts/${post.id}`}>
              Read More <i className="fas fa-angle-right"></i>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
