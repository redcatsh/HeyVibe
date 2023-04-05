import InfiniteScrollUI from "./InfiniteScroll.presenter";

export default function InfiniteScrollPage(props) {
  const onLoadMore = async () => {
    if (props.data === undefined) return;

    await props.fetchMore({
      variables: {
        page: Math.ceil(props.data.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditemQuestions === undefined) {
          return {
            fetchUseditemQuestions: [...prev.fetchUseditemQuestions],
          };
        }
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult?.fetchUseditemQuestions,
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
