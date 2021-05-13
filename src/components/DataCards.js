const DataCards = () => {


  const getResponse = async () => {
    const url3 =
      "https://my-json-server.typicode.com/viswa2811/aspsaarang2022/thelast";
    var response = await fetch(url3) ;
    var data = await response.json();
    console.log(data) ;

  };
  getResponse() ;

  return <div>Hi</div>;
};

export default DataCards;
