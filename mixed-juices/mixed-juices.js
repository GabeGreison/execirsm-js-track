export function timeToMixJuice(name) {
    switch (name) {
        case 'Pure Strawberry Joy':
            return 0.5
            break;
        case 'Energizer':
            return 1.5
            break;
        case 'Green Garden':
            return 1.5
            break;
        case 'Tropical Island':
            return 3
            break;
        case 'All or Nothing':
            return 5
            break;
        default:
            return 2.5
    }
}

export function limesToCut(wedgesNeeded, limes) {
    let wedgesCut = 0;
    let limesUsed = 0;
    while (limes.length && wedgesCut < wedgesNeeded) {
        let nextLime = limes.shift();
        limesUsed++;
        switch (nextLime) {
            case 'small':
                wedgesCut += 6;
                break;
            case 'medium':
                wedgesCut += 8;
                break;
            case 'large':
                wedgesCut += 10;
                break;
        }
    }
    return limesUsed;
}


export function remainingOrders(timeLeft, orders) {
    let timeRemaining = 0;

    while (timeRemaining < timeLeft) {
        let nextOrder = orders.shift();
        switch (nextOrder) {
            case 'Pure Strawberry Joy':
                timeRemaining += 0.5
                break;
            case 'Energizer':
                timeRemaining += 1.5
                break;
            case 'Green Garden':
                timeRemaining += 1.5
                break;
            case 'Tropical Island':
                timeRemaining += 3
                break;
            case 'All or Nothing':
                timeRemaining += 5
                break;
            default:
                timeRemaining += 2.5
        }
    }
    return orders;
}