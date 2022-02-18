export function daysTillNextTestAlgorithm(recent, x, a = 3.0, b = -0.8, c = 0.28, d = 0.02, theta = 0.2) {
  if (recent < 4) {
    return 1
  }

  const history = [recent, ...x]

  // Calculate latest correctness streak
  let streak = 0
  for (let i = 0; i < history.length; i++) {
    if (history[i] > 3) {
      streak++
    } else {
      break
    }
  }

  // Sum up the history
  const historySum = history.reduce(
    (prev, val) => prev + (b + (c * val) + (d * val * val)),
    0
  )

  return a * Math.pow(Math.max(1.3, 2.5 + historySum), theta * streak)
};
