import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/695772d4d3dbd7421982a4b9/latest/${currency}`
    )
      .then((res) => res.json()).then((res) => (setData(res.conversion_rates)));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
