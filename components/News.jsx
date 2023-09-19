import useNews from "../hooks/useNews"

import CarouselSlider from "./CarouselSlider";

export default function News() {

    const { news } = useNews();

  return (
    <div className="flex justify-center items-center h-screen">

      <div className="lg:w-4/5 w-full mx-auto text-center">
        <h4 className="text-4xl md:text-6xl font-semibold text-orange-400 mb-5 sm:mb-6">crypto news.</h4>

        <p className="text-orange-100 text-xl">explore the most recent cryptocurrency news from reputable media sources.</p>

        <div className="p-10">
          <CarouselSlider
            news={ news }/>
        </div>

        <h5 className="text-orange-100 text-sm">powered by <a href="https://min-api.cryptocompare.com/" target="_blank">CryptoCompare</a></h5>
      </div>
    </div>
    
  )
}
