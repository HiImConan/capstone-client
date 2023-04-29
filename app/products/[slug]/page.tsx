import { notFound } from "next/navigation";
type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}

const PantsPage = ({ params }: Props) => {
  if (params.slug === "nothing") {
    notFound();
  }
  return <div>{params.slug}</div>;
};

export default PantsPage;

export function generateStaticParams() {
  // 특정 static site는 이 메소드를 사용해서 미리 만들어놓을 수 있음
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}
