import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export function AboutCard(props) {
  return (
    <div className="productList">
      <div key={props.id} className="productCard">
        <img
          style={{ width: "150px", height: "200px" }}
          src={props.image}
          alt="product-img"
          className="productImage"
        >
        </img>
        <div className="productCard__content">
          <h3 className="productName">{props.name}</h3>
          <div className="displayStack__1">
            <Link to={props.link}>
              <FaLinkedin className="productPrice" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
