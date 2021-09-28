const modal_button = document.getElementById('modal-button')
const modal_div = document.querySelector('.modal')
const modalClose_span = document.querySelectorAll('.modal-close')

modal_button.addEventListener('click', () => {
    modal_div.classList.add('animate__fadeIn')
    modal_div.classList.remove('none')
    modal_div.classList.remove('animate__fadeOut')
})

modalClose_span.forEach(el => {
    el.addEventListener('click', () => {
        modal_div.classList.remove('animate__fadeIn')
        modal_div.classList.add('animate__fadeOut')
        setTimeout(() => {
            modal_div.classList.add('none')
        }, 500);
    })
})

const score_p = document.getElementById('score')

const choice_div = document.querySelector('.choice')
const c_rock_div = document.getElementById('c-rock')
const c_paper_div = document.getElementById('c-paper')
const c_scissors_div = document.getElementById('c-scissors')
const c_lizard_div = document.getElementById('c-lizard')
const c_spock_div = document.getElementById('c-spock')


const battle_div = document.querySelector('.battle-container')
const response_div = document.querySelectorAll('.response')
const user_action_div = document.querySelector('.user-action')
const comp_action_div = document.querySelector('.comp-action')
const response_p = document.querySelectorAll('.response-text')
const restart_button = document.querySelectorAll('.restart')

const effect=document.createElement('div')
effect.id='effect'
effect.className='flex items-center justify-center w-[180%] h-[180%] rounded-full  absolute animate__animated  animate__faster animate__rotateIn'
effect.style='z-index: -1; background-color: rgba(255, 255, 255, 0.05); '
effect.innerHTML=`
<div class="flex items-center justify-center w-[90%] h-[90%] rounded-full  absolute" style=" background-color: rgba(255, 255, 255, 0.04); ">
<div class="flex items-center justify-center w-[90%] h-[90%] rounded-full  absolute" style=" background-color: rgba(255, 255, 255, 0.03); ">
<div class="flex items-center justify-center w-[90%] h-[90%] rounded-full  absolute" style=" background-color: rgba(255, 255, 255, 0.01); ">
</div>
</div>
</div>
`


let userChoice = ''
let score = 0
let comp_counter=1
let compCohice = ''

const compVisibleSelected= (selected) => {
    comp_action_div.children[1].classList.add('none')
    comp_action_div.children[2].classList.add('none')
    comp_action_div.children[3].classList.add('none')
    comp_action_div.children[4].classList.add('none')
    comp_action_div.children[5].classList.add('none')
    selected.classList.remove('none')
}

const randomCompAnimation=()=>{
    if(comp_counter==1){
        compVisibleSelected(comp_action_div.children[comp_counter])
        comp_counter++
    }
    else if(comp_counter==2){
        compVisibleSelected(comp_action_div.children[comp_counter])
        comp_counter++
    }
    else if(comp_counter==3){
        compVisibleSelected(comp_action_div.children[comp_counter])
        comp_counter++
    }
    else if(comp_counter==4){
        compVisibleSelected(comp_action_div.children[comp_counter])
        comp_counter++
    }
    else{
        compVisibleSelected(comp_action_div.children[comp_counter])
        comp_counter=1
    }
}

const startBattle = () => {
    battle_div.classList.add('animate__bounceIn')
    battle_div.classList.remove('animate__bounceOut')
    choice_div.classList.remove('animate__bounceIn')
    choice_div.classList.add('animate__bounceOut')
    setTimeout(() => {
        choice_div.classList.add('none')
        battle_div.classList.remove('none')
    }, 500);
}

const getComputerChoice= () => {
    const choices=['rock','paper','scissors','lizard','spock']
    const choice=choices[Math.floor(Math.random()*5)]
    if(choice=='rock'){
        compVisibleSelected(comp_action_div.children[1])
    }
    else if(choice=='paper'){
        compVisibleSelected(comp_action_div.children[2])
    }
    else if(choice=='scissors'){
        compVisibleSelected(comp_action_div.children[3])
    }
    else if(choice=='lizard'){
        compVisibleSelected(comp_action_div.children[4])
    }
    else {
        compVisibleSelected(comp_action_div.children[5])
    }
    return choice
}

const visibleUserChoice= (selected) => {
    user_action_div.children[1].classList.add('none')
    user_action_div.children[2].classList.add('none')
    user_action_div.children[3].classList.add('none')
    user_action_div.children[4].classList.add('none')
    user_action_div.children[5].classList.add('none')
    selected.classList.remove('none')
}

const getUserChoice=()=>{
    if(userChoice=='rock'){
        visibleUserChoice(user_action_div.children[1])
    }
    else if(userChoice=='paper'){
        visibleUserChoice(user_action_div.children[2])
    }
    else if(userChoice=='scissors'){
        visibleUserChoice(user_action_div.children[3])
    }
    else if(userChoice=='lizard'){
        visibleUserChoice(user_action_div.children[4])
    }
    else {
        visibleUserChoice(user_action_div.children[5])
    }
}

c_rock_div.addEventListener('click', () => {
    userChoice='rock'
    startBattle()
    getUserChoice()
    game()
})

c_paper_div.addEventListener('click', () => {
    userChoice='paper'
    startBattle()
    getUserChoice()
    game()
})

c_scissors_div.addEventListener('click', () => {
    userChoice='scissors'
    startBattle()
    getUserChoice()
    game()
})

c_lizard_div.addEventListener('click', () => {
    userChoice='lizard'
    startBattle()
    getUserChoice()
    game()
})

c_spock_div.addEventListener('click', () => {
    userChoice='spock'
    startBattle()
    getUserChoice()
    game()
})

const game=()=>{
    let random_comp_animation= setInterval(randomCompAnimation,200)
   
    setTimeout(() => {
        compCohice=getComputerChoice()
        clearInterval(random_comp_animation)
        if(userChoice=='rock' && compCohice == 'scissors' || userChoice=='rock' && compCohice == 'lizard' || userChoice=='lizard' && compCohice == 'paper' || userChoice=='lizard' && compCohice == 'spock' || userChoice=='spock' && compCohice == 'rock' || userChoice=='spock' && compCohice == 'scissors' || userChoice=='scissors' && compCohice == 'paper' || userChoice=='scissors' && compCohice == 'lizard' || userChoice=='paper' && compCohice == 'spock' || userChoice=='paper' && compCohice == 'rock'){
            response_div.forEach(el=>{
                el.classList.remove('none')
            })
            response_p.forEach(el=>{
                el.textContent='YOU WIN'
            })
            score++
            score_p.textContent=score
            if(userChoice=='rock'){user_action_div.children[1].appendChild(effect)}
            else if(userChoice=='paper'){user_action_div.children[2].appendChild(effect)}
            else if(userChoice=='scissors'){user_action_div.children[3].appendChild(effect)}
            else if(userChoice=='lizard'){user_action_div.children[4].appendChild(effect)}
            else{user_action_div.children[5].appendChild(effect)}
        }
        else if(userChoice==compCohice){
            response_div.forEach(el=>{
                el.classList.remove('none')
            })
            response_p.forEach(el=>{
                el.textContent='DRAW'
            })
        }
        else{
            if(compCohice=='rock'){comp_action_div.children[1].appendChild(effect)}
            else if(compCohice=='paper'){comp_action_div.children[2].appendChild(effect)}
            else if(compCohice=='scissors'){comp_action_div.children[3].appendChild(effect)}
            else if(compCohice=='lizard'){comp_action_div.children[4].appendChild(effect)}
            else {comp_action_div.children[5].appendChild(effect)}
            response_div.forEach(el=>{
                el.classList.remove('none')
            })
            response_p.forEach(el=>{
                el.textContent='YOU LOSE'
            })
            score--
            score_p.textContent=score
        }
            
    }, 2000);
}


// restart
response_div.forEach(el => {
    el.addEventListener('click', () => {
        battle_div.classList.remove('animate__bounceIn')
        battle_div.classList.add('animate__bounceOut')
        choice_div.classList.add('animate__bounceIn')
        choice_div.classList.remove('animate__bounceOut')
        setTimeout(() => {
            choice_div.classList.remove('none')
            battle_div.classList.add('none')
            response_div.forEach(el=>{
                el.classList.add('none')
            })
            if(document.getElementById('effect'))document.getElementById('effect').remove()
        }, 500);
    })
})