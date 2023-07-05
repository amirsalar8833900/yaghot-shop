import { useParams } from "react-router-dom";
import { UseFetch } from "../hooks/UseFetch";
import "./Detail.css";

export default function Detail() {
  const { id } = useParams();
  const url = "http://localhost:3000/beauty/" + id;

  const { data, isLoading, error } = UseFetch(url);
  return (
    <div className="detail">
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">loading ...</p>}
      {data && (
        <>
          <img src={data.image} alt="asf" />
          <h1>{data.title}</h1>
          <h2>{data.price}</h2>
          <p>{data.body}</p>
        </>
      )}
    </div>
  );
}
