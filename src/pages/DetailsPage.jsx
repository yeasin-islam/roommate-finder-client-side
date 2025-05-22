// import { useLoaderData, useNavigate, useParams } from 'react-router'
import { MdBookmarkAdd, MdLibraryAdd } from 'react-icons/md'
// import toast from 'react-hot-toast'
import { Helmet } from 'react-helmet-async'
import { useLoaderData } from 'react-router'
import { AiOutlineLike } from 'react-icons/ai';

const DetailsPage = () => {
    const {
        photo,
        title,
        location,
        rentAmount,
        roomType,
        description,
        contactNumber,
        availability,
        lifestyle,
        name,
        email,
    } = useLoaderData();



    const handleLike = e => {
        e.preventDefault()
    }

    return (
        <div className="fontStyle w-full container mx-auto px-4 sm:px-6 lg:px-8 my-12">
            <Helmet>
                <title>Post Details | Find RoomMate</title>
            </Helmet>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">Post Details</h2>
            <h3 className='text-center mb-5 text-lg'>0 People interested in this post</h3>
            <div className="flex justify-center my-8">
                <img src={photo} className="w-full sm:w-3/4 md:w-1/2 mx-auto rounded-lg shadow-lg" alt={title} />
            </div>

            <div className="flex flex-col justify-between items-center mb-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800">{title}</h1>
                <p className="text-lg text-gray-600 mt-4 font-semibold"> {description}</p>
            </div>

            <div className="space-y-4 mb-8">

                <p className="text-lg text-gray-600"><span className="font-semibold">Name:</span> {name}</p>
                <p className="text-lg text-gray-600"><span className="font-semibold">Email:</span> {email}</p>
                <p className="text-lg text-gray-600"><span className="font-semibold">Location:</span> {location}</p>
                <p className="text-lg text-gray-600"><span className="font-semibold">Room Type:</span> {roomType}</p>
                <div className="text-lg text-gray-600 flex items-center gap-5"><span className="font-semibold">Life Style:</span>
                    <div className="mt-2 space-y-1 flex gap-3 items-center justify-start">
                        {lifestyle?.map((style, index) => (
                            <p key={index} className="flex font-medium items-center border text-center rounded-full px-3">
                                {style}
                            </p>
                        ))}
                    </div>
                </div>
                <p className="text-lg text-gray-600"><span className="font-semibold">Availablity:</span> {availability}</p>
                <div className="font-semibold text-lg text-gray-800">Rent: {rentAmount}</div>
            </div>

            {/* like btn */}
            <div>
                <button oneClickonClick={handleLike} className="btn btn-primary mt-6 mx-auto flex items-center justify-center py-2 px-6 text-lg rounded-lg" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                    <AiOutlineLike className="mr-2 text-2xl" />Like Post
                </button>

                <ul className="dropdown menu w-40 rounded-box bg-base-100 shadow-sm"
                    popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
                    <li>{contactNumber}</li>
                </ul>
            </div>
        </div>
    )
}

export default DetailsPage