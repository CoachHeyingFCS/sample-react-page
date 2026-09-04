import Card from "../components/Card2";

function Culture() {
  return (
    <section className="culture">
      <h2>Cultural Impact</h2>

      <table>
        <thead>
          <tr>
            <th>Stakeholders</th>
            <th>Positive Impact</th>
            <th>Negative Impact</th>
            <th>Fact/Evidence</th>
            <th>Source</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Players</td>

            <td>
              Increases cultural awareness, builds empathy toward
              different groups.
            </td>

            <td>
              Could reinforce cultural stereotypes or spread cultural
              misinformation.
            </td>

            <td>
              Players interact with NPCs in RPGs and Open World games.
              These NPCs present certain cultures in real world contexts,
              influencing players' understanding of those cultures.
            </td>

            <td>
              UNESCO, Culture in the Digital Environment
            </td>
          </tr>

          <tr>
            <td>Game Developers</td>

            <td>
              Make more immersive worlds and have more diverse
              representation.
            </td>

            <td>
              May represent cultures inaccurately or oversimplify
              cultures when creating NPCs.
            </td>

            <td>
              Developers can create NPCs from diverse cultural
              backgrounds, making game worlds more realistic and
              inclusive. However, inaccurate cultural content may cause
              criticism.
            </td>

            <td>
              IGDA, Game Industry Diversity Report
            </td>
          </tr>

          <tr>
            <td>Cultural Communities</td>

            <td>
              Cultural preservation and increased cultural visibility.
            </td>

            <td>
              Cultural misrepresentation and loss of cultural
              authenticity.
            </td>

            <td>
              NPCs may portray real cultural traditions and heritage.
              However, misinformation or oversimplification could
              negatively affect cultural communities.
            </td>

            <td>
              UNESCO, Intangible Cultural Heritage
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Culture;