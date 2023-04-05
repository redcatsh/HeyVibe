import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentWrite from "../../../src/components/units/board/comments/write/CommentsWrite.container";
import BoardCommentList from "../../../src/components/units/board/comments/list/CommentsList.container";

export default function ViewBoardPage() {
  return (
    <>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
