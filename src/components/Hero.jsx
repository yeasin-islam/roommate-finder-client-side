import Button from '../components/shared/Button'
import Slider from '../components/slider/Slider'
import { Link } from 'react-router'

const Hero = () => {
    return (
        <div className='bg-slate-500'>
            <div className='container mx-auto px-4 py-10 md:py-24 flex flex-col-reverse md:flex-row items-center gap-10'>
                {/* Text Content */}
                <div className='w-full md:w-1/2 text-center md:text-left space-y-4'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white'>
                        Find the Right Roommate,<br /> Live Better Together
                    </h1>
                    <p className='text-gray-200 text-sm sm:text-base'>
                        Easily connect with people who share your lifestyle, budget, and vibe. Start your journey to stress-free shared living today.
                    </p>
                    <Link to="/browse-listings">
                        <Button type='submit' label='Get Start' />
                    </Link>
                </div>

                {/* Slider */}
                <div className='w-full md:w-1/2 flex h-96 justify-center'>
                    <Slider />
                </div>
            </div>
        </div>
    )
}

export default Hero