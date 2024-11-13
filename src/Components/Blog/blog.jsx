import React from "react";
import PropTypes from "prop-types";

const Blog = ({ blog }) => {
const {title, cover, author_img, author, readingTime, postedDate,hashtags} = blog;
//   console.log(blog);
  return (
    <div>
      <img src={cover} alt={`Cover picture of the title ${title}`} />
      <div className="flex justify-between items-center">
    <div className="flex gap-6 my-2">
    <img className="w-16" src={author_img} alt="" />
    <div>
      <h3 className="text-2xl font-bold">{author}</h3>
      <h5 className="">{postedDate}</h5>
    </div>
    </div>
    <div>
      <span>{readingTime}</span>
    </div>
      </div>
    <h2 className="text-4xl">{title} min read</h2>
      <p>
        {
          hashtags.map((hash, index) => <span key={index}> <a href="">#{hash}</a></span>)
        }
      </p>
    
  </div>
  )
  
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired
};
export default Blog;


// https://ibb.co/QbGRSND
// https://ibb.co/z22BLXL
// https://ibb.co/hZbnN4y
// https://ibb.co/n18CxQX
// https://ibb.co/sVSS9YG
// https://ibb.co/svdTrYs