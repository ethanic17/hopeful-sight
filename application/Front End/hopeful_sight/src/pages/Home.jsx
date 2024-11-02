// Home.jsx
import { GlassesCard } from "../components/GlassesCard";
import { glasses } from "../test_data/glasses";
import "./Home.css";

export function Home() {
  return (
    <div className="bg-green-200 p-2">
      <div className="grid grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-2">
        {glasses.map((value, index) => (
          <GlassesCard key={value.glasses_id || index} data={value} />
        ))}
      </div>
    </div>
  );
}
