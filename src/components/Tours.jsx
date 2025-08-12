import { tours } from "../data";
import Tour from "./Tour";
import Title from "./Title";

const Tours = () => {
  return (
    <article className="tours" id="tours">
      <Title title="featured" subtitle="tours" />

      <div className="cards">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </article>
  );
};

export default Tours;
