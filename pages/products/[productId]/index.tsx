import ProductDetail from "../../../src/components/units/products/detail/ProductDetail.index";
import BoardCommentWrite from "../../../src/components/units/products/comments/write/CommentsWrite.container";
import BoardCommentList from "../../../src/components/units/products/comments/list/CommentsList.container";
export default function ProductDetailPage() {
  return (
    <>
      <ProductDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
