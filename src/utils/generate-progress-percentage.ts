export function GenerateProgressPercentage(total: number, completed: number) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0
  return percentage
}