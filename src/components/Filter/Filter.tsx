import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Filter() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="fillter-div">
      <div className=" filter-region" onClick={handleShow}>
        <p>Filter by Region</p>
        <FontAwesomeIcon icon={faSortDown} />
      </div>
      <div className={`fillter-hover ${show ? "show" : ""}`}
      style={{ transitionDuration: show ? "2.0s" : "0s" }}
      >
        <ul>
          <li>Africa</li>
          <li>America</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>Oceania</li>
        </ul>
      </div>
    </div>
  );
}
