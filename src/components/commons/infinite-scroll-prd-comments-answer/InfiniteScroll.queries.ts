import { gql } from "@apollo/client";

export const FETCH_USEDITEM_QUESTIONS_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(
      page: $page
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      user {
        name
      }
      contents
      createdAt
    }
  }
`;
