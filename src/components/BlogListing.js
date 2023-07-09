import React, { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";
import { deleteBlogFromDb, getBlogFromDb } from "../utilities/request";
import InfoModal from "./InfoModal";

const BlogListing = () => {
  const [blog, setBlog] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getBlogFromDb().then((data) => {
      setBlog(data?.data);
    });
  }, []);

  const deleteBlog = (item) => {
    if (item) {
      deleteBlogFromDb(item?.id).then((d) => {
        console.log("deleted", d);
      });
    }
    window.location.reload();
  };

  const openModal = () => {
    setIsOpen(true)
  };
  const closeModal = () => {
    setIsOpen(false)
    
  };

  return (
    <div
      className="flex  flex-col gap-4 max-h-[400px] overflow-scroll hide"
      onClick={openModal}
    >
      {blog &&
        blog?.map((item, index) => (
          <div key={index}>
            <SingleBlog
              content={item?.content}
              time={item?.time}
              title={item?.title}
             
              onDelete={() => {
                deleteBlog(item);
              }}
            />
            <InfoModal closeModal={closeModal} isOpen={isOpen}  item={item}/>
          </div>
        ))}
    </div>
  );
};

export default BlogListing;
