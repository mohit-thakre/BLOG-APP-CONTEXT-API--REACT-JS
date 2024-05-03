import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const Appcontext = createContext();

function Appprovider({ children }) {
  // Corrected 'Children' to 'children'
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);
  const [page, setPage] = useState([]);
  const [totalPage, setTotalPage] = useState("");

  async function fetchBlog(page = 1) {
    let url = `${baseUrl}?page=${page}`;
    setLoading(true);
    try {
      let response = await fetch(url);
      let data = await response.json();

      setPost(data.posts);
      setPage(data.page);
      setTotalPage(data.totalPages);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  function handlepagechange(page) {
    setPage(page);
    fetchBlog(page);
  }

  const value = {
    loading,
    setLoading,
    page,
    setPage,
    post,
    setPost,
    totalPage,
    setTotalPage,
    handlepagechange,
    fetchBlog,
  };

  return <Appcontext.Provider value={value}>{children}</Appcontext.Provider>;
}

export default Appprovider;
