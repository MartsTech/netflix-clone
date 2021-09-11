const truncate = (text: string, lenght: number) =>
  text.length > lenght ? text.substr(0, lenght - 1) + "..." : text;

export default truncate;
