export function getMood(stats) {
  let color = "#4CAF50"
  let colorName = "Green"

  if (stats.creativity > 70) {
    color = "#8A5CFF"
    colorName = "Purple"
  }

  if (stats.energy > 70) {
    color = "#FF9800"
    colorName = "Orange"
  }

  if (stats.calmness > 70) {
    color = "#2196F3"
    colorName = "Blue"
  }

  const jokes = {
    Blue: [
      "You might be feeling a little blue.",
      "Current mood: certified ocean energy.",
      "A dolphin would probably understand you."
    ],

    Purple: [
      "Creativity levels are suspiciously high.",
      "Your imagination is currently unsupervised.",
      "Reality is merely a suggestion today."
    ],

    Orange: [
      "Warning: enough energy detected to start a business.",
      "You could probably outrun your responsibilities.",
      "Caffeine fears you."
    ],

    Green: [
      "Trees approve of your vibe.",
      "You seem surprisingly balanced.",
      "Nature has entered the chat."
    ]
  }

  const joke =
    jokes[colorName][
      Math.floor(Math.random() * jokes[colorName].length)
    ]

  let className = "Balanced Explorer"

  if (stats.creativity > 70)
    className = "Dream Architect"

  if (stats.energy > 70)
    className = "Thunder Runner"

  if (stats.calmness > 70)
    className = "Silent Lighthouse"

  return {
    color,
    colorName,
    joke,
    className
  }
}