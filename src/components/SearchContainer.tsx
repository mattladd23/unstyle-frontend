export default function SearchContainer() {
    return (
        <div className="flex flex-col items-center justify-between p-4">
            <p className="mb-4">Enter your css property below...</p>
            <input
                type="text"
                placeholder="Search..."
                className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
        </div>
    );
}