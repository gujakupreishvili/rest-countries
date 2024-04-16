import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Country {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  population: number;
  region: string;
  capital: string;
  onClick: () => void;
}

export default function Filter({ }:Country) {
  const [filteredData, setFilteredData] = useState<Country[]>([]);
  const [control, setContorl] = useState(false);
  const handleControlo = () => {
    setContorl(!control);
  };
  // console.log(control)

  const handleFilter = (region: any) => {
    fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then((res) => res.json())
      .then((data) => {
        setFilteredData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const navigation = useNavigate();
  const handleData = (post: any) => {
    navigation("/about", {
      state: {
        datas: post,
      },
    });
  };

  console.log(control);
  return (
    <>
      <div className="fillter-div">
        <div className=" filter-region" onClick={handleControlo}>
          <p>Filter by Region</p>
          <FontAwesomeIcon icon={faSortDown} />
        </div>
        <div
          className={`fillter-hover ${control ? "show" : ""}`}
          style={{ transitionDuration: control ? "2.0s" : "0s" }}
        >
          <ul>
            <li onClick={() => handleFilter("Africa")}>Africa</li>
            <li onClick={() => handleFilter("America")}>America</li>
            <li onClick={() => handleFilter("Asia")}>Asia</li>
            <li onClick={() => handleFilter("Europe")}>Europe</li>
            <li onClick={() => handleFilter("Oceania")}>Oceania</li>
          </ul>
        </div>
      </div>
      <div className={control ? "flags-container" : "flags-container-none"}>
        {filteredData.map((post) => (
          <div
            className="flags-div"
            id="continet-div"
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
    </>
  );
}
