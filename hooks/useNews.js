import { useEffect, useState } from "react";
import { getNewsList } from "../helpers";

export default function useNews() {

    const [ news, setNews ] = useState([]);

    useEffect(() => {
      getNewsList()
        .then( response => setNews( response ))
    }, [])

  return { news }
}
