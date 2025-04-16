import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("pkr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
 const options = Object.keys(currencyInfo)

 const swap = () => {
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
 }

 const convert =() => { 
setConvertedAmount(amount * currencyInfo[to])
 }
 return (
 
  <div
      className="w-full h-screen flex flex-wrap justify-center 
      items-center bg-cover bg-no-repeat
      max-2-md border border-gray-300 rounded-lg p-6 shadow-xl bg-white/90
      
      "
      style={{
          backgroundImage: `url('https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
  >
///////////////
<div className="w-full md:w-1/2 flex flex-col justify-center items-center text-white p-8 bg-gradient-to-r from-black/30 to-black/25">
  <img 
    src="./sajidimg.jpeg"  // <- your image in public folder
    alt="Sajid Malik" 
    className="w-40 h-40 rounded-full object-cover border-4 border-white mb-6 shadow-2xl hover:scale-105 transition-transform duration-300"
  />

  <h1 className="text-4xl font-extrabold tracking-wide mb-3 text-center 
  drop-shadow-md">Sajid Malik</h1>

  <p className="text-white/80 text-center text-lg max-w-md leading-relaxed tracking-wide">
    I am a <span className="text-blue-300 font-medium">web developer</span> passionate about learning new technologies.
    This <span className="text-yellow-300 font-medium">currency converter</span> is one of my React projects using live exchange rates!
  </p>
  <div className="mt-4">
  <a
    href="https://www.linkedin.com/in/sajidmlk/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-blue-600 hover:underline font-medium text-sm"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      className="bi bi-linkedin"
      viewBox="0 0 16 16"
    >
      <path d="M0 1.146C0 .513.324 0 .725 0h14.55c.401 0 .725.513.725 1.146v13.708c0 .633-.324 1.146-.725 1.146H.725A.723.723 0 0 1 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.21c-.837 0-1.356-.554-1.356-1.248 0-.706.532-1.248 1.384-1.248.852 0 1.356.542 1.369 1.248 0 .694-.517 1.248-1.397 1.248h-.001zm4.908 8.21h2.4V9.359c0-.213.015-.426.079-.576.172-.426.564-.869 1.222-.869.863 0 1.208.656 1.208 1.619v3.861h2.4v-4.133c0-2.211-1.179-3.243-2.751-3.243-1.271 0-1.845.707-2.165 1.203v.035h-.015a5.85 5.85 0 0 1 .015-.035V6.169h-2.4c.03.677 0 7.225 0 7.225z" />
    </svg>
    Connect with me on LinkedIn
  </a>
</div>

</div>

///////////////

      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      convert();
                     
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          currencyOptions={options}
                          onCurrencyChange={(currency) =>setFrom(currency)}
                            selectedCurrency ={from}
                            onAmountChange={(amount) =>setAmount(amount) }                      
                            />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md 
                          bg-blue-600 text-white px-2 py-0.5"
          onClick= {swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox

                  label="To"
                  amount={convertedAmount} 
                  currencyOptions={options}
                  onCurrencyChange={(currency) =>setTo(currency)}
                  selectedCurrency ={to}
                  amountDisable
                                     />
                          
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()} to {
                        to.toUpperCase()
                      }
                  </button>
              </form>
          </div>
      </div>
  </div> )
}

export default App
 