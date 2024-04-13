import Header from "../Header/Headre";
import Filter from "../Filter/Filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Types } from "../interface/common";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

// export default function Content() {
//   const [text, setText] = useState("");
//   const [datas, setDatas] = useState<Types>();
//   const navigation = useNavigate();

//   const handleData = () => {
//     navigation("/about", {
//       state: {
//         datas    
//       },
//     });
//   };

//   useEffect(() => {
//     const getData = async () => {
//       const response = await axios.get("https://restcountries.com/v3.1/all");
//       const result = await response.data;
//       setDatas(result);
//     };
//     getData();
//   }, []);

//   return (
//     <>
//       <Header />
//       <div className="input-div">
//         <form action="" className="input-form">
//           <FontAwesomeIcon icon={faMagnifyingGlass} />
//           <input
//             type="text"
//             placeholder="Search for a country…"
//             className="input"
//             onChange={(e) => setText(e.target.value)}
//             value={text}
//             // onKeyPress={handleEnterKeyPress}
//           />
//         </form>
//         <Filter />
//       </div>
//       <div className="container">
//         {datas &&
//           datas?.slice<number>(0, 8).map((post: any) => {
//             return (
//                 <div className="flags-div" onClick={handleData} >
//                   <img src={post.flags?.png} alt="" />
//                   <h1>{post.name?.common}</h1>
//                   <p>population: {post.population}</p>
//                   <p>region: {post.region}</p>
//                   <p>Capital: {post.capital}</p>
//                 </div>
//             );
//           })}
//       </div>
//     </>
//   );
// }
export default function Content() {
  const [text, setText] = useState("");
  const [datas, setDatas] = useState<Types>();
  const navigation = useNavigate();

  const handleData = (post: any) => {
    navigation("/about", {
      state: {
        datas: post,
      },
    });
  };

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const result = await response.data;
      setDatas(result);
    };
    getData();
  }, [text]);
console.log(text)
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
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </form>
        <Filter />
      </div>
      <div className="container">
        {datas &&
          datas.slice(0, 8).map((post: any) => {
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


