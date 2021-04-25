const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

let state = {};

function startGame() {
  state = {};
  showTextNode(1);
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach((option) => {
    if (showOption(option)) {
      const button = document.createElement('button');
      button.innerText = option.text;
      button.classList.add('btn');
      button.addEventListener('click', () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  });
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame();
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}

const textNodes = [
  {
    id: 1,
    text:
      'You wake up in a deserted island and see a strange notebook with the title Death Note near you.',
    options: [
      {
        text: 'Take the notebook',
        setState: { deathNote: true },
        nextText: 2,
      },
      {
        text: 'Leave the notebook.',
        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text:
      'You venture forth in search of answers to where you are when a Shinigami (Grim Reaper) appears and tells you about the Death Note and how a person whose name is written on the Death Note will die in the next 40 seconds given that you remember the face of the person you want to kill. But there is a catch. The person who uses the Death Note will be stuck in the world of Shinigami after death.',
    options: [
      {
        text: 'Agree to use the Death Note.',
        requiredState: (currentState) => currentState.deathNote,
        setState: { deathNote: true },
        nextText: 3,
      },

      {
        text:
          "Tell the Shinigami that you don't posess such a notebook and walk away.",
        nextText: 3,
      },
    ],
  },
  {
    id: 3,
    text:
      'After talking to the Shinigami you start to feel tired and stumble upon a small town. There you see a wanted poster of a famous serial killer named Joseph who is on the loose and killing innocent people. He is wanted by the king of the island, dead or alive. The king will grant any wish of the person who brings an end to the situation.',
    options: [
      {
        text: 'Explore the Mystery of the killer.',
        nextText: 4,
      },
      {
        text: 'Find a room to sleep at in the town',
        nextText: 5,
      },
      {
        text: 'Find some hay in a stable to sleep in',
        nextText: 6,
      },
    ],
  },
  {
    id: 4,
    text:
      'You are so tired that you fall asleep while exploring and die by falling into a river nearby.',
    options: [
      {
        text: 'Restart',
        nextText: -1,
      },
    ],
  },
  {
    id: 5,
    text:
      'Without any money to buy a room you break into the nearest inn and fall asleep. After a few hours of sleep the owner of the inn finds you and has the town guard lock you in a cell.',
    options: [
      {
        text: 'Restart',
        nextText: -1,
      },
    ],
  },
  {
    id: 6,
    text:
      'You wake up well rested and full of energy ready to explore the mystery of Joseph.',
    options: [
      {
        text:
          'Visit the nearest place where you heard some shady rumours of joseph being seen.',
        nextText: 7,
      },
    ],
  },
  {
    id: 7,
    text:
      'While exploring the murder site you come across Joseph himself when he is cleaning up the mess he made by burning a dead body.',
    options: [
      {
        text: 'Try to run',
        nextText: 8,
      },
      {
        text: 'Try to fight him',
        nextText: 9,
      },

      {
        text:
          'Run away in the nearby streets and kill him by writing his name in the death note.',
        requiredState: (currentState) => currentState.deathNote,
        nextText: 10,
      },
    ],
  },
  {
    id: 8,
    text:
      'Your attempts to run are in vain and Joseph catches you and kills you brutally by chopping off your limbs and feeding them to you after dipping them in slow killing poison.',
    options: [
      {
        text: 'Restart',
        nextText: -1,
      },
    ],
  },
  {
    id: 9,
    text: "You foolishly thought you could fight a 6'8 buffed up dude.",
    options: [
      {
        text: 'Restart',
        nextText: -1,
      },
    ],
  },

  {
    id: 10,
    text:
      'You stare at joseph and laugh hysterically while he suffers and dies in front of your eyes. Now bring his dead body to the king and he asks you to decide your reward.',
    options: [
      {
        text: 'Ask to make you the king.',
        nextText: 11,
      },
      {
        text: 'Ask to send you back home.',
        nextText: 12,
      },
    ],
  },
  {
    id: 11,
    text:
      'The king gets infuriated and asks the guards to take you to the prison while he says "Kill me before the dawn and you will be the king" sarcastically.',
    options: [
      {
        text: 'Stay in the cell, get released and go back home peacefully.',
        nextText: 12,
      },
      {
        text: 'Kill the king using the Death Note and claim the kingdom.',
        nextText: 13,
      },
    ],
  },

  {
    id: 12,
    text:
      'The king sends you back home and you live the rest of your life peacefully again.',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1,
      },
    ],
  },

  {
    id: 13,
    text:
      "You idiot! You don't even know his name. You freak out and a guard finds you using the death note. you burn the death note in hysteria and the guard kills you by ripping your gut out.",
    options: [
      {
        text: 'You are an idiot. Play Again.',
        nextText: -1,
      },
    ],
  },
];

startGame();
