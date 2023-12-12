export function filesize(bytes: number | null | undefined): string {
  if (bytes == null) {
    return '';
  }

  let byteUnits = ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let i = -1;

  do {
    bytes /= 1024;
    i++;
  } while (bytes > 1024);

  return Math.max(bytes, 0.1).toFixed(1) + byteUnits[i];
}
