import { EventBlock } from '@/app/_types/events'

export const groupByDay = (blocks: EventBlock[]): Map<string, EventBlock[]> => {
  const groups = new Map<string, EventBlock[]>()
  for (const block of blocks) {
    const day = block.startTime.slice(0, 10)
    if (!groups.has(day)) groups.set(day, [])
    groups.get(day)?.push(block)
  }
  return groups
}
