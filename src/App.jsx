import React from "react";
import { useEffect, useState } from "react";
import axios from "awios"


function App() {
  const AUTH_KEY = "j8OP2%2BvrVjvWmfOXEJER0%2FNaSxrpNNhqsPfyskb3IFZTTu%2BuCWLiN03KgevJjIKY%2FDcwOxjt3Ei23XQyroxUSA%3D%3D";
  const SEARCH_AREA = 1;
  const SEARCH_MONTH = 202201;
  const [loading, setLoading] = useState(true);
  const snMarket = async () => {
    await fetch(`http://apis.data.go.kr/3780000/smr_api?serviceKey=${AUTH_KEY}&searchArea=${SEARCH_AREA}&searchMonth=${SEARCH_MONTH}`)
    
    .then((response) => {
      if(response.ok) {
        return response.json();
      }  
      throw new Error('Network response was not ok.');
    }).then((data) => {
      console.log(JSON.stringify(data));
    }).catch((error) => {
      console.log(`error: ${error}`)
  });
  setLoading(false)
}


useEffect(() => {
  snMarket();
}, [])

  return (
    <div>
      {loading ? <h1>Loading...</h1> : <h1>comeup</h1>}
    </div>
  );
}

export default App;

// http://apis.data.go.kr/3780000/smr_api?serviceKey=j8OP2%2BvrVjvWmfOXEJER0%2FNaSxrpNNhqsPfyskb3IFZTTu%2BuCWLiN03KgevJjIKY%2FDcwOxjt3Ei23XQyroxUSA%3D%3D&searchArea=1&searchMonth=202201
