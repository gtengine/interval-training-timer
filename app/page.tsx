import Timer from "@/components/Timer";
import TimeList from "@/components/TimeList";
import Margin from "@/components/Margin";

export default function Home() {
  return (
    <main className="lg:flex justify-between">
      <Timer />

      {/* mobile margin */}
      <Margin className="h-8" />

      <TimeList />
    </main>
  );
}
