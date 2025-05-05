import Courses from "@/components/courses/Courses";
import Hero from "@/components/hero/Hero";
import LiveAi from "@/components/live_ai/liveAi";

export default function Home() 
  {
    return (
      <div>
        <Hero />
        <LiveAi />
        <Courses />
      </div>
    );
  }