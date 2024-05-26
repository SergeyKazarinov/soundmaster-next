export const downloadFile = (url: string, nameFile: string) => {
  fetch(encodeURI(url))
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok ${response.statusText}`);
      }
      return response.blob().then((blob) => {
        const contentType = response.headers.get('content-type') || 'audio/mpeg';
        const newBlob = new Blob([blob], { type: contentType });

        const link = document.createElement('a');
        link.href = URL.createObjectURL(newBlob);
        link.download = nameFile;

        link.click();

        URL.revokeObjectURL(link.href);
      });
    })
    .catch((error) => {
      console.log('Fetch error:', error);
    });
};
