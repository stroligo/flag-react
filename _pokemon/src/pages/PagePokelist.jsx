import PokemonList from '@/components/PokemonList';

function PagePokelist() {
  return (
    <>
      <section>
        <div className="container mx-auto px-5 py-10 md:px-0">
          <div className="flex flex-col gap-8">
            <div className="text-3xl underline bg-red-400">POKELIST</div>
            <div className="flex gap-8">
              <PokemonList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PagePokelist;
