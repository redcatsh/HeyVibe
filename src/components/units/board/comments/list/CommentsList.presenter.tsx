import * as S from "./CommentsList.styles";
import CommentsListUIItem from "./CommentsList.presenterItem";
import InfiniteScrollPage from "../../../../commons/infinite-scroll/InfiniteScroll.container";
import { Modal } from "antd";
export default function CommentListUI(props: any) {
  return (
    <div>
      {props.isOpen && (
        <Modal
          visible={true}
          onOk={props.onClickDelete}
          onCancel={props.handleCancel}
        >
          <div>비밀번호 입력: </div>
          <S.PasswordInput
            type="password"
            onChange={props.onChangeDeletePassword}
          />
        </Modal>
      )}
      <InfiniteScrollPage fetchMore={props.fetchMore} data={props.data}>
        {props.data?.fetchBoardComments.map((el: any) => (
          <CommentsListUIItem
            key={el._id}
            el={el}
            onClickDelete={props.onClickDelete}
            onChangeDeletePassword={props.onChangeDeletePassword}
            onClickOpenDeleteModal={props.onClickOpenDeleteModal}
          />
        )) ?? <div></div>}
      </InfiniteScrollPage>
    </div>
  );
}
