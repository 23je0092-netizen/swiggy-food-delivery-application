import {Link} from "react-router-dom"

export default function Header() {

  return (

    <header className="bg-[#ff5200]  font-serif ">
      <div className="flex justify-between container mx-auto py-8">
        <img className="w-40 h-12 " src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" />
        <div className="text-white text-base font-bold gap-15 flex items-center" >
          <a href="https://www.swiggy.com/corporate/" target="blank" >Swiggy Corporate</a>
          <a href="https://partner.swiggy.com/login#/swiggy" target="blank" >Partner with Us</a>
          <a className="border py-3 px-4 rounded-xl" href="https://www.swiggy.com/corporate/" target="blank" >Get The App</a>
          <a className="border py-3 px-4 border-black rounded-xl bg-black" href="https://www.swiggy.com/corporate/" target="blank" >Sign in</a>
        </div>
      </div>


      <div className="pt-16 pb-8 relative"> 
        <div className="max-w-[60%] text-[45px] font-bold text-white  container mx-auto text-center">
          <img className="h-110 w-60 top-0 left-0 absolute" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                 <img className="h-110 w-60  top-0 right-0 absolute" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
              Order Food and groceries.Discover best restaurants.Swiggy it!
                  </div>

        <div className="max-w-[70%] flex gap-10 container mx-auto mt-7">
        
              <input  className="bg-white w-[28%] text-base px-4 py-2 rounded-2xl" type="search"  placeholder="Delhi, India"></input>
                 <input className="bg-white w-[44%]  text-base px-4 py-2  rounded-2xl" placeholder="Search for restaurant and items for more"></input>

        </div>
      </div>
      <div className="max-w-[80%] container mx-auto flex justify-center">
         <Link to='/restaurant'>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"></img>
                </Link>
                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png"></img>
                </a>
                <a href="https://www.swiggy.com/dineout">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png"></img>
                </a>
                <a href="https://www.swiggy.com/genie">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png"></img>
                </a>
      </div>

    </header>


  )

}