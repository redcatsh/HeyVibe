import * as S from "./CommentsList.styles";
import CommentsListUIItem from "./CommentsList.presenterItem";
import InfiniteScrollPage from "../../../../commons/infinite-scroll-prd-comments/InfiniteScroll.container";
import { Modal } from "antd";
export default function CommentListUI(props: any) {
  return (
    <div>
      <InfiniteScrollPage fetchMore={props.fetchMore} data={props.data}>
        {props.data?.fetchUseditemQuestions.map((el: any) => (
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
