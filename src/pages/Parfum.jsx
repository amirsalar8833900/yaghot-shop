import React from 'react'
import { UseFetch } from "../hooks/UseFetch";

export default function Parfum() {
  const { data, isLoading, error } = UseFetch("http://localhost:3000/parfum");
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
  )
}
