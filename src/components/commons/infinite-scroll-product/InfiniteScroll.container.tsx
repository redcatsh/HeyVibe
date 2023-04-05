import InfiniteScrollUI from "./InfiniteScroll.presenter";

export default function InfiniteScrollPage(props) {
  const onLoadMore = async () => {
    if (props.data === undefined) return;

    await props.fetchMore({
      variables: {
        page: Math.ceil(props.data.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditems === undefined) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <InfiniteScrollUI onLoadMore={onLoadMore}>
      {props.children}
    </InfiniteScrollUI>
  );
}
