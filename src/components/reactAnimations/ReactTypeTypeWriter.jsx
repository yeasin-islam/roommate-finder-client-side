import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const ReactTypeTypeWriter = () => {

  return (
    <div className=''>
      <h1 className='text-xl md:text-3xl font-semibold'>
        In This Web You Find{' '}
        <span className='text-orange-500 font-bold'>
          <Typewriter
            words={[
              'Hoomie',
              'Perfect Fit',
              'Home Vibes',
              'Trusted Match'
            ]}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h1>
    </div>
  )

}

export default ReactTypeTypeWriter
