import culture from "../assets/culture.jpg";
import Card from "../components/Card2";

function Solutions() {
  return (
    <section className="solutions">
      <p>Solutions</p>
      <Card
        title="Ethical Concern: Bias"
        description="NPC behavior AI may reinforce stereotypes and misinformation about cultural communities. Inaccurate cultural representation could lead to unfair treatment and negative perceptions of people from those communities."
      />

      <Card
        title="Recommended Solution"
        description="Developers should involve people from the represented culture in the game development process and thoroughly understand the culture before creating NPCs and story content."
      />

      <Card
        title="Why This Solution?"
        description="People from the represented culture have a deeper understanding of their own traditions, values, and experiences. Their participation can help reduce bias, misinformation, and cultural stereotypes while improving cultural authenticity. Providing employment opportunities is an additional benefit, but the primary goal is ensuring accurate representation."
      />

      <Card
        title="Evidence"
        description="Research suggests that video games can influence cultural understanding and perceptions of different cultural groups. UNESCO also emphasizes that cultural heritage should be identified and defined with the participation of the communities that create and maintain it."
      />

      <Card
        title="Most Affected Stakeholders"
        description="People from cultural communities are influenced the most. When their traditions or cultures are distorted, they may face unfair treatment based on stereotypes. Game developers may also experience criticism, but the impact on them is primarily economic rather than moral."
      />
      <img src={culture} alt="Culture" />
    </section>
  );
}

export default Solutions;