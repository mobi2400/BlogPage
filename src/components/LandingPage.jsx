function LandingPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-600 text-white">
    <h1 className="text-3xl font-bold underline">Welcome to blog page</h1>
    <p className="text-lg">A blog where you can post your articles and get reviews</p>
    <button className="py-4 px-8 text-xl bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bold rounded-full shadow-lg transform transition duration-300 hover:scale-105 mr-4">SignUp</button>
    <button className="py-4 px-8 text-xl bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bold rounded-full shadow-lg transform transition duration-300 hover:scale-105">Login</button>
    </div>
    )
}

export default LandingPage