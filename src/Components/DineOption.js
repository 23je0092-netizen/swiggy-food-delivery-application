import {dineoutRestaurants} from "../Utils/DineData"
import DineCard from "./DineCard"

export default function DineOption(){
    return(
        <div className="w-[80%] mx-auto mt-10">
            <p className="font-bold text-3xl">Discover best restaurents on DineOut  </p>
        <div className="flex gap-10 overflow-x-auto mt-5">
            {
                dineoutRestaurants.map((RestData)=><DineCard key={RestData?.info?.id}  RestData={RestData}  ></DineCard>)
            }
        </div>

        
        
        </div>
    )
}