import { BsPeopleFill } from "react-icons/bs";

const Cards = ({name,desc}) => {
  return (
    <div className="w-auto bg-white p-4 border rounded-lg">
      <div className="flex justify-around">
        <div className="logo">
          <div className="bg-green-300 p-2 rounded-full">
            <BsPeopleFill />
          </div>
        </div>
        <div className="flex flex-col text-left py-5">
          <p className="text-2xl font-semibold">{name}</p>
          <p className="  inline-block w-full">
            {desc}
          </p>
        </div>
      </div>
      <div className="text-right mt-[-15px]">
        <p className="text-purple-600">View</p>
      </div>
    </div>
  );
};

export default Cards;
