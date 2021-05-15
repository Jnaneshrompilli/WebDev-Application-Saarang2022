import NavBar from "./NavBar";
import { useState, useEffect } from "react";

const Profile = () => {
  // variables to store fetched data
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();
  const [webSeries, setWebSeries] = useState();
  const [Details, setDetails] = useState();
  
  // to fetch data using api requests
  const getResponse = async () => {
    // Fetching movies
    const url1 =
      "https://my-json-server.typicode.com/viswa2811/aspsaarang2022/welcome";
    //  await used to wait untill details fetched from api
    var response = await fetch(url1);
    var data = await response.json();
    setMovies(data.name);
    
    // Fetching webseries
    const url2 =
      "https://my-json-server.typicode.com/viswa2811/aspsaarang2022/saarang";
    response = await fetch(url2);
    data = await response.json();
    setWebSeries(data.name);
    setLoading(false);
    
    // Fetching data to be displayed on cards
    const url3 =
      "https://my-json-server.typicode.com/viswa2811/aspsaarang2022/thelast";
    response = await fetch(url3);
    data = await response.json();
    // Returning each card with an preson's data using map function
    setDetails(
      data.map((detailsind) => {
        return (
          <div className="card" key={detailsind.id}>
            <p className="line-style" style= {{'font-weight':'bold','text-align':'center'}} >{detailsind.name}</p>
            <p className="line-style">• {detailsind.username}</p>
            <p className="line-style">• {detailsind.email}</p>
            <p className="line-style">
              • {detailsind.address.street},
              <div className='line-sub-style'>
                {detailsind.address.suite},{detailsind.address.city},
                {detailsind.address.zipcode}
              </div>
            </p>
            <p className="line-style">• {detailsind.company.name}
            <div className='line-sub-style' style= {{'font-size':'11px'}}>
                {detailsind.company.catchPhrase}
              </div></p>
            <p className="line-style" style = {{color:'#1a75ff'}}>• {detailsind.website}</p>
          </div>
        );
      })
    );
  };
  // getResponse function will execute once on loading the page
  useEffect(() => {
    getResponse();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container-box">
        <div className="bar-block">
          {loading ? <div>movies loading...</div> : <div>{movies}</div>}
        </div>

        <div className="bar-block">
          {loading ? <div>webSeries loading...</div> : <div>{webSeries}</div>}
        </div>
      </div>
      <div className="container-box">{Details}</div>
    </div>
  );
};

export default Profile;

