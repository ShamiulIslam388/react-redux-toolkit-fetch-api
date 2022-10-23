import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "./state/postSlice";
import "./styles.css";

export default function App() {
  const data = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  return (
    <div>
      {data.loading && (
        <div style={{ fontSize: "20px", color: "blue" }}>loading...</div>
      )}
      {data.error && (
        <div style={{ color: "red", fontWeight: "bold" }}>{data.error}</div>
      )}
      {data.posts.slice(0, 10).map((post) => (
        <ul
          key={post.id}
          style={{ padding: "10px", borderBottom: "2px solid #ccc" }}
        >
          <li>{post.title}</li>
        </ul>
      ))}
    </div>
  );
}
