/* import Mylist from './components/Mylist'; */
/* import PokemonList from './components/PokemonList'; */
import PokemonAula from './components/PokemonAula';

/* import Data from './data/data.json'; */

function App() {
  /*   const techRatings = Data.techRatings; */
  return (
    <>
      <section>
        <div className="container mx-auto px-5 py-10 md:px-0">
          {/*  <Mylist listValues={techRatings} /> */}
          {/*  <PokemonList /> */}
          <PokemonAula />
        </div>
      </section>
    </>
  );
}

export default App;
