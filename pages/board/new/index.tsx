import { useAuth } from "../../../src/components/commons/hooks/customs/useAuth";
import BoardWrite from "../../../src/components/units/board/write/BoardWrite.container";

export default function RegisterBoardPage() {
  useAuth();
  return <BoardWrite isEdit={false} />;
}
