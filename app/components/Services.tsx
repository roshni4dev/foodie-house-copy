export default function Services() {
    return (
        <section className="py-16 px-6">

            <p className="text-center text-orange-500 font-bold">
                CATEGORY
            </p>

            <h1 className="text-center text-4xl font-bold">
                We Offer Best Services
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">

                <div className="p-6 shadow-lg rounded-xl text-center">
                    <h2>🌤️ Calculated Weather</h2>
                </div>

                <div className="p-6 shadow-lg rounded-xl text-center">
                    <h2>✈️ Best Flights</h2>
                </div>

                <div className="p-6 shadow-lg rounded-xl text-center">
                    <h2>🎙️ Local Events</h2>
                </div>

                <div className="p-6 shadow-lg rounded-xl text-center">
                    <h2>⚙️ Customization</h2>
                </div>

            </div>

        </section>
    );
}