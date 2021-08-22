const truncate = (text: string, lenght: number) => {
  return text.length > lenght ? text.substr(0, lenght - 1) + "..." : text;
};

export default truncate;
