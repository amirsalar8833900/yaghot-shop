import React from "react";
import { UseFetch } from "../hooks/UseFetch";
import "./beauty.css"

export default function Beauty() {
  const { data, isLoading, error } = UseFetch("http://localhost:3000/beauty");
  return (
    <div className="beauty-list">
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loadinng">loading ...</p>}
      {data &&
        data.map((b) => (
          <div key={b.id} className="card">
            <img src={b.image} alt="beauty" />
            <h2>{b.title}</h2>
            <p>{b.price}</p>
          </div>
        ))}
    </div>
  );
}
