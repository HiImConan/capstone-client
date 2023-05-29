export const ALLOW_FILE_EXTENSION = "jpg,jpeg,png";
export const FILE_SIZE_MAX_LIMIT = 5 * 1024 * 1024; // 5MB

export const fileExtensionValid = ({ name }: { name: string }): boolean => {
  const extension = removeFileName(name);
  if (!(ALLOW_FILE_EXTENSION.indexOf(extension) > -1) || extension === "")
    return false;
  return true;
};

const removeFileName = (originalFileName: string): string => {
  const lastIndex = originalFileName.lastIndexOf(".");
  if (lastIndex < 0) return "";
  return originalFileName.substring(lastIndex + 1).toLowerCase();
};
