import { useLocation } from "react-router-dom";
import { UseFetch } from "../hooks/UseFetch";

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");
  const url = "http://localhost:3000/jewrely?q=" + query;
  const { data, isLoading, error } = UseFetch(url);
  return (
    <div className="detail">
      <h2 className="page-title">"{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">loading ...</p>}
      {data &&
        data.map((a) => (
          <div key={a.id}>
            <img src={a.image} alt="asf" />
            <h1>{a.title}</h1>
            <h2>{a.price}</h2>
            <p>{a.body}</p>
          
          </div>
        ))}
    </div>
  );
}
