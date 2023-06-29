import InfiniteScroll from "react-infinite-scroller";

export default function InfiniteScrollUI(props: any) {
  return (
    <div style={{ height: "auto", overflow: "auto" }}>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        useWindow={true}
      >
        {props.children}
      </InfiniteScroll>
    </div>
  );
}
