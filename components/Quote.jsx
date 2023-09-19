import Form from "./Form"
import QuoteList from "./QuoteList"

export default function Quote() {
 
  return (
    <div className="flex justify-center items-center h-screen">

      <div className="lg:w-4/5 w-full mx-auto text-center">

        <h4 className="text-4xl md:text-6xl font-semibold text-orange-400 mb-5 sm:mb-6">crypto quote.</h4>

        <p className="text-orange-100 text-xl">select a cryptocurrency and receive an instant price quote.</p>

        <div className="gap-10 pt-10">
          <Form />
          <QuoteList />
        </div>

      </div>
    </div>

   

  )
}
