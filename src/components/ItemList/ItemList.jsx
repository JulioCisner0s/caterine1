import Item from "./Item";
import "./Item.css";

export default function ItemList({ products }) {
  return (
    <div className="item--list__container">
      {products.map((product) => (
        <Item key={product.category} item={product} />
      ))}
    </div>
  );
}
