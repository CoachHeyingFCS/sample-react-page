import Hero from "./components/Hero";
import Card from "./components/Card";
import "./App.css"

function App() {
  return (
    <div>
      <Hero />
      <Card
          title="Education"
          description="AI tutors can provide personalized instruction."
      />
      <Card
          title="Healthcare"
          description="AI can help doctors diagnose diseases."
      />
      <Card
          title="Employment"
          description="AI may automate some jobs while creating others."
      />
    </div>

  );
}

export default App;