import "./publications.css";
import Product from "../product/Product";
import { publications } from "../../research";

const Publications = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Research and Rise!</h1>
        <p className="pl-desc">
          For in-depth analysis of a concept, research is necessary and that's how I landed up publishing a book on quantum computing and a paper on COPD analysis and prediction!
        </p>
      </div>
      <div className="pl-list">
        {publications.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default Publications;
