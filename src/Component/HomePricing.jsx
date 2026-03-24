import React from 'react'
import data from '../data.json'

const HomePricing = () => {
  return (
    <div className='bg-black text-white py-16 px-6'>

      {/* Header */}
      <div className='text-center mb-10'>
        <p className='text-[#D4A017] text-sm tracking-widest uppercase'>We Come To You</p>
        <h1 className='text-3xl font-bold mt-1'>Home Service Pricing</h1>
        <p className='text-gray-400 text-sm mt-2 max-w-md mx-auto'>
          Can't make it to the shop? Our barbers come straight to your door. 
          Extra charges apply based on distance.
        </p>
      </div>

      {/* Cards */}
      <div className='grid grid-cols-3 gap-6 max-w-5xl mx-auto'>
        {data.homePricing.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-2xl p-6 flex flex-col gap-4 ${
              plan.popular
                ? 'bg-[#D4A017] text-black'
                : 'bg-[#2C2C2C] text-white'
            }`}
          >

            {/* Popular Badge */}
            {plan.popular && (
              <span className='bg-black text-[#D4A017] text-xs font-bold px-3 py-1 rounded-full self-start'>
                Most Popular
              </span>
            )}

            {/* Title */}
            <div>
              <h2 className='text-xl font-bold'>{plan.title}</h2>
              <p className={`text-sm mt-1 ${plan.popular ? 'text-black/70' : 'text-gray-400'}`}>
                {plan.duration}
              </p>
            </div>

            {/* Price */}
            <div className='flex items-end gap-1'>
              <span className='text-4xl font-bold'>${plan.price}</span>
              <span className={`text-sm mb-1 ${plan.popular ? 'text-black/70' : 'text-gray-400'}`}>
                / session
              </span>
            </div>

            {/* Travel, Deposit, Distance info */}
            <div className={`rounded-xl p-3 flex flex-col gap-1 text-xs ${
              plan.popular ? 'bg-black/10' : 'bg-black/30'
            }`}>
              <p className='flex justify-between'>
                <span className={plan.popular ? 'text-black/70' : 'text-gray-400'}>Travel Fee</span>
                <span className='font-bold'>${plan.travelFee}</span>
              </p>
              <p className='flex justify-between'>
                <span className={plan.popular ? 'text-black/70' : 'text-gray-400'}>Booking Deposit</span>
                <span className='font-bold'>${plan.deposit}</span>
              </p>
              <p className='flex justify-between'>
                <span className={plan.popular ? 'text-black/70' : 'text-gray-400'}>Max Distance</span>
                <span className='font-bold'>{plan.distanceLimit}</span>
              </p>
            </div>

            {/* Divider */}
            <hr className={`${plan.popular ? 'border-black/20' : 'border-white/10'}`} />

            {/* Features */}
            <ul className='flex flex-col gap-2'>
              {plan.features.map((feature, index) => (
                <li key={index} className='flex items-center gap-2 text-sm'>
                  <span className={`text-lg ${plan.popular ? 'text-black' : 'text-[#D4A017]'}`}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`mt-auto py-2 px-4 rounded-full font-bold text-sm transition-all duration-300 ${
                plan.popular
                  ? 'bg-black text-[#D4A017] hover:bg-black/80'
                  : 'border border-[#D4A017] text-[#D4A017] hover:bg-[#D4A017] hover:text-black'
              }`}
            >
              Book Home Visit
            </button>

          </div>
        ))}
      </div>

      {/* Bottom Note */}
      <p className='text-center text-gray-500 text-xs mt-8'>
        * Extra distance charges apply beyond the maximum limit. Contact us for custom quotes.
      </p>

    </div>
  )
}

export default HomePricing