 window.addEventListener('DOMContentLoaded', () => {
    const circle = `
                <svg class="circle">
                    <circle r="60" cx="50%" cy="50%" 
                            stroke="#B0F729" stroke-width="10"
                            fill="none"
                            stroke-linecap="round"/>
                </svg>`,
          cross = `
                <svg class="cross">
                    <line class="left" x1="40" y1="40" x2="150" y2="150"
                    stroke="red" stroke-width="10" stroke-linecap="round" />
                    <line class="right" x1="150" y1="40" x2="40" y2="150"
                        stroke="red" stroke-width="10" stroke-linecap="round" />
                </svg>
                `,
          gameContainer = document.querySelector('.game-container');

    let win = false,
        move = 'cross';

    gameContainer.addEventListener('click', e => {
        const target = e.target;

        console.log(win)

        if (target && target.classList.contains('cell')) {
            if (move === 'cross') {
                target.innerHTML = cross;
                checkWin();
                move = 'circle';
            } else {
                target.innerHTML = circle;
                checkWin();
                move = 'cross';
            }
        }
    });

    function checkWin() {
        const fields = document.querySelectorAll('.cell');

        const winCombination = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
        ];

        for (let i = 0; i < winCombination.length; i++) {
            console.log(fields[winCombination[i][0]].children[0])
            if (fields[winCombination[i][0]].children[0].classList.contains('circle') && 
                fields[winCombination[i][1]].children[0].classList.contains('circle') && 
                fields[winCombination[i][2]].children[0].classList.contains('circle')) {
                    win = 'circle';
            } else if (fields[winCombination[i][0]].children[0].classList.contains('cross') && 
            fields[winCombination[i][1]].children[0].classList.contains('cross') && 
            fields[winCombination[i][2]].children[0].classList.contains('cross')) {
                win = 'cross';
            }
        }

        return win;
    }
}); 


