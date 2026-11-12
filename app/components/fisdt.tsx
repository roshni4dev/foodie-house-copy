
// Next.js mein page ka component
export default function Home() {
    return (
        <>
            {/* Main container */}
            <div className="p-16 bg-pink-200 border-2 border-pink-500 rounded-xl">

                {/* Main heading */}
                <h1 className="text-center bg-red-500 text-white text-3xl p-4 rounded-lg">
                    I am Roshni ❤️
                </h1>

                {/* Paragraph */}
                <p className="text-center mt-4 text-lg">
                    I am learning Next.js and Tailwind CSS.
                </p>

                {/* Button */}
                <div className="text-center mt-6">
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                        Learn More
                    </button>
                </div>

            </div>
        </>
    );
}
