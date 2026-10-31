import { GrocerGridCard } from "../Utils/Grocery";
import GroceryCard from "./GroceryCard";

export default function GroceryOption(){

    return(
        <div className="container mx-auto w-[80%]  mt-20">
        <h1 className="font-bold">Shop Groceries on InstaMart</h1>
       <div className="   overflow-x-auto flex container mx-auto mt-10 gap-10">  
            {
                GrocerGridCard.map((foodData)=><GroceryCard key={foodData.id} foodData={foodData}  ></GroceryCard> )
            }

       </div>
        </div>
    )
}