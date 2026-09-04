import impact from "../assets/impact.jpg";

import Card from "../components/Card";

function Impacts({setCurrentPage}) {
  return (
    <section className="impacts">
        <p>Impacts</p>
        <Card
          title="Culture"
          description="NPC behavior AI may increase cultural awareness but can also reinforce stereotypes and misinformation."
          buttonText="Learn More"
          onClick={() => setCurrentPage("culture")}
        />
        <Card
          title="Economy"
          description="NPC behavior AI can affect the income and outcome of game developers and users."
          buttonText="Learn More"
          onClick={() => setCurrentPage("economy")}
        />
        <Card
          title="Environment"
          description="NPC behavior AI may indirectly affect the environment through energy consumption and computing resources."
          buttonText="Learn More"
          onClick={() => setCurrentPage("environment")}
        />
        <img src={impact} alt="impact" />
    </section>
    
  );
}
export default Impacts;