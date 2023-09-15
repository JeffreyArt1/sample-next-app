import React from 'react';

type Props = {
  params: { slug: string[] };
  searchParams: { sort: string };
};

function ProductsPage({ params: { slug } }: Props) {
  return <div>ProductsPage {slug}</div>;
}

export default ProductsPage;
