
export default function GroceryCard({foodData}){


    return(

     <div className="flex-none" >
        <a href={foodData.action.link} target="_blank">
            <img  className="w-36 h-44  " src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData.imageId}></img>
        </a>
       {<h2 className="text-center font-bold">{foodData?.action?.text}</h2>}
     </div>

    )

}