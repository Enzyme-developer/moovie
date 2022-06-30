import MovieThumbnail from "./MovieThumbnail";

function MoviesCollection({ results, title }) {
  return (
    <div className="relative flex flex-col space-y-2 my-12 px-8 max-w-[1500px] mx-auto">
      <h2 className="font-semibold">{title}</h2>
      <div className="flex space-x-8 overflow-y-hidden overflow-x-scroll scrollbar-hide py-2">
        {results.map((result) => (
          <MovieThumbnail key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
}

export default MoviesCollection