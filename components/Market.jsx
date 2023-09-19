import { useState } from "react";
import MarketList from "./MarketList";
import Pagination from "./Pagination";
import useMktCapCoins from "../hooks/useMktCapCoins";

export default function Market() {

  const { coins } = useMktCapCoins(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const currentPosts = coins?.slice(firstPostIndex, lastPostIndex);

  const handleCurrentPage = (page) => {
    setCurrentPage(page)
  }


  return (
    <div className="flex justify-center items-center h-screen">

      <div className="lg:w-4/5 w-full mx-auto">
        <div className="text-center">
          <h4 className="text-4xl md:text-6xl font-semibold text-orange-400 mb-5 sm:mb-6">market update.</h4>

          <p className="text-orange-100 text-xl">take a look at the list of top cryptocurrencies ranked by market capitalization.</p>
        </div>

        <div className="py-10">

          <table className="w-full">
            <thead className="text-orange-100 border-b-2 border-orange-600">
              <tr>
                <th className="py-2 hidden sm:table-cell">Coin</th>
                <th className="py-2">Symbol</th>
                <th>Price</th>
                <th>24h %</th>
                <th>Market Cap</th>
              </tr>
            </thead>

            <tbody>
              {currentPosts?.map(coin => (
                <MarketList
                  key={coin.fullName}
                  coin={coin} />
              ))}

            </tbody>
          </table>
        </div>

        <Pagination
          totalPosts={coins?.length}
          postPerPage={postPerPage}
          handleCurrentPage={handleCurrentPage}
          currentPage={currentPage} />
      </div>

    </div>
  )
}
