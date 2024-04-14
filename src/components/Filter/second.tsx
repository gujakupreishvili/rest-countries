import { useState } from "react";

export default function Filter() {
  const [show, setShow] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const handleShow = () => {
    setShow(!show);
  };

  const handleFilter = (region) => {
    fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then((response) => response.json())
      .then((data) => {
        setFilteredData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleData = (post) => {
    // Handle data as needed
  };

  return (
    <div className="filter-div">
      <div className="filter-region" onClick={handleShow}>
        <p>Filter by Region</p>
        <FontAwesomeIcon icon={faSortDown} />
      </div>
      <div
        className={`filter-hover ${show ? "show" : ""}`}
        style={{ transitionDuration: show ? "2.0s" : "0s" }}
      >
        <ul>
          <li onClick={() => handleFilter("Africa")}>Africa</li>
          <li onClick={() => handleFilter("America")}>America</li>
          <li onClick={() => handleFilter("Asia")}>Asia</li>
          <li onClick={() => handleFilter("Europe")}>Europe</li>
          <li onClick={() => handleFilter("Oceania")}>Oceania</li>
        </ul>
      </div>
      
      <div className="flags-container">
        {filteredData.map((post) => (
          <div
            className="flags-div"
            key={post.name.common}
            onClick={() => handleData(post)}
          >
            <img src={post.flags?.png} alt="" />
            <h1>{post.name?.common}</h1>
            <p>Population: {post.population}</p>
            <p>Region: {post.region}</p>
            <p>Capital: {post.capital}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
