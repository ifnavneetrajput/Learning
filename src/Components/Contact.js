const Contact = () =>{
  return (
    <div className="text-center">
      <h1 className="font-bold m-4 p-5 text-3xl" >Contact us </h1>
      <form className="border border-black w-6/12 text-center mx-8">
        <input
          type="text"
          placeholder="name"
          className="border border-black m-2 p-3"
        ></input>
        <input
          type="text"
          placeholder="message"
          className="border border-black m-2 p-3"
        ></input>
        <button className="border border-black m-3 p-3 bg-gray-100 rounded-lg">Submit</button>
      </form>
    </div>
  );
}
export default Contact;