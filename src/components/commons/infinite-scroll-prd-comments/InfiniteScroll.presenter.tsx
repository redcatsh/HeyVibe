import InfiniteScroll from "react-infinite-scroller";
import CommentsListUIItem from "../../units/board/comments/list/CommentsList.presenterItem";
export default function InfiniteScrollUI(props) {
  return (
    <div style={{ height: "500px", overflow: "auto" }}>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        {props.children}
      </InfiniteScroll>
    </div>
  );
}
