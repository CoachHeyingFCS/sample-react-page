import Card from "../components/Card2";

function Environment() {
        return (
      <div>
      <table>
  <tr>
    <th>Stakeholders</th>
    <th>Positive Effects</th>
    <th>Negative Effects</th>
    <th>Fact/Evidence</th>
    <th>Source</th>
  </tr>

  <tr>
    <td>Players</td>
    <td>Less unnecessary processing and less power consumption through efficient NPC behavior</td>
    <td>Running complex programs requires greater processing power and increases electricity use</td>
    <td>Optimized NPC behavior reduces unnecessary calculations, while more complex NPC systems require additional processing power. Increased energy use can lead to higher carbon emissions, which affect the environment</td>
    <td>International Energy Agency (IEA), Energy and AI</td>
  </tr>

  <tr>
    <td>Game Developers</td>
    <td>Lower server energy consumption with optimized AI</td>
    <td>Greater server energy demand</td>
    <td>Developers can optimize NPC pathfinding and decision-making to reduce energy demand, but more sophisticated NPC systems often require more powerful hardware and greater electricity consumption</td>
    <td>International Energy Agency (IEA), Energy and AI</td>
  </tr>

  <tr>
    <td>Society</td>
    <td>Reduced computational waste</td>
    <td>Increased carbon footprint from high-compute NPC systems</td>
    <td>NPC behavior AI relies on computing resources. Efficient systems consume less energy, while complex systems consume more energy and may increase greenhouse gas emissions</td>
    <td>International Energy Agency (IEA), Energy and AI</td>
  </tr>
</table>
    </div>
  );
}
export default Environment;