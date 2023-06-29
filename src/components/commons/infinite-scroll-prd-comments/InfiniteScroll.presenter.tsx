import InfiniteScroll from "react-infinite-scroller";
export default function InfiniteScrollUI(props: any) {
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
