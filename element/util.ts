export const formatText = (str?: String) => {
  const text = str?.replaceAll(/\/n/g, "\n");
  return text;
};
