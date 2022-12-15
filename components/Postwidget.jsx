import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPost } from "../Services";

const Postwidget = ({ categories, slug }) => {
  const [relatedPost, setRelatedPost] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPost(categories, slug).then((result) => setRelatedPost(result));
    } else {
      getRecentPosts().then((result) => setRelatedPost(result));
    }
  }, [slug]);
  console.log(relatedPost);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "related Posts" : "Recent Post"}
      </h3>
      {relatedPost.map((post) => (
        <div className="flex items-center w-full  mb-4" key={post.title}>
          <div className="w-16 flex-none">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              height="60px"
              width="60px"
              className="align-middle rounded-full"
            />
          </div>
          <div className="flex-row ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD,YYYY")}
            </p>
            <Link
              href={`/post/${post.slug}`}
              className="text-md"
              key={post.title}
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Postwidget;
