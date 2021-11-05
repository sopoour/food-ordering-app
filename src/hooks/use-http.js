import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        //only if we pass on a method, headers and body through the useHttp function, insert it 
        //otherwise have default config
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: JSON.stringify(requestConfig.body) ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return { isLoading, error, sendRequest };
};

export default useHttp;
