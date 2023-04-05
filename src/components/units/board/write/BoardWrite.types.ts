import { ChangeEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}

export interface IBoardWriteUIProps {
  ocCheck: () => void;
  ocName: (event: ChangeEvent<HTMLInputElement>) => void;
  ocPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  ocTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  ocContents: (event: ChangeEvent<HTMLInputElement>) => void;
  ocAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  ocYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  ocFile: (event: ChangeEvent<HTMLInputElement>) => void;
  isActive: boolean;
  isEdit: boolean;
  onClickUpdate: () => void;
  data: any;
  nameEr: string;
  titleEr: string;
  contentsEr: string;
  pwCheckEr: string;
  addressEr: string;
}
