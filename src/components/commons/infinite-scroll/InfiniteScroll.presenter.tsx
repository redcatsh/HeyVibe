import InfiniteScroll from "react-infinite-scroller";
import { AnyObject } from "yup/lib/object";
export default function InfiniteScrollUI(props: AnyObject) {
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
