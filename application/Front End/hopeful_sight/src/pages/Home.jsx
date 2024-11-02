import { GlassesCard } from "../components/GlassesCard";
import { glasses } from "../test_data/glasses";

export function Home() {
  return (
    <div className="bg-blue-50 p-4 min-h-screen flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {glasses.map((value, index) => (
          <GlassesCard key={value.glasses_id || index} data={value} />
        ))}
      </div>
    </div>
  );
}
