function Card(props) {
  return (
    <section className="card">
      <h2>{props.title}</h2>

      <p>{props.description}</p>
    </section>
  );
}

export default Card;