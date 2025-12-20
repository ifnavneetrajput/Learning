const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-lg text-center">
        <h1 className="font-bold mb-6 text-3xl">Contact Us</h1>

        <form className="bg-white shadow-lg rounded-xl p-6 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="text"
            placeholder="Message"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <button className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
