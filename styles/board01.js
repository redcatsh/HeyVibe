import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 30px auto;
  max-width: 800px;
  padding: 60px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const FormWrap = styled.div`
  margin-top: 30px;
`;

export const Title = styled.h3`
  color: #000;
  font-size: 36px;
  margin-top: 0;
  text-align: center;
`;

export const HiBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
`;
export const HalfBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`;
export const InputTitle = styled.label`
  color: #000;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
  display: block;
`;

export const HalfInput = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding: 10px;
`;

export const InputWrap = styled.div`
  margin-bottom: 30px;
`;

export const AddBox = styled.div`
  display: flex;
`;

export const AddrInput = styled.input`
  width: 11%;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-bottom: 10px;
  padding: 10px;
`;

export const AddWidInput = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-bottom: 10px;
  padding: 10px;
`;

export const AddButton = styled.button`
  background-color: #000;
  height: 52px;
  color: #fff;
  border: none;
  margin-left: 10px;
`;

export const PhotoBox = styled.div`
  display: flex;
`;
export const GrayB = styled.div`
  background-color: #bdbdbd;
  margin-right: 15px;
`;

export const RadioWrap = styled.div`
  display: flex;
  align-items: center;
  line-height: 20px;
`;

export const RadioBox = styled.div`
  margin-right: 15px;
`;

export const RadInput = styled.input`
  margin-top: 0;
  margin-right: 5px;
  padding: 10px;
`;

export const SubmitBtn = styled.button`
  background-color: #ffd600;
  width: 180px;
  height: 52px;
  font-weight: 500;
  border: none;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    background-color: #e7c203;
  }
`;

export const WidInput = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding: 10px;
`;

export const ContentArea = styled.textarea`
  height: 480px;
  border: 1px solid #bdbdbd;
  width: 100%;
  padding: 10px;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const SubmitWrap = styled.div`
  text-align: center;
`;

export const Error = styled.div`
  color: red;
  font-size: 14px;
`;

export const GbLabel = styled.label`
  display: inline-block;
  padding: 25px 32px;
  color: #4f4f4f;
  font-size: 25px;
  line-height: normal;
  vertical-align: middle;
  background-color: #bdbdbd;
  cursor: pointer;
`;

export const Upload = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

/* ROUTED PAGE */

export const BoardInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;
export const BiLeft = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BiRight = styled.div`
  display: flex;
  flex-direction: row;
  & > img:first-of-type {
    margin-right: 15px;
  }
  & > img {
    object-fit: contain;
    cursor: pointer;
  }
`;
export const UserImg = styled.div`
  display: block;
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 15px;
  color: #828282;
`;
export const UserName = styled.h5`
  font-size: 24px;
  color: #000;
  font-weight: 500;
  margin: 0;
`;
export const CreateDate = styled.p`
  font-size: 16px;
  margin-bottom: 0;
  margin-top: 5px;
`;
export const BoardBody = styled.div`
  display: block;
`;
export const BoardTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  padding-top: 60px;
  margin-top: 0;
`;
export const BoardContents = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
export const BoardLikes = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

export const BLike = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  align-items: center;
  cursor: pointer;
  & > img {
    width: 63%;
  }
`;
export const BDislike = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  align-items: center;
  cursor: pointer;
  & > img {
    width: 59%;
  }
`;
export const LikeCount = styled.p`
  font-size: 18px;
  color: #ffd600;
  font-weight: 400;
  margin-bottom: 0;
  margin-top: 5px;
`;
export const DislikeCount = styled.p`
  font-size: 18px;
  color: #828282;
  font-weight: 400;
  margin-bottom: 0;
  margin-top: 5px;
`;
