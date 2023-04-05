import ProductWrite from "../../../../src/components/units/products/write/ProductWrite.index";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      createdAt
    }
  }
`;

export default function EditProductPage(props) {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.productId,
    },
  });
  return <ProductWrite isEdit={true} data={data} />;
}
