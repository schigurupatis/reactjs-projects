import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <>
      <div className="relative">
        <Header />
        <div className="container w-[1024px] mx-auto py-5 pt-24">
          <h1>Browse</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            delectus ex aspernatur corrupti. Pariatur labore rem impedit minus,
            placeat, ipsa tenetur corrupti aut voluptas animi quisquam odio
            dolor. Voluptates atque recusandae sed debitis iure asperiores.
            Alias, quia neque possimus quaerat rerum cupiditate cum quo
            voluptates nihil voluptas nisi placeat recusandae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            delectus ex aspernatur corrupti. Pariatur labore rem impedit minus,
            placeat, ipsa tenetur corrupti aut voluptas animi quisquam odio
            dolor. Voluptates atque recusandae sed debitis iure asperiores.
            Alias, quia neque possimus quaerat rerum cupiditate cum quo
            voluptates nihil voluptas nisi placeat recusandae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            delectus ex aspernatur corrupti. Pariatur labore rem impedit minus,
            placeat, ipsa tenetur corrupti aut voluptas animi quisquam odio
            dolor. Voluptates atque recusandae sed debitis iure asperiores.
            Alias, quia neque possimus quaerat rerum cupiditate cum quo
            voluptates nihil voluptas nisi placeat recusandae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            delectus ex aspernatur corrupti. Pariatur labore rem impedit minus,
            placeat, ipsa tenetur corrupti aut voluptas animi quisquam odio
            dolor. Voluptates atque recusandae sed debitis iure asperiores.
            Alias, quia neque possimus quaerat rerum cupiditate cum quo
            voluptates nihil voluptas nisi placeat recusandae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            delectus ex aspernatur corrupti. Pariatur labore rem impedit minus,
            placeat, ipsa tenetur corrupti aut voluptas animi quisquam odio
            dolor. Voluptates atque recusandae sed debitis iure asperiores.
            Alias, quia neque possimus quaerat rerum cupiditate cum quo
            voluptates nihil voluptas nisi placeat recusandae.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Browse;
