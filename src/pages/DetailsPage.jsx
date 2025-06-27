import { Helmet } from 'react-helmet-async'
import { useLoaderData } from 'react-router'
import { AiOutlineLike } from 'react-icons/ai';

const DetailsPage = () => {
    const {
        _id,
        photo,
        title,
        location,
        rentAmount,
        roomType,
        description,
        contactNumber,
        availability,
        lifestyle,
        createdAt,
        likeCount,
        name,
        email,
    } = useLoaderData();

    // Check if createdAt is a valid date
    const date = createdAt ? new Date(createdAt) : null;
    const isValidDate = date instanceof Date && !isNaN(date);



    const handleLike = e => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form);
        const updatedPost = Object.fromEntries(formData.entries());
        console.log(updatedPost)

        fetch(`${import.meta.env.VITE_API_URL}/posts/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedPost)
        })
            .then(res => res.json())
            .then(data => {
                // if (data.matchedCount) {
                //     { likeCount }={ likeCount } + 1;
                // }
                console.log(data);
            })

    }

    return (
        <section className='mx-4'>
            <div className="popins w-full container max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 my-8 bg-base-300 rounded-xl">
                <Helmet>
                    <title>Post Details | Find RoomMate</title>
                </Helmet>
                <h2 className="text-3xl font-bold text-center mb-2 underline">Post Details</h2>
                <div className="flex justify-center my-8">
                    <img src={photo} className="w-full sm:w-3/4 md:w-1/2 mx-auto rounded-lg shadow-lg" alt={title} />
                </div>

                <div className="flex flex-col justify-between items-center mb-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{title}</h1>
                    <p className="text-lg  mt-4 font-bold"> {description}</p>
                </div>

                <div className="space-y-4 mb-8 grid grid-cols-1 md:grid-cols-2 mx-auto max-w-2xl">

                    <p className=""><span className="text-lg font-bold">Name:</span> {name}</p>
                    <p className=""><span className="text-lg font-bold">Email:</span> {email}</p>
                    <p className=""><span className="text-lg font-bold">Location:</span> {location}</p>
                    <p className=" "><span className="text-lg font-bold">Room Type:</span> {roomType}</p>
                    <div className="flex items-center gap-3"><span className="font-bold text-lg ">Life Style:</span>
                        <div className="mt-2 space-y-1 flex gap-2 items-center justify-start">
                            {lifestyle?.map((style, index) => (
                                <p key={index} className="flex items-center border text-center rounded-full px-3">
                                    {style}
                                </p>
                            ))}
                        </div>
                    </div>
                    <p className=""><span className="text-lg font-bold">Availablity: </span> {availability}</p>
                    <p> <span className="font-bold">Rent: </span>{rentAmount} ৳</p>
                    <p> <span className="font-bold">Created At: </span> {isValidDate ? date.toLocaleDateString() : 'Date not available'}</p>
                </div>

                {/* like btn */}
                <form onSubmit={handleLike}>
                    <div className="dropdown dropdown-center flex flex-col items-center justify-center mx-auto">
                        <button tabIndex={0} role="button" className="btn mt-6 mx-auto flex items-center justify-center py-2 px-6 text-lg rounded-lg">View Contact</button>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-300 rounded-box w-36 text-center mt-28 shadow-sm">
                            <li className='text-lg'>{contactNumber}</li>
                        </ul>
                    </div>
                </form>
            </div>
        </section>

    )
}

export default DetailsPage