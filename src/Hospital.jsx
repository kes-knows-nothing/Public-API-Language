import axios from 'axios';
import { useState, useEffect } from 'react';

function Hospital() {
  const URL = "https://apis.data.go.kr/6510000/ratInsttService/getRatInsttList";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setError(null);
      setData(null);
      setLoading(true);

      const response = await axios.get(URL, {
        params: {
          serviceKey: "3C3vv2iwChSnh5DTA06XGEPHkqURYjN75X4915Wg4C2gbJsZNwXzW0RhnlWXE7q1X9TgvtLMT1NdeVZhMd5uxA==",
          numOfRows: "20",
          pageNo: "1",
        }
      });

      setData(response.data);
      console.log(data)
    } catch(e) {
      setError(e);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if(loading) return <div>Loading...</div>;
  if(error)   return <div>Error...</div>;
  if(!data)   return null;

  return (
    <div>
      <h1>hello</h1>
      {/* {loading ? <h1>Loading</h1> : <h1>{data.map((item) => item.emdNm)}</h1>} */}
    </div>
  );
}

export default Hospital;