let background_music = document.querySelector('.background-music')
let player1_in = document.querySelector('.player1-in-in')
let player2_in = document.querySelector('.player2-in-in')
let player2 = document.querySelector('.second-player')
let kick_sound = document.querySelector('.kick-sound')
let player1 = document.querySelector('.first-player')
let win_text = document.querySelector('.win-text')
let player2_heal = document.querySelector('.red2')
let player1_heal = document.querySelector('.red')
let mirror = document.querySelector('.mirror')
let text = document.querySelector('.text')
let full = document.querySelector('.full')
let load = document.querySelector('.load')
let player1_super = false
let player2_super = false
let player1_in_width = 300
let player2_in_width = 0
let player1_power = 10
let player2_power = 10
let player_win = 0
let player1_heal1 = 0
let player2_heal2 = 0
let player1_blow = false
let player2_blow = false
let player1_bottom = 80
let player2_bottom = 80
let player2_left = 850
let player1_left = 0
let clock = true
let game = false
let turn = true


// player 2 controls

document.body.addEventListener('keyup', function (event, keyboard) {
    if (game == true) {

        switch (event.key) {

            // PLAYER 1 ARROWS
            case 'ArrowDown':
                if (game == true) {
                    turn = false
                    kick_sound.play()
                    player2.style.backgroundImage = 'url("images/fighter-2-udar.png")'
                    player1_blow = true
                    setTimeout(() => {
                        player2.style.backgroundImage = 'url("images/fighter-2-1.png")'
                    }, 700);
                    break
                }
            case 'ArrowRight':
                if (game == true && player2_left < 850) {
                    turn = false
                    player2_left = parseInt(player2_left) + 60
                    break
                }
            case 'ArrowLeft':
                if (game == true && player2_left > 0) {
                    turn = false
                    player2_left = parseInt(player2_left) - 100
                    break
                }
            case 'ArrowUp':
                if (game == true) {
                    turn = false
                    kick_sound.play()
                    player2.style.backgroundImage = 'url("images/fighter-2-oyoq.png")'
                    player1_blow = true
                    setTimeout(() => {
                        player2.style.backgroundImage = 'url("images/fighter-2-1.png")'
                    }, 700);
                    console.log('spacebar');
                    break
                }
            case 32:
                game = true
                text.style.display = 'none'

        }
    }
})

// player 1 controls
window.addEventListener('keydown', (event) => {
    if (game == true) {
        switch (event.key) {
            case 'd':
                if (game == true && player1_left < 850) {
                    console.log('spacebar');
                    turn = false
                    player1_left = parseInt(player1_left) + 60
                    console.log('chap');
                    break
                }
            case 'a':
                if (game == true && player1_left > 0) {
                    console.log('spacebar');
                    turn = false
                    player1_left = parseInt(player1_left) - 100
                    console.log('ong');
                    break
                }
            case 'w':
                turn = false
                kick_sound.play()
                player1.style.backgroundImage = 'url("images/fighter-2-oyoq.png")'
                player2_blow = true
                setTimeout(() => {
                    player1.style.backgroundImage = 'url("images/fighter-2-1.png")'
                }, 700);
                console.log('spacebar');
                break
            case ' ':
                turn = false
                kick_sound.play()
                player1.style.backgroundImage = 'url("images/fighter-2-udar.png")'
                player2_blow = true
                setTimeout(() => {
                    player1.style.backgroundImage = 'url("images/fighter-2-1.png")'
                }, 700);
                console.log('spacebar');
                break
        }
    }
})

// new game
text.addEventListener('click', function () {
    game = true
    text.style.display = 'none'
    // background music function
    background_music.play()
})

window.addEventListener('beforeunload',function(){
    document.body.style.backgroundColor = 'red'
    load.style.display = 'flex'
    load.style.fontSize='30px'
    full.style.display='none'
    load.textContent='Loading...'
})
window.addEventListener('unload',function(){
    document.body.style.backgroundColor = 'green'
})

window.addEventListener('loadeddatastart',function(){
    document.body.style.backgroundColor = 'gray'
})

// other settings
setInterval(() => {
    // player 1 power
    if (player1_in_width>350&&game==true) {
        player1_in_width = 350
    }
    if (game==true) {
        player1_in.style.width = `${player1_in_width}px`
    }
    // player 2 power
    if (player2_in_width>350&&game==true) {
        player2_in_width = 350
    }
    if (game==true) {
        player2_in.style.width = `${player2_in_width}px`
    }

    // other animation codes
    
    player1.style.left = `${player1_left}px`
    player1.style.bottom = `${player1_bottom}px`
    player2.style.left = `${player2_left}px`
    player2.style.bottom = `${player2_bottom}px`
    if (turn == false) {
        player1.style.animation = 'none'
        player2.style.animation = 'none'
    }

    if (player1_super==true) {
        player1_super = false
        player2_power = 30
    }
    if (player2_super==true) {
        player2_super = false
        player1_power = 30
    }
    if (player1_in_width>=350) {
        player1_in.style.animation = 'box2 2s infinite'
    }
    if (player2_in_width>=350) {
        player2_in.style.animation = 'box2 2s infinite'
    }

}, 10);

// time and magic power overflow

let time = setInterval(() => {
    if (game == true && clock == true && mirror.textContent > 0) {
        mirror.textContent = parseInt(mirror.textContent) - 1
    }
    if (game==true&&mirror.textContent==0) {
        game = false
        win_text.style.display = 'flex'
        win_text.style.left = '45.8%'
        win_text.textContent = 'Tie'
    }
    if (game==true) {
        player1_in_width = parseInt(player1_in_width)+15
    }
    if (game==true) {
        player2_in_width = parseInt(player2_in_width)+15
    }
}, 1000);

// health bar function
let dead_animtion = setInterval(() => {

    // players left
    let player1_left_w = parseInt(window.getComputedStyle(player1).getPropertyValue('left'))

    let player2_left_w = parseInt(window.getComputedStyle(player2).getPropertyValue('left'))

    player1_heal.style.width = `${player1_heal1}px`
    player2_heal.style.width = `${player2_heal2}px`

    // controller health

    if (player1_in_width>=350&&game==true) {
        player1_super = true
    }
    if (player2_in_width>=350&&game==true) {
        player2_super = true
    }
    if (game==true) {
        player2_in.style.width = player2_in_width
    }

     let players_left = player1_left_w - player2_left_w

    if (players_left < -10 && players_left > -110 && player1_blow == true) {
        player1_heal1 = parseInt(player1_heal1) + player1_power
        player1_blow = false
    }
    if (players_left < -10 && players_left > -110 && player2_blow == true) {
        player2_heal2 = parseInt(player2_heal2) + player2_power
        player2_blow = false
    }
    if (player1_heal1 > 475) {
        player1_heal1 = 475
        player_win = player2
        win_text.style.display = 'flex'
        win_text.textContent = 'Player 2 win'

        game = false
    }

    if (player2_heal2 > 475) {
        player2_heal2 = 475
        player_win = player1
        win_text.style.display = 'flex'
        win_text.textContent = 'Player 1 win'
        game = false
    }
}, 10);
