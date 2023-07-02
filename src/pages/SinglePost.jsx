import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import client from "../client";
import classes from "./BlogPage.module.css";
import BlockContent from "@sanity/block-content-to-react";

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == '${slug}'] {
        title,
        body,
        mainImage {
          asset -> {
            _id,
            url,
          }, alt
        },
        "authorName": author -> name,
      }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch((err) => console.log(err));
    setIsLoading(false);
  }, [slug]);

  return (
    <>
      {isLoading ? (
        <h1 className="uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl lg:text-8xl flex items-center justify-center h-screen">
          Loading...
        </h1>
      ) : (
        <section className="px-5 xl:max-w-6xl xl:mx-auto">
          <h2 className="font-bold text-3xl mt-5 mb-2 tracking-widest text-center md:text-4xl opacity-80">
            {singlePost.title}
          </h2>
          {singlePost.authorName && (
            <p className="text-center mb-10">By: {singlePost.authorName}</p>
          )}

          {singlePost.mainImage && singlePost.mainImage.asset && (
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              title={singlePost.title}
              className={`${classes["single_blog__image"]} rounded-md`}
            />
          )}

          <div className={`${classes["block__content"]}`}>
            <BlockContent
              blocks={singlePost.body}
              projectId={"st016v9f"}
              dataset={"production"}
            />
          </div>

          <div className="text-center mb-10">
            <button
              type="button"
              className="mt-3 lg:mt-10 xl:mt-10 border border-purple-500 pl-4 pr-4 pt-1 pb-1 bg-white hover:bg-purple-500 hover:text-white hover:no-underline inline-block text-center"
            >
              <Link
                className="hover:no-underline hover:text-white before:w-0"
                to={`/blog`}
              >
                Read more articles
              </Link>
            </button>
          </div>
        </section>
      )}
    </>
  );
}
