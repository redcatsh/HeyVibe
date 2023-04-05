import InfiniteScrollUI from "./InfiniteScroll.presenter";

export default function InfiniteScrollPage(props) {
  const onLoadMore = async () => {
    if (props.data === undefined) return;

    await props.fetchMore({
      variables: {
        page:
          Math.ceil(props.data.fetchUseditemQuestionAnswers.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditemQuestionAnswers === undefined) {
          return {
            fetchUseditemQuestionAnswers: [
              ...prev.fetchUseditemQuestionAnswers,
            ],
          };
        }
        return {
          fetchUseditemQuestionsAnswers: [
            ...prev.fetchUseditemQuestionAnswers,
            ...fetchMoreResult?.fetchUseditemQuestionAnswers,
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
