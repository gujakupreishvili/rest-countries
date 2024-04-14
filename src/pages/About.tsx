// import React from "react";
import Header from "../components/Header/Headre";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const location = useLocation();
  const data = location.state.datas;
  console.log(data);
  return (
    <>
      <Header />
      <div className="about-main-container">
        <Link to="/" className="link">
          <div className="back-div">
            <button className="back">
              <span>
                <FontAwesomeIcon icon={faArrowLeft} />
              </span>
              Back
            </button>
          </div>
        </Link>
        {data && (
          <>
            <div className="info-contant">
              <img src={data.flags?.png} alt="" />
              <div className="therd-text">

              <div className="first-text-about">
              <div className="capital-div">
              <h1 className="name">{data.name?.common}</h1>
              <p>
                <b>Native Name:</b> {data.name.common || data.altSpellings[1]}
              </p>
              <p>
                <b>Population:</b> {data.population}
              </p>
              <p>
                <b>Region:</b> {data.region}
              </p>
              <p>
                <b>Sub Region:</b> {data.subregion}
              </p>
              <p>
                <b>Capital:</b> {data.capital}
              </p>
              </div>

              <div className="laguages">
                <p>
                  <b>Top Level Domain:</b> {data.tld}
                </p>
                <p>
                  <b>Currencies:</b>{" "}
                  {Object.values(data.currencies)
                    .map((currency) => (currency as { name: string }).name)
                    .join(", ")}
                </p>
                <p>
                  <b>Languages:</b> {Object.values(data.languages).join(", ")}
                </p>
              </div>
              </div>
              <div className="border">
                <p>
                  <b>Border Countries:</b>{" "}
                </p>
                <div className="border-btns">
                  {data.borders.map((border: any) => (
                    <button key={border} className="border-click">
                      {border}
                    </button>
                  ))}
                </div>
              </div>
              </div>
            </div>
            {/* Add other details you want to display */}
          </>
        )}
      </div>
    </>
  );
}
