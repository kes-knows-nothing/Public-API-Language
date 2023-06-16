import axios from 'axios';
import { useState, useEffect } from 'react';

const URL = "https://www.sg-smr.or.kr/api/voucherSale";

function Voucher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setError(null);
      setData(null);
      setLoading(true);

      const response = await axios.get(URL, {
        params: {
          serviceKey: "I/IgVM7eM5G0VwKjEFhaDKqelQdICEbSzqrP65DlmIhlp4iYOklb8aSDs94kaQzr31wEIAKOV+8RR9Hg6J+wZw==",
          searchArea: "1",
        }
      });

      setData(response);
      console.log(response)
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
    <h1>Hello</h1>
  );
}

export default Voucher;