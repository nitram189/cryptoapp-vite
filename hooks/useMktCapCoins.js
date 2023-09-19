import { useEffect, useState } from "react";
import { getCoins } from "../helpers";

export default function useMktCapCoins( limit ) {

  const [ coins, setCoins ] = useState([]);

  useEffect(() => {
    getCoins(limit)
      .then( response => setCoins( response ))
  }, [])

  return { coins }
}


