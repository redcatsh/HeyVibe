import { useAuth } from "../../src/components/commons/hooks/customs/useAuth";
import MemberInfo from "../../src/components/commons/member/member.index";
export default function MyPage() {
  useAuth();
  return <MemberInfo />;
}
