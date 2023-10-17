import Timer from "@/components/Timer";
import TimeList from "@/components/TimeList";

export default function Home() {
  return (
    <main className="lg:flex justify-between">
      <Timer />
      <TimeList />
    </main>
  );
}
