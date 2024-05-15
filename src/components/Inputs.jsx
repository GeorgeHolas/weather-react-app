import { BiSearch, BiCurrentLocation } from "react-icons/bi";

const Inputs = () => {
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input 
        type="text" 
        placeholder="Search by city..." 
        className="text-xl text-black font-light p-2 w-full shadow-xl focus:outline-none 
        capitalize placeholder:lowercase" 
        />

        <BiSearch 
        size={30} 
        className="text-white mx-2 cursor-pointer transition ease-out hover:scale-125" 
        />
        <BiCurrentLocation 
        size={30} 
        className="text-white mx-2 cursor-pointer transition ease-out hover:scale-125" 
        />
      </div>
    </div>
  );
};

export default Inputs