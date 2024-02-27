let level = ''

const ranked = (victories, defeats) => {
    let rankedBalance = victories - defeats
    return rankedBalance
}

const rankedBalance = ranked(120, 21)

if (rankedBalance <= 10) {
    level = 'Iron'
} else if (rankedBalance >= 11 && rankedBalance <= 20) {
    level = 'Bronze'
} else if (rankedBalance >= 21 && rankedBalance <= 50) {
    level = 'Silver'
} else if (rankedBalance >= 51 && rankedBalance <= 80) {
    level = 'Gold'
} else if (rankedBalance >= 81 && rankedBalance <= 90) {
    level = 'Diamond'
} else if (rankedBalance >= 91 && rankedBalance <= 100) {
    level = 'Lengendary'
} else {
    level = 'Imortal'
}

console.log("O Herói tem Saldo de vitorias de: " + rankedBalance + " e está no nível " + level)
