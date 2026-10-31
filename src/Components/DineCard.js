

export default function DineCard({RestData}){


return(
<div className="max-w-sm font-bold flex-none">

<div className="relative">
    <a href={RestData.cta.link} target="_blank">
    <img className="w-80 h-50" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+RestData?.info?.mediaFiles[0]?.url}  ></img>
    </a>
    <p className="absolute bottom-4  left-4 text-xl font-bold text-white">{RestData?.info?.name } </p>
    <p className="absolute bottom-4 right-4 text-xl font-bold text-white">{RestData?.info?.rating?.value}</p>
    <div className="absolute bg-graident-to-t from-black h-16 bottom-0"></div>
</div>

</div>
    
)

}