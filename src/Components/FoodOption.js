
import { imageGridCards } from "../Utils/FoodData"
import FoodCard from "./FoodCard"

export default function FoodOption(){


    return(

            <>
            <div className=" w-[85%] gap-7 flex flex-wrap  container mx-auto mt-7 " >
                {
                    imageGridCards.map((foodData)=><FoodCard key={foodData.id} foodData={foodData} ></FoodCard>)
                }
            </div>
            </>

    )
}