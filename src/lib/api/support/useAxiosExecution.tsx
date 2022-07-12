import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { AnyKindOfDictionary } from "lodash";
import qs from "qs";

type AxiosProps = {
  method: "get" | "post" | "put" | "delete";
  url: string;
  data?: any;
  config?: AxiosRequestConfig;
};

const useAxiosExecution = <T,>({
  method,
  url,
  data,
  config,
}: AxiosProps): [
  {
    response: T | undefined;
    error: string;
    loading: boolean;
  },
  () => void
] => {
  const [response, setResponse] = useState<T>();
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const execution = () => {
    setloading(true);

    if (method === "get" || method == "delete") {
      axios[method](url, config)
        .then((res) => {
          setResponse(res.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setloading(false);
        });
    } else {
      axios[method](url, qs.stringify(data), config)
        .then((res) => {
          setResponse(res.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setloading(false);
        });
    }
    axios.delete;
  };

  return [{ response, error, loading }, execution];
};

export default useAxiosExecution;