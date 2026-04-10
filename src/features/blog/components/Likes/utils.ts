export const getLikes = () => {
  const glks = localStorage.getItem("glks");

  if (glks) {
    return JSON.parse(glks);
  }

  return null;
};

export const setLike = (id: string) => {
  const likes = getLikes();

  if (likes) {
    return localStorage.setItem("glks", JSON.stringify([...likes, id]));
  }

  return localStorage.setItem("glks", JSON.stringify([id]));
};

export const removeLike = (id: string) => {
  const likes = getLikes();

  localStorage.setItem(
    "glks",
    JSON.stringify(likes.filter((it: string) => it !== id)),
  );
};
