function extractFile(string) {
  const fileNameStart = string.lastIndexOf('\\') + 1;
  const fileNameEnd = string.lastIndexOf('.');
  const fileName = string.substring(fileNameStart, fileNameEnd);
  const fileExtension = string.substring(fileNameEnd + 1);
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${fileExtension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');