import "./style.css";

export type ProductCardProps = {
  productImage?: string;
  productDescription?: string;
  style?: React.CSSProperties;
  imgIdName?: string;
};

const ProductCard = ({
  productImage,
  productDescription,
  style,
  imgIdName
}: ProductCardProps) => {
  return (
    <div className="product-card-container" style={style}>
      <div className="product-image-container">
        <img src={productImage} alt="product" className="image" id={imgIdName} />
      </div>
      <h5 className="product-desc">{productDescription}</h5>
    </div>
  );
};

export default ProductCard;
