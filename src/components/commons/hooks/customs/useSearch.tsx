export const useSearch = () => {
  const [keyword, setKeyword] = useState("");

  const onChangeSearch = (value: string) => {
    setKeyword(value);
  };

  return {
    keyword,
    onChangeSearch,
  };
};
