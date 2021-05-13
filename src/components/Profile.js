import NavBar from "./NavBar";
import { useState } from "react";
import DataCards from "./DataCards";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();
  const [webSeries, setWebSeries] = useState();
  const [Details, setDetails] = useState();

  const getResponse = async () => {
    const url1 =
      "https://my-json-server.typicode.com/viswa2811/aspsaarang2022/welcome";
    var response = await fetch(url1);
    var data = await response.json();
    setMovies(data.name);

    const url2 =
      "https://my-json-server.typicode.com/viswa2811/aspsaarang2022/saarang";
    response = await fetch(url2);
    data = await response.json();
    setWebSeries(data.name);
    setLoading(false);

    const url3 =
      "https://my-json-server.typicode.com/viswa2811/aspsaarang2022/thelast";
    response = await fetch(url3);
    data = await response.json();
    setDetails(
      data.map((detailsind) => {
        return (
          <div className="card">
            <p class="line-style">{detailsind.name}</p>
            <p class="line-style">{detailsind.username}</p>
            <p class="line-style">{detailsind.email}</p>
            <p class="line-style">{detailsind.phone}</p>
            <p class="line-style">{detailsind.website}</p>
          </div>
        );
      })
    );

  };

  getResponse() ;

  return (
    <div>
      <NavBar />
      <div className="container-box">
        <div className="bar-block">
          {loading ? <div>Movies</div> : <div>{movies}</div>}
        </div>

        <div className="bar-block">
          {loading ? <div>webSeries</div> : <div>{webSeries}</div>}
        </div>
      </div>
      <div className="container-box">{Details}</div>
    </div>
  );
};

export default Profile;
