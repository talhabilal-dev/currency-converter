import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    return data;
  }, [currency]);
};

export default useCurrencyInfo;
