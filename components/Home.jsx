import { useCoin } from "../hooks/useCoin"
import HomeCoins from "./HomeCoins";


export default function Home() {

  const { coins } = useCoin();

  return (

    <div className="h-screen w-screen relative overflow-hidden flex flex-col gap-10 justify-center items-center md:pt-0">

      <div className="w-4/5 flex lg:justify-around lg:items-center">

        <div>
          <h4 className="pb-2 text-5xl md:text-6xl text-white/90 font-medium">get a <span className="text-orange-400">quote.</span></h4>

          <h4 className="pb-2 text-5xl md:text-6xl text-white/80 font-medium">track your <span className="text-orange-500">cryptos.</span></h4>

          <h4 className="pb-2 text-5xl md:text-6xl text-white/70 font-medium">get the latest <span className="text-orange-600">news.</span></h4>
        </div>

        <div className="hidden lg:block">
          <img
            src='/coin_image2.png'
            alt="bitcoin logo png"
            className="w-80" />
        </div>
      </div>

      <div className="w-4/5">
        <ul className="grid grid-cols-2 gap-5 md:flex justify-evenly w-full border-2 py-5 rounded-2xl border-orange-600 bg-gradient-to-t from-slate-900 to-slate-950">

          {coins?.map(coin => (
            <HomeCoins
              key={coin.fullName}
              coin={coin} />
          ))}
        </ul>
      </div>
    </div>


  )
}
