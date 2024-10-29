import { GlassesCard } from "../components/GlassesCard";
import {glasses} from "../test_data/glasses"




export function Home() {
  return <div className=" bg-green-200 flex flex-wrap gap-2 p-2" > {glasses.map(value=> {
    return <GlassesCard data = {value} />
  })  }</div>;
}
