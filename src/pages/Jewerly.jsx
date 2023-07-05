import React from 'react'
import { UseFetch } from "../hooks/UseFetch";


export default function Jewerly() {
  const { data, isLoading, error } = UseFetch("http://localhost:3000/jewrly");
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
