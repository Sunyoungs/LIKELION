import styles from "./Product.module.css";

const Product = (props) => {
  console.log("Product: ", styles);

  return (
    <div className={styles.card}>
      <h3>{props.name}</h3>
      <div>{props.price}</div>
    </div>
  );
};

export default Product;