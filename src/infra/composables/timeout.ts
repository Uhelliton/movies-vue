export async function useDelay(time: number = 300) {
  return new Promise((resolve) => setTimeout(resolve, time))
}
