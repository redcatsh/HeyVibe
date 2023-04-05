import * as S from "./CommentsList.styles";
import CommentsListUIItem from "./CommentsList.presenterItem";
import InfiniteScrollPage from "../../../../commons/infinite-scroll-prd-comments-answer/InfiniteScroll.container";
import { Modal } from "antd";
export default function CommentListUI(props: any) {
  return (
    <div>
      <InfiniteScrollPage fetchMore={props.fetchMore} data={props.data}>
        {props.data?.fetchUseditemQuestionAnswers.map((el) => (
          <CommentsListUIItem
            key={el._id}
            el={el}
            onClickDelete={props.onClickDelete}
            // onClickOpenDelete={props.onClickOpenDelete}
          />
        )) ?? <div></div>}
      </InfiniteScrollPage>
    </div>
  );
}
