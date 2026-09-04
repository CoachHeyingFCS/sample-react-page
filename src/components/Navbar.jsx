function Navbar({setCurrentPage}) {
  return (
    <section className="navbar">
      <button onClick={() => setCurrentPage("home")}>Home</button> 
      <button onClick={() => setCurrentPage("impacts")}>Impacts</button> 
      <button onClick={() => setCurrentPage("solutions")}>Solutions</button> 
    </section>
  );
}

export default Navbar;