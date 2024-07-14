type Chunks = (string | undefined)[][];

export function chunkArray(array: string[], chunkSize: number): Chunks {
  const result = [];
  for (let i = array.length; i > 0; i -= chunkSize) {
    const chunk = array.slice(Math.max(i - chunkSize, 0), i);
    while (chunk.length < chunkSize) {
      chunk.unshift(undefined);
    }
    result.unshift(chunk);
  }
  return result.reverse();
}

export function mergeAndTrimZeros(str: string) {
  return str.replace(/零+/g, "零").replace(/零$/g, "");
}
