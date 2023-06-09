import { Modal } from "antd";

export const checkValidationFile = (file?: File) => {
  if (typeof file === "undefined") {
    Modal.error({ content: "파일이 없습니다." });
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    Modal.error({ content: "파일이 너무 큽니다.(제한: 5MB)" });
    return false;
  }

  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    Modal.error({
      content: "파일 확장자가 올바르지 않습니다.(png, jpeg만 가능)",
    });
    return false;
  }
  return true;
};
