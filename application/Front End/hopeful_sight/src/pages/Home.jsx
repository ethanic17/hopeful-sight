// import { GlassesCard } from "../components/GlassesCard";
// import {glasses} from "../test_data/glasses"
// import { Footer } from "../components/Footer";



// export function Home() {
//   return <div className=" bg-green-200 flex flex-wrap gap-2 p-4" > {glasses.map(value=> {
//     return <GlassesCard data = {value} />
//   })  }</div>;
// }


import { GlassesCard } from "../components/GlassesCard";
import { glasses } from "../test_data/glasses";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div className="bg-green-200 flex flex-wrap gap-2 p-4">
      {glasses.map((value) => (
        <GlassesCard key={value.id} data={value} />
      ))}
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}