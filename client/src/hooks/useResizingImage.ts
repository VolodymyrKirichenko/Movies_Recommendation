export const useResizingImage = () => {
  function replaceImagePath(imageUrl: string, newSize: string) {
    const parts = imageUrl.split('/');
    const index = parts.findIndex((part) => part.startsWith('w'));

    if (index !== -1) {
      parts[index] = newSize;

      return parts.join('/');
    }

    return imageUrl;
  }

  return {
    replaceImagePath,
  };
};
