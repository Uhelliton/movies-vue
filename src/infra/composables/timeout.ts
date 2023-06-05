export async function useDelay(time: number = 700) {
  return new Promise((resolve) => setTimeout(resolve, time))
}
