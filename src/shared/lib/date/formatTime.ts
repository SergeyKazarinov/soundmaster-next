export const formatTime = (seconds: number) => {
  const minute = Math.floor(seconds / 60);
  const second = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0');

  return `${minute}:${second}`;
};
