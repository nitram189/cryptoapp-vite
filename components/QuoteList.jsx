import { useCoin } from "../hooks/useCoin"
import Spinner from "./Spinner";


export default function QuoteList() {

  const { quote, isLoading, clearSearch } = useCoin();

  return (
    <div className="pt-10">

      {!quote || quote.length === 0
        ? <div className="flex justify-center items-center">
          <img
            src='/coin_image3.png'
            alt='cryto logos image'
            className="sm:w-3/5" />
        </div>

        : (isLoading
          ? <Spinner />
          :
          <div>
            <table className="w-full rounded-lg bg-gradient-to-t from-slate-900 to-slate-950">
              <thead className="text-orange-100 border-b-2 border-orange-500">
                <tr className="pl-5">
                  <th>Coin</th>
                  <th>Price</th>
                  <th>24% change</th>
                  <th className="py-2 hidden sm:table-cell">24h highest</th>
                  <th className="hidden sm:table-cell">24h lowest</th>
                  <th className="hidden sm:table-cell">Market Cap</th>
                </tr>
              </thead>

              <tbody>
                {quote.map(crypto => (
                  <tr key={ crypto.image } className="text-center hover:bg-slate-700/50 hover:cursor-pointer duration-200 ease-linear border-b border-b-orange-200">
                    <td className="py-2 pl-5">
                      <img
                        src={`${'https://www.cryptocompare.com'}${crypto.image}`}
                        alt={`${crypto.symbol} logo`}
                        className="w-8" />
                    </td>
                    <td className="text-orange-100">{crypto.price}</td>
                    <td className={`${crypto.changeDay < 0
                      ? 'text-red-500'
                      : crypto.changeDay > 0
                        ? 'text-green-500'
                        : 'text-orange-100'}`}>
                      {crypto.changeDay}%
                    </td>
                    <td className="text-orange-100 hidden sm:table-cell">{crypto.highDay}</td>
                    <td className="text-orange-100 hidden sm:table-cell">{crypto.lowDay}</td>
                    <td className="text-orange-100 hidden sm:table-cell">{crypto.marketCap}</td>


                  </tr>
                ))}
              </tbody>
            </table>

            <button
              type="button"
              onClick={() => clearSearch() }
              className="mt-10 py-1 px-3 rounded-lg bg-white/10 backdrop-blur-lg font-bold border-2 border-slate-400 text-white/90 text-center text-lg hover:border-orange-500 hover:bg-transparent hover:text-orange-500 duration-200 ease-in-out">
              clear search.
            </button>
          </div>

        )
      }

    </div>
  )
}
