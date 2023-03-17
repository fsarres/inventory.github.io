import React from "react";
import Search from "./Search";

function Home() {
  return (
    <div>
        <h1>Welcome</h1>
        <p>Search products by name, description, country of origin or price</p>
        <Search />
    </div>
  );
}

export default Home;
