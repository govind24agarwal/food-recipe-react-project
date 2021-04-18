import { useGlobalContext } from "./context.js";

function App() {
  const val = useGlobalContext();
  return (
    <main>
      <section>
        <h2>Food app</h2>
        <h3>{val}</h3>
      </section>
    </main>
  );
}

export default App;
