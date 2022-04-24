import React, { useState, useEffect } from "react";

import MsgBody from "./components/msgBody";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("404!! Got Error!!!!");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false); //              data set  so no loading ######
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }, 1000);
  }, [url]);

  const dataElement =
    data && //   for null value    ########
    data.map((singleData, index) => {
      const { userId, title, body } = singleData;
      return (
        <div key={singleData.id}>
          <MsgBody Id={userId} title={title} body={body} />

          <br />
        </div>
      );
    });

  return { data, error, loading, dataElement };
};

export default useFetch;
