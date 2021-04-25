function determine_winner() {
  // let box1, box2, box3, box4, box5, box6, box7, box8, box9;
  const box1 = document.getElementById('box1').value;
  const box2 = document.getElementById('box2').value;
  const box3 = document.getElementById('box3').value;
  const box4 = document.getElementById('box4').value;
  const box5 = document.getElementById('box5').value;
  const box6 = document.getElementById('box6').value;
  const box7 = document.getElementById('box7').value;
  const box8 = document.getElementById('box8').value;
  const box9 = document.getElementById('box9').value;

  if (box1 === 'X' && box2 === 'X' && box3 === 'X') {
    document.getElementById('turn-indicator').innerHTML = 'Player X won';
    document.getElementById('box4').disabled = true;
    document.getElementById('box5').disabled = true;
    document.getElementById('box6').disabled = true;
    document.getElementById('box7').disabled = true;
    document.getElementById('box8').disabled = true;
    document.getElementById('box9').disabled = true;
    window.alert('Player X won');
  } else if (box1 === 'X' && box4 === 'X' && box7 === 'X') {
    document.getElementById('turn-indicator').innerHTML = 'Player X won';
    document.getElementById('box2').disabled = true;
    document.getElementById('box3').disabled = true;
    document.getElementById('box5').disabled = true;
    document.getElementById('box6').disabled = true;
    document.getElementById('box8').disabled = true;
    document.getElementById('box9').disabled = true;

    window.alert('Player X won');
  } else if (box7 === 'X' && box8 === 'X' && box9 === 'X') {
    document.getElementById('turn-indicator').innerHTML = 'Player X won';
    document.getElementById('box1').disabled = true;
    document.getElementById('box2').disabled = true;
    document.getElementById('box3').disabled = true;
    document.getElementById('box4').disabled = true;
    document.getElementById('box5').disabled = true;
    document.getElementById('box6').disabled = true;
    window.alert('Player X won');
  } else if (box3 === 'X' && box6 === 'X' && box9 === 'X') {
    document.getElementById('turn-indicator').innerHTML = 'Player X won';
    document.getElementById('box1').disabled = true;
    document.getElementById('box2').disabled = true;
    document.getElementById('box4').disabled = true;
    document.getElementById('box5').disabled = true;
    document.getElementById('box7').disabled = true;
    document.getElementById('box8').disabled = true;
    window.alert('Player X won');
  } else if (box1 === 'X' && box5 === 'X' && box9 === 'X') {
    document.getElementById('turn-indicator').innerHTML = 'Player X won';
    document.getElementById('box2').disabled = true;
    document.getElementById('box3').disabled = true;
    document.getElementById('box4').disabled = true;
    document.getElementById('box6').disabled = true;
    document.getElementById('box7').disabled = true;
    document.getElementById('box8').disabled = true;
    window.alert('Player X won');
  } else if (box3 === 'X' && box5 === 'X' && box7 === 'X') {
    document.getElementById('turn-indicator').innerHTML = 'Player X won';
    document.getElementById('box1').disabled = true;
    document.getElementById('box2').disabled = true;
    document.getElementById('box4').disabled = true;
    document.getElementById('box6').disabled = true;
    document.getElementById('box8').disabled = true;
    document.getElementById('box9').disabled = true;
    window.alert('Player X won');
  } else if (box2 === 'X' && box5 === 'X' && box8 === 'X') {
    document.getElementById('turn-indicator').innerHTML = 'Player X won';
    document.getElementById('box1').disabled = true;
    document.getElementById('box3').disabled = true;
    document.getElementById('box4').disabled = true;
    document.getElementById('box6').disabled = true;
    document.getElementById('box7').disabled = true;
    document.getElementById('box9').disabled = true;
    window.alert('Player X won');
  } else if (box4 === 'X' && box5 === 'X' && box6 === 'X') {
    document.getElementById('turn-indicator').innerHTML = 'Player X won';
    document.getElementById('box1').disabled = true;
    document.getElementById('box2').disabled = true;
    document.getElementById('box3').disabled = true;
    document.getElementById('box7').disabled = true;
    document.getElementById('box8').disabled = true;
    document.getElementById('box9').disabled = true;
    window.alert('Player X won');
  } else if (box1 === '0' && box2 === '0' && box3 === '0') {
    document.getElementById('turn-indicator').innerHTML = 'Player 0 won';
    document.getElementById('box4').disabled = true;
    document.getElementById('box5').disabled = true;
    document.getElementById('box6').disabled = true;
    document.getElementById('box7').disabled = true;
    document.getElementById('box8').disabled = true;
    document.getElementById('box9').disabled = true;
    window.alert('Player 0 won');
  } else if (box1 === '0' && box4 === '0' && box7 === '0') {
    document.getElementById('turn-indicator').innerHTML = 'Player 0 won';
    document.getElementById('box2').disabled = true;
    document.getElementById('box3').disabled = true;
    document.getElementById('box5').disabled = true;
    document.getElementById('box6').disabled = true;
    document.getElementById('box8').disabled = true;
    document.getElementById('box9').disabled = true;
    window.alert('Player 0 won');
  } else if (box7 === '0' && box8 === '0' && box9 === '0') {
    document.getElementById('turn-indicator').innerHTML = 'Player 0 won';
    document.getElementById('box1').disabled = true;
    document.getElementById('box2').disabled = true;
    document.getElementById('box3').disabled = true;
    document.getElementById('box4').disabled = true;
    document.getElementById('box5').disabled = true;
    document.getElementById('box6').disabled = true;
    window.alert('Player 0 won');
  } else if (box3 === '0' && box6 === '0' && box9 === '0') {
    document.getElementById('turn-indicator').innerHTML = 'Player 0 won';
    document.getElementById('box1').disabled = true;
    document.getElementById('box2').disabled = true;
    document.getElementById('box4').disabled = true;
    document.getElementById('box5').disabled = true;
    document.getElementById('box7').disabled = true;
    document.getElementById('box8').disabled = true;
    window.alert('Player 0 won');
  } else if (box1 === '0' && box5 === '0' && box9 === '0') {
    document.getElementById('turn-indicator').innerHTML = 'Player 0 won';
    document.getElementById('box2').disabled = true;
    document.getElementById('box3').disabled = true;
    document.getElementById('box4').disabled = true;
    document.getElementById('box6').disabled = true;
    document.getElementById('box7').disabled = true;
    document.getElementById('box8').disabled = true;
    window.alert('Player 0 won');
  } else if (box3 === '0' && box5 === '0' && box7 === '0') {
    document.getElementById('turn-indicator').innerHTML = 'Player 0 won';
    document.getElementById('box1').disabled = true;
    document.getElementById('box2').disabled = true;
    document.getElementById('box4').disabled = true;
    document.getElementById('box6').disabled = true;
    document.getElementById('box8').disabled = true;
    document.getElementById('box9').disabled = true;
    window.alert('Player 0 won');
  } else if (box2 === '0' && box5 === '0' && box8 === '0') {
    document.getElementById('turn-indicator').innerHTML = 'Player 0 won';
    document.getElementById('box1').disabled = true;
    document.getElementById('box3').disabled = true;
    document.getElementById('box4').disabled = true;
    document.getElementById('box6').disabled = true;
    document.getElementById('box7').disabled = true;
    document.getElementById('box9').disabled = true;
    window.alert('Player 0 won');
  } else if (box4 === '0' && box5 === '0' && box6 === '0') {
    document.getElementById('turn-indicator').innerHTML = 'Player 0 won';
    document.getElementById('box1').disabled = true;
    document.getElementById('box2').disabled = true;
    document.getElementById('box3').disabled = true;
    document.getElementById('box7').disabled = true;
    document.getElementById('box8').disabled = true;
    document.getElementById('box9').disabled = true;
    window.alert('Player 0 won');
  } else if (
    (box1 === 'X' || box1 === '0') &&
    (box2 === 'X' || box2 === '0') &&
    (box3 === 'X' || box3 === '0') &&
    (box4 === 'X' || box4 === '0') &&
    (box5 === 'X' || box5 === '0') &&
    (box6 === 'X' || box6 === '0') &&
    (box7 === 'X' || box7 === '0') &&
    (box8 === 'X' || box8 === '0') &&
    (box9 === 'X' || box9 === '0')
  ) {
    document.getElementById('turn-indicator').innerHTML = 'Match Tie';
    window.alert('Match Tie');
  } else {
    if (player === 'X') {
      document.getElementById('turn-indicator').innerHTML = 'Player X Turn';
    } else {
      document.getElementById('turn-indicator').innerHTML = 'Player 0 Turn';
    }
  }
}

function reload_boxes() {
  location.reload();

  let boxes = document.getElementsByTagName('input');

  boxes.array.forEach((element) => {
    element.value = '';
  });
}

let player = 'X';

function box_clicked() {
  let target_box = event.target;

  if (player === 'X') {
    target_box.value = 'X';

    player = '0';
  } else {
    target_box.value = '0';
    player = 'X';
  }
  target_box.disabled = true;
}
