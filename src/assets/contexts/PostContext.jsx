import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

// # Consumer
const PostContext = createContext();
export const usePostContext = () => useContext(PostContext);

// # Provider
export function PostContextProvider({ children }) {
  const apiUrl = import.meta.env.VITE_URL;
  function fecthPosts() {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setPostsData({ ...postsData, posts: data }));
  }

  const [postsData, setPostsData] = useState({
    posts: [],
  });

  useEffect(() => {
    fecthPosts();
  }, []);

  return (
    <PostContext.Provider value={postsData}>{children}</PostContext.Provider>
  );
}
