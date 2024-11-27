function HomePage() {
  return (
    <>
      <section className="relative w-full h-96 bg-cover bg-center">
        <img
          className="w-full h-full object-cover"
          src="./images/image.png"
          alt="Imagem de Destaque"
        />
        <div className="absolute inset-0"></div>
        <div className="absolute bottom-0 right-0 p-14 text-white">
          <span className="text-3xl md:text-5xl font-bold">
            Bem-vindo ao Site
          </span>
        </div>
      </section>

      <section className="flex flex-col mt-10">
        <div className="bg-orange-500 w-40 h-40 font-bold">
          <img src="" alt="img-city" />
          <span>Berlin</span>
          <br />
          <span>12-07-2021</span>
        </div>
      </section>
    </>
  );
}

export default HomePage;
