export function constructUrl(pathName, search, pageNum) {
  const queryString = new URLSearchParams(search);
  queryString.set("page", pageNum);

  return `${pathName}?${queryString.toString()}`;
}
