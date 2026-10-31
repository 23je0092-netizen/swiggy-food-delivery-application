

export default function FoodCard({foodData}){

    return (
        <>
        <a href={foodData?.action?.link} target="_blank">
        <img className="w-36 h-45 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId} ></img>
        </a>
        </>
    )
}