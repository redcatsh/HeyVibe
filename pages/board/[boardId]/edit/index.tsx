import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
      likeCount
      dislikeCount
      createdAt
      updatedAt
      deletedAt
      youtubeUrl
      images
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export default function RegisterBoardPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  return <BoardWrite isEdit={true} data={data} />;
}
