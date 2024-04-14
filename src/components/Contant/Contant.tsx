import Header from "../Header/Headre";
import Filter from "../Filter/Filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
// import { Types } from "../interface/common";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Content() {
  const [text, setText] = useState("");
  const [datas, setDatas] = useState([]);
  const navigation = useNavigate();

  const handleData = (post: any) => {
    navigation("/about", {
      state: {
        datas: post,
      },
    });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setDatas(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value.trim();
    setText(inputText);
    if (inputText !== "") {
      const filteredCountries = datas.filter((country: any) =>
        country.name.common.toLowerCase().includes(inputText.toLowerCase())
      );
      setDatas(filteredCountries);
    } else {
      fetchData();
    }
  };
  const handleEnterKeyPress = async (event :any) => {
    if (event.key === "Enter") {
      if (text.trim() === "") {
        alert("Please write something...");
      } else {
        const filteredCountries = datas.filter((country: any) =>
          country.name.common.toLowerCase().includes(text.toLowerCase())
        );
        setDatas(filteredCountries);
      }
    }
  };

  console.log(text);
  return (
    <>
      <Header />
      
      <div className="input-div">
        <form action="" className="input-form">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            placeholder="Search for a country…"
            className="input"
            onChange={handleInputChange}
            value={text}
            onKeyPress={handleEnterKeyPress}
          />
        </form>
        <Filter />
      </div>
      <div className="container">
        {datas &&
          datas.slice(50, 58).map((post: any) => {
            return (
              <div
                className="flags-div"
                key={post.name.common}
                onClick={() => handleData(post)}
              >
                <img src={post.flags?.png} alt="" />
                <h1>{post.name?.common}</h1>
                <p>population: {post.population}</p>
                <p>region: {post.region}</p>
                <p>Capital: {post.capital}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}
