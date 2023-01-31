import { MdLocationOn } from "react-icons/md";

const Weatherinfo = ({ temp, temp_min, temp_max, search }) => {
  return (
    <div className="weather__info">
      <h2 className="location">
        <MdLocationOn /> {search}
      </h2>
      <article className="weather__temp">
        <h2>{temp}&deg; C</h2>
        <div className="temp-minmax">
          <span>Min: {temp_min}&deg; C</span> |
          <span>Max: {temp_max}&deg; C</span>
        </div>
      </article>
    </div>
  );
};

export default Weatherinfo;
