import InfiniteScrollUI from "./InfiniteScroll.presenter";

export default function InfiniteScrollPage(props) {
  // const { data, fetchMore } = useQuery<
  //   Pick<IQuery, "fetchBoardComments">,
  //   IQueryFetchBoardArgs
  // >(FETCH_COMMENTS);

  const onLoadMore = async () => {
    if (props.data === undefined) return;

    await props.fetchMore({
      variables: {
        page: Math.ceil(props.data.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoardComments === undefined) {
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        }
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult?.fetchBoardComments,
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
