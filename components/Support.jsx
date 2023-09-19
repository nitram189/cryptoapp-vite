

export default function Support() {

  return (
    <div className="flex items-center justify-center h-screen">

      <div className="lg:w-4/5 w-full mx-auto text-center">

        <h4 className="text-4xl md:text-6xl font-semibold text-orange-400 mb-5 sm:mb-6">need help?</h4>

        <p className="text-orange-100 text-xl">call our support service, read the FAQ's or have a look at the latest stories in our blog.</p>

        <div className="mt-14 flex">

          <div className="flex flex-col items-center pb-5 w-1/3">
            <img
              src='/call.png'
              alt="call support logo"
              className="w-16" />
            <h5 className="text-center font-semibold text-orange-400 text-xl">24/7 call supports.</h5>
            <p className="w-3/4 text-center text-orange-100">our customer service agents are waiting for your questions.</p>
          </div>

          <div className="flex flex-col items-center pb-5 w-1/3">
            <img
              src='FAQ.png'
              alt="FAQs logo"
              className="w-16" />
            <h5 className="text-center font-semibold text-orange-400 text-xl">FAQs.</h5>
            <p className="w-3/4 text-center text-orange-100">view FAQs for detailed instructions on specific features.</p>
          </div>

          <div className="flex flex-col items-center w-1/3">
            <img
              src='/note.png'
              alt="blog logo"
              className="w-16" />
            <h5 className="text-center font-semibold text-orange-400 text-xl">blog.</h5>
            <p className="sm:w-3/4 text-center text-orange-100">stay up to date with the latest stories and commentary.</p>
          </div>
        </div>
      </div>


    </div>
  )
}
