import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../client";
import Loader from "../components/UI/Loader";

import classes from "./BlogPage.module.css";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'post'] {
        title,
        slug,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className="mb-10 xs:px-7 sm:px-10 md:px-10 xl:px-20 ">
        {/* xl:max-w-7xl */}
        <h2 className="font-bold text-3xl mt-5 mb-0 tracking-widest text-center md:text-4xl opacity-80">
          Blog Content
        </h2>

        <hr className="mt-4 mb-10" />

        {/* <h2>You are viewing {posts.length} blog posts.</h2> */}

        {posts.length > 1 ? (
          <div
            className={`${classes["blog-section"]} grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3`}
          >
            {posts.map((post) => (
              <article
                key={post.slug.current}
                className={`${classes["blog-sub_section"]}`}
              >
                <img
                  className="w-96 h-96 object-fill rounded-xl"
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  loading="lazy"
                />
                <h4 className="text-lg mt-4 px-10 text-center">
                  {post.mainImage.asset.url && post.title && post.title}
                </h4>

                <div className="text-center">
                  <button
                    type="button"
                    className="mt-3 lg:mt-10 xl:mt-10 border border-purple-500 pl-4 pr-4 pt-1 pb-1 bg-white hover:bg-purple-500 hover:text-white hover:no-underline"
                  >
                    <Link
                      className="hover:no-underline hover:text-white before:w-0"
                      to={`/blog/${post.slug.current}`}
                    >
                      Read Full Article
                    </Link>
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <Loader />
          </div>
        )}
      </section>
    </>
  );
}
