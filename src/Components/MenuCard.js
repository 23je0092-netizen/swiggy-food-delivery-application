import RestInfo from "./RestInfo"

  export default function MenuCard({menuItems}){
    
// if("categories" in menuItems){
//     return(
//         <div className="w-full">
//                 <p> {menuItems.title} </p>
//                 <div>
//                     {
//                         menuItems?.categories.map((items)=> <MenuCard key={items?.title} menuItems={items} ></MenuCard>)
//                     }
//                 </div>
//         </div>
//     )
// }


return (
   <div className="w-full">
        <p> {menuItems.title} </p>
        <div>
            {
                menuItems?.itemsCards?.map((items)=> <RestInfo key={items?.card?.info?.id} restData ={items?.card?.info}  ></RestInfo>)
            }
        </div>
    </div>

)

  }