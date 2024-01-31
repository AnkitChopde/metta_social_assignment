import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchCurrency = () => {
  const [query, setQuery] = useState("");
  const [countries,setCountries] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 10

  const buttonStyle = {
    padding: "10px 15px",
    fontSize: "14px",
    borderRadius: "5px",
    margin: "0 5px",
    cursor: "pointer",
    backgroundColor: "purple", 
    color: "white",
    border: "none",
    outline: "none",
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    backgroundColor: "lightgray", 
    color: "darkgray", 
    cursor: "not-allowed",
  };


  const fetchCountry = async () => {
    try {
      const country = await axios.get(`https://restcountries.com/v3.1/currency/${query}`);
      setCountries(country.data);
    } catch (err) {
      console.log(err);
    }
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const handleSearch = debounce(() => {
    if (query) {
      fetchCountry();
    } else {
      setCountries([]);
    }
  }, 500);

  useEffect(() => {
    handleSearch();
  }, [query, handleSearch]);

  return (
    <div>
      <div
        style={{ height: "70px", backgroundColor: "green", paddingTop: "5px" }}
      >
        <h1 style={{ color: "purple", textAlign: "center",fontWeight:"bold" }}>
          World By Currency
        </h1>
      </div>
      <div style={{ margin: "auto", textAlign: "center", marginTop: "3rem" }}>
        <input
          type="text"
          placeholder="Search By Currency INR,EUR"
          style={{
            width: "22%",
            padding: "5px",
            paddingLeft: "15px",
            borderRadius: "30px",
            outline: "none",
          }}
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
        />
      </div>
      <div>
        {
            countries.length==0 ? (
                <h3 style={{textAlign:"center"}}>Search Country above👆 with valid currency name or code </h3>
            ):(
                <div>
                    <div style={{width:"70%",padding:"1rem",color:"purple",margin:"auto",border:"1px solid purple",marginTop:'20px',textAlign:"center",display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"10px"}}>
                    {countries.slice((page - 1) * perPage, page * perPage).map((country)=>(
                    <>
                    <div key={country.ccn3} style={{border:"0.1px solid green",padding:"2px"}}>
                    <img src={country.flags.png} alt={country.name.common} width="150px" />
                    <h2 >{country.name.common}</h2>
                    <h5>{country.capital}</h5>
                    
                    </div>
                    </>
                ))}
                    </div>
                   {
                    countries.length>10 && (
                        <div style={{ textAlign: "center", marginTop: "10px" }}>
                        <button disabled={page===1} style={page === 1 ? disabledButtonStyle : buttonStyle} onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>Previous</button>
                        <span style={{ margin: "0 10px" }}>{page}</span>
                        <button style={page === Math.ceil(countries.length / 10) ? disabledButtonStyle : buttonStyle} disabled={page===Math.ceil(countries.length/10)} onClick={() => setPage((prev) => Math.min(prev + 1, Math.ceil(countries.length / perPage)))}>Next</button>
                      </div>
                    )
                   }
                    </div>
            )
        }
      </div>
    </div>
  );
};

export default SearchCurrency;
