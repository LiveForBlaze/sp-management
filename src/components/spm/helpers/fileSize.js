export const getFileSizeName = (size) => {
  if (size > 1048576) {
    return `${parseFloat(size/(1024*1024)).toFixed(2)}MB`
  } else {
    return `${parseFloat(size/(1024)).toFixed(2)}KB`
  }
}
