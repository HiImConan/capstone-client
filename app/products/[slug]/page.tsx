type Props = {
  params: {
    slug: string;
  };
};

const PantsPage = ({ params }: Props) => {
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
