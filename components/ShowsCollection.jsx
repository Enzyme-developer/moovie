import ShowThumbnail from "./ShowThumbnail";

function ShowsCollection({ results, title }) {
  return (
    <div className="flex flex-col space-y-2 my-8 px-8 max-w-[1500px] mx-auto">
      <h2 className="font-semibold">{title}</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide py-2 ">
        {results.map((result) => (
          <ShowThumbnail key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
}

export default ShowsCollection;