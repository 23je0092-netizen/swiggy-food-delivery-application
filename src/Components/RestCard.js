
import { Link } from "react-router-dom"
export default function RestCard({ restInfo }) {


  return (
    <Link to={'/city/delhi/'+restInfo?.info.id}>
    <div className="max-w-70 transform transition duration-200 hover:scale-95 ">
      <img className="w-65 h-45 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + restInfo?.info?.cloudinaryImageId} ></img>
      <div className=" mx-auto mt-2 max-w-[90%]">
        <div className="font-bold text-xl h-6.5 overflow-hidden "  >{restInfo?.info?.name}</div>
        <div className="flex gap-2 items-center">

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        
        className="w-4 h-4  fill-green-700"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
      </svg>

          <span className="font-bold">{restInfo?.info?.avgRating}</span>
          <span className="font-bold">{restInfo?.info?.sla?.slaString}</span>
        </div>

             <div className="text-gray-600 mt-0.5 h-7 overflow-hidden">{restInfo.info.cuisines.join(" ")}</div>
      </div>
    </div>
    </Link>
  )


}