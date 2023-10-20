import validator from 'validator';

const isFolder = (val) => {
  const FolderPattern = /^(?:[A-Za-z]:\/)?[\w\/]+\w+$/;
  return FolderPattern.test(val);
}

const isPortRange = (val) => {
  const PortRangePattern = /^(102[4-9]|10[3-9]\d|1[1-9]\d{2}|[2-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/
  return PortRangePattern.test(val);
}

export { isFolder, isPortRange };