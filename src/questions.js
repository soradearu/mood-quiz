export const questions = [
  {
    question: "How are you feeling today?",
    answers: [
      {
        text: "Ready to fight a dragon",
        effects: { energy: 20 }
      },
      {
        text: "Pretty normal",
        effects: { energy: 10 }
      },
      {
        text: "I am the dragon",
        effects: { creativity: 10, energy: 10 }
      },
      {
        text: "Let me sleep",
        effects: { calmness: 10 }
      }
    ]
  },

  {
    question: "What sounds most appealing?",
    answers: [
      {
        text: "Building something cool",
        effects: { creativity: 20 }
      },
      {
        text: "Finishing tasks",
        effects: { focus: 20 }
      },
      {
        text: "Touching grass",
        effects: { calmness: 20 }
      },
      {
        text: "Talking to friends",
        effects: { social: 20 }
      }
    ]
  },

  {
    question: "Your brain right now?",
    answers: [
      {
        text: "Laser beam",
        effects: { focus: 20 }
      },
      {
        text: "Fireworks show",
        effects: { creativity: 20 }
      },
      {
        text: "Browser with 47 tabs",
        effects: { creativity: 10, energy: 10 }
      },
      {
        text: "Peaceful lake",
        effects: { calmness: 20 }
      }
    ]
  }
]