function Home() {
  return (
    <div className="max-w-sm m-3 p-6 rounded-xl shadow-2xl bg-gradient-to-br from-blue-700 via-blue-500 to-blue-400">
      <div className="flex items-center mb-4">
        <img
          src="https://ui-avatars.com/api/?name=Hiran+S"
          alt="Profile"
          className="w-16 h-16 rounded-full mr-4 border-2 border-blue-400 shadow-lg"
        />
        <div>
          <h2 className="text-xl font-semibold m-0 text-white">Hiran S</h2>
          <p className="text-blue-200 m-0">Web Developer | Game Developer</p>
        </div>
      </div>
      <blockquote className="italic text-blue-100 border-l-4 border-blue-900 pl-3 bg-blue-600 bg-opacity-40 rounded-md py-2 px-3 shadow-md">
        "The best way to get started is to quit talking and begin doing."
      </blockquote>
    </div>
  );
}

export default Home;
