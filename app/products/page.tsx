import Link from "next/link";

const ProductsPage = () => {
  const productList: string[] = ["shirt", "pants", "skirt", "shoes"];
  return (
    <>
      <div>Products list</div>
      {productList.map((product, idx) => (
        <li key={idx}>
          <Link href={`products/${product}`}>{product}</Link>
        </li>
      ))}
    </>
  );
};

export default ProductsPage;
