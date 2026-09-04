import npcImage from "../assets/npcImage.jpg";
import game from "../assets/game.jpg";
import Card from "../components/Card2";

function Home() {
  return (
    <section className="home">
        <p>Home</p>
            <img src={game} alt="game" />
     
        <Card
          title="Introduction"
          description="NPC Behavior AI is the technology used to control characters in video games that are not operated by human players. It allows non-player characters to make decisions, react to players, navigate environments, and perform actions that make game worlds feel realistic and engaging. This form of AI is primarily used by video game developers and game studios when creating interactive characters such as enemies, allies, merchants, and quest-givers. Today, NPC Behavior AI is used in many games to create smarter character behavior, adaptive interactions, and immersive gameplay experiences. It’s classified as narrow non-generative AI with limited memory as it performs specific tasks in video games, follows programmed rules, and can use information from the game and past interactions to influence their behaviors."
        />
        <Card
          title="History"
          description="NPC Behavior AI began in the 1970s with simple rule-based behaviors and fixed actions. Later, Finite State Machines (FSMs) allowed NPCs to switch between different states, making them appear smarter. In the 1990s and 2000s, tactical enemy AI and squad behaviors helped NPCs cooperate and make better decisions. Around the same time, Behavior Trees and advanced pathfinding made NPC behavior easier to develop and more realistic. Today, developers also use machine learning and generative AI to create adaptive NPCs with conversations and memory, making interactions more natural and varied."
        />
            <img src={npcImage} alt="NPC" />
        <p>Contact Us: (+1) 123-456-7890</p>
        <p>Email: contact@npcbehaviorai.com</p> 
   
    </section>
  );
}
export default Home;