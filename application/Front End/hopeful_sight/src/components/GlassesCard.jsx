export function GlassesCard({data}){
    console.log(data);
    return (
        <div className="w-fit bg-stone-200 p-2 drop-shadow-sm hover:drop-shadow-xl">
            <img src={data.img} alt= {data.name} width="500" height="400" className="bg-stone-400"></img>
            <h1>{data.name}</h1>
            <h2>{data.description}</h2>
            <h2>frame width: {data.size}</h2>
   </div>
    );
    
}