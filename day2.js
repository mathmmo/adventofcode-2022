const games = [
    'C X', //Tesoura x Pedra 1= Win  6  =  7           || Lost 0 Tesoura  x Papel    2 = 2
    'C Y', //Tesoura x Papel 2= Loss 0  =  2           || Draw 3 Tesoura  x Tesoura  3 = 6
    'C X', //Tesoura x Pedra 1= Win  6  =  7           || Lost 0 Tesoura  x Papel    2 = 2
    'B X', //Papel x Pedra   1= Loss 0  =  1           || Lost 0 Papel    x Pedra    1 = 1
    'B Z', //Papel x Tesoura 3= Win  6  =  9           || Win  6 Papel    x Tesoura  3 = 9
    'A Z',
    'C Y',
    'C Z',
    'B Z',
    'C X',
    'B Y',
    'C Y',
    'C Y',
    'A Y',
    'C Y',
    'C Y',
    'C Z',
    'C X',
    'B Z',
    'C Y',
    'A Y',
    'A Y',
    'C Z',
    'B Y',
    'A Y',
    'C Z',
    'C Y',
    'A Y',
    'A Y',
    'B Y',
    'C Y',
    'C Z',
    'C Y',
    'B X',
    'B Z',
    'C Y',
    'B Z',
    'A X',
    'C Z',
    'A Y',
    'B Y',
    'C Y',
    'C Y',
    'B Z',
    'B Y',
    'A Z',
    'C X',
    'C X',
    'C Y',
    'C X',
    'B Z',
    'A Y',
    'B X',
    'B Z',
    'C Z',
    'C X',
    'C X',
    'B Z',
    'A Y',
    'B Y',
    'C Y',
    'C Y',
    'A Y',
    'C X',
    'A Y',
    'B Z',
    'C Y',
    'C Y',
    'B Y',
    'C Y',
    'A Z',
    'A Z',
    'B X',
    'A Y',
    'C Y',
    'A Y',
    'C Y',
    'C Y',
    'C X',
    'C Y',
    'B Z',
    'C Y',
    'C Z',
    'C X',
    'B X',
    'C Y',
    'C Y',
    'C X',
    'C Z',
    'A Y',
    'C X',
    'B Z',
    'C X',
    'A Y',
    'B Y',
    'C Y',
    'A Y',
    'A Y',
    'A Y',
    'B Y',
    'C Y',
    'A Y',
    'A Y',
    'C Z',
    'C Y',
    'B Y',
    'C X',
    'C Y',
    'B Z',
    'B Z',
    'C X',
    'C Y',
    'C X',
    'C Y',
    'C Y',
    'A Y',
    'C Y',
    'C X',
    'C Y',
    'C Y',
    'B Y',
    'B Z',
    'A Y',
    'B Y',
    'A Y',
    'A Y',
    'C Y',
    'B X',
    'C Y',
    'C X',
    'A Y',
    'C X',
    'C X',
    'C Y',
    'C Y',
    'B Z',
    'C X',
    'A Y',
    'B Z',
    'C Z',
    'C X',
    'A Y',
    'B Z',
    'C Y',
    'B Y',
    'A Y',
    'A Y',
    'C Y',
    'B Y',
    'C Y',
    'C X',
    'C Y',
    'A Y',
    'C Y',
    'A Y',
    'B Y',
    'C X',
    'C Y',
    'C Y',
    'B Z',
    'B Z',
    'A Y',
    'C Y',
    'C Y',
    'C Y',
    'C Y',
    'A Y',
    'C X',
    'C Z',
    'C X',
    'A Y',
    'A Y',
    'A Y',
    'C Y',
    'B Z',
    'B Z',
    'C Y',
    'C Y',
    'B X',
    'C Y',
    'C Y',
    'B Z',
    'B X',
    'B Y',
    'C Y',
    'C Y',
    'C X',
    'B Y',
    'B Z',
    'B Z',
    'C Y',
    'C Y',
    'C X',
    'C X',
    'A Y',
    'C Y',
    'C Y',
    'B X',
    'B Z',
    'B X',
    'B Z',
    'B Y',
    'C X',
    'B X',
    'B Y',
    'B Z',
    'B Z',
    'B X',
    'B Z',
    'B Y',
    'C X',
    'C Y',
    'C X',
    'C X',
    'B Z',
    'C Y',
    'C Y',
    'C Y',
    'B Z',
    'C Y',
    'C X',
    'C Y',
    'C Y',
    'A Z',
    'C Y',
    'A Y',
    'C Y',
    'A Z',
    'A X',
    'C Y',
    'C Y',
    'C Y',
    'C Z',
    'B Z',
    'B Z',
    'C Y',
    'B Z',
    'B Z',
    'C X',
    'C Y',
    'A Y',
    'A Y',
    'C Y',
    'A Y',
    'C Y',
    'C Y',
    'B Y',
    'A Y',
    'C Y',
    'B Z',
    'A Y',
    'B Z',
    'C X',
    'C Y',
    'A Y',
    'B Z',
    'A Y',
    'C X',
    'C Y',
    'B Y',
    'C Y',
    'A Z',
    'B Z',
    'B X',
    'C Y',
    'A Y',
    'A Z',
    'C X',
    'A Y',
    'B Z',
    'A Y',
    'B Y',
    'C Y',
    'C Y',
    'B Z',
    'B Z',
    'C X',
    'B Z',
    'C X',
    'C Z',
    'C Y',
    'C X',
    'A Y',
    'C X',
    'A Y',
    'A Y',
    'B Z',
    'B Z',
    'B Z',
    'A Y',
    'A Y',
    'C Y',
    'A Y',
    'B Z',
    'C X',
    'C Y',
    'C Y',
    'C Y',
    'B Y',
    'A Y',
    'C Z',
    'C Y',
    'A Y',
    'A Y',
    'B Z',
    'C Y',
    'C Y',
    'C Y',
    'B Z',
    'C Y',
    'C Y',
    'A Y',
    'A Y',
    'C Y',
    'C X',
    'B Z',
    'B Z',
    'C X',
    'C X',
    'C Z',
    'A Y',
    'C Y',
    'A Y',
    'A Y',
    'C X',
    'A Z',
    'B Y',
    'A Y',
    'C X',
    'A Y',
    'C X',
    'C X',
    'A Y',
    'A Y',
    'C X',
    'B Y',
    'B Z',
    'C Y',
    'C Z',
    'C Y',
    'C Y',
    'B Z',
    'C Y',
    'A Y',
    'A X',
    'B Y',
    'C Y',
    'A Y',
    'C Y',
    'C Y',
    'C Y',
    'A Y',
    'C Y',
    'A Y',
    'C Y',
    'B Z',
    'A Y',
    'C X',
    'C Y',
    'A Y',
    'C Y',
    'A Y',
    'A Y',
    'A Y',
    'B Z',
    'C Y',
    'B Z',
    'A Y',
    'C Y',
    'A Y',
    'C Y',
    'C X',
    'B Z',
    'A Y',
    'C X',
    'B Z',
    'B Y',
    'C Y',
    'C Z',
    'C Y',
    'B Y',
    'B Y',
    'A Y',
    'A Y',
    'C X',
    'B Y',
    'A Y',
    'C Y',
    'B X',
    'C X',
    'A Y',
    'C Y',
    'A Y',
    'C Y',
    'B Z',
    'A Z',
    'B Z',
    'B Z',
    'A Z',
    'C Y',
    'C Y',
    'C X',
    'B Y',
    'C Y',
    'A Y',
    'C Y',
    'C Y',
    'B Y',
    'B Z',
    'C Y',
    'C X',
    'A Y',
    'C X',
    'C X',
    'C Y',
    'B Y',
    'C Y',
    'B Z',
    'C Y',
    'A Y',
    'A Y',
    'C Y',
    'C X',
    'C X',
    'C X',
    'C Y',
    'C X',
    'C Y',
    'C Y',
    'A Y',
    'C Y',
    'C X',
    'C Y',
    'C X',
    'C X',
    'C X',
    'A Y',
    'B Y',
    'C Y',
    'C Y',
    'C Y',
    'C Y',
    'C Y',
    'A Y',
    'A X',
    'B Z',
    'C X',
    'C Y',
    'C Y',
    'B Z',
    'A Y',
    'A Y',
    'B X',
    'B Z',
    'C Y',
    'C Y',
    'B Z',
    'A Y',
    'A Y',
    'A Y',
    'C Y',
    'C Y',
    'A Y',
    'A Y',
    'C Y',
    'C Y',
    'C X',
    'C X',
    'C X',
    'B Z',
    'C Z',
    'C X',
    'A Z',
    'C Y',
    'C X',
    'A Y',
    'B Y',
    'B Z',
    'C X',
    'C Y',
    'C Y',
    'C Z',
    'C Y',
    'C X',
    'A Z',
    'C Y',
    'A X',
    'B Y',
    'C Y',
    'C Y',
    'C Y',
    'C X',
    'B Y',
    'B Y',
    'C X',
    'B X',
    'A Y',
    'C Y',
    'C Y',
    'C Y',
    'B X',
    'C Y',
    'A Y',
    'C Y',
    'C Y',
    'B Z',
    'C X',
    'B X',
    'C Z',
    'C Y',
    'A Y',
    'B Y',
    'B Z',
    'C Z',
    'C X',
    'C X',
    'A Y',
    'A Y',
    'B Z',
    'A Y',
    'C X',
    'B Y',
    'C Y',
    'A Y',
    'B X',
    'A Y',
    'A Y',
    'C Z',
    'C Y',
    'C Z',
    'B Z',
    'A X',
    'C Y',
    'B Y',
    'C Y',
    'B Z',
    'B Y',
    'C Y',
    'A Y',
    'B Z',
    'B Z',
    'C X',
    'B Z',
    'C Y',
    'B Z',
    'B Z',
    'C Y',
    'C Y',
    'B Z',
    'C Z',
    'C Y',
    'B Z',
    'C Y',
    'B X',
    'A Y',
    'B Z',
    'A Y',
    'C Y',
    'A Y',
    'C Y',
    'C Y',
    'B Y',
    'B Z',
    'B Z',
    'C Y',
    'A Y',
    'B Z',
    'C X',
    'C Y',
    'C Y',
    'A Y',
    'C Y',
    'C Y',
    'C X',
    'A Y',
    'C Y',
    'C Y',
    'A Y',
    'C X',
    'A Y',
    'A Y',
    'A Y',
    'C Y',
    'C Y',
    'A Y',
    'B Z',
    'A Y',
    'B Y',
    'A Y',
    'A Y',
    'C Y',
    'C Y',
    'C Z',
    'A Y',
    'C Y',
    'B Z',
    'A Y',
    'C Y',
    'C Z',
    'C Y',
    'C Y',
    'B Z',
    'C Y',
    'C Y',
    'B Z',
    'B Y',
    'C Y',
    'A Y',
    'C X',
    'C Y',
    'C Z',
    'C Z',
    'C X',
    'C X',
    'C X',
    'C Z',
    'C Y',
    'B Z',
    'A Y',
    'B Z',
    'B Z',
    'A Y',
    'C Y',
    'C Y',
    'C Y',
    'B X',
    'C Y',
    'A Y',
    'A Z',
    'B Y',
    'B Y',
    'A Y',
    'B Z',
    'A Y',
    'B Y',
    'C Z',
    'C Y',
    'C Y',
    'C Y',
    'B Z',
    'B Z',
    'B Z',
    'C Y',
    'C Y',
    'A Y',
    'C X',
    'C X',
    'A Y',
    'C Y',
    'C Y',
    'C Y',
    'C Y',
    'C X',
    'C Y',
    'C Y',
    'C Y',
    'C X',
    'A Z',
    'B Y',
    'C Y',
    'A Y',
    'A Y',
    'B Z',
    'A Z',
    'C Y',
    'C Y',
    'C Y',
    'C X',
    'B X',
    'B Y',
    'C Y',
    'A Y',
    'A Z',
    'B X',
    'C Y',
    'C Y',
    'B Z',
    'A Y',
    'A Y',
    'B Z',
    'B Z',
    'C Y',
    'C Y',
    'C X',
    'B Y',
    'B Z',
    'C Y',
    'B Y',
    'C Y',
    'A Y',
    'C X',
    'C X',
    'B Z',
    'A Y',
    'C Y',
    'B Z',
    'C X',
    'C Y',
    'B Y',
    'B Z',
    'A Z',
    'B Y',
    'B Y',
    'C X',
    'C Y',
    'A Z',
    'C X',
    'C X',
    'A Y',
    'A Y',
    'C X',
    'A Y',
    'B Y',
    'B Z',
    'A Y',
    'B Z',
    'B X',
    'C Y',
    'C Y',
    'C X',
    'B Z',
    'A Y',
    'B Y',
    'A Y',
    'C Y',
    'C Z',
    'B Z',
    'C Y',
    'A Y',
    'C Y',
    'C Z',
    'A Z',
    'B Z',
    'B X',
    'C Y',
    'C Y',
    'B Y',
    'C X',
    'B Y',
    'B Z',
    'B Z',
    'B X',
    'B Y',
    'C X',
    'C Y',
    'C X',
    'C Y',
    'A Y',
    'A Y',
    'C Y',
    'A Y',
    'C Y',
    'C X',
    'C Y',
    'A Y',
    'B Z',
    'C X',
    'C Y',
    'B Z',
    'C Y',
    'C Y',
    'B Y',
    'B Z',
    'A X',
    'C Y',
    'B Y',
    'B Y',
    'B Z',
    'C Y',
    'B Z',
    'A Y',
    'C Y',
    'B Y',
    'C Y',
    'A Y',
    'C Y',
    'B Z',
    'C Y',
    'A Y',
    'A Y',
    'C Y',
    'A Y',
    'C Y',
    'A Y',
    'A Y',
    'B Z',
    'C X',
    'C Y',
    'B Z',
    'C Y',
    'A X',
    'A Z',
    'C Y',
    'C X',
    'C X',
    'C Y',
    'C Y',
    'B Z',
    'A Z',
    'A Y',
    'C Y',
    'B Z',
    'A Y',
    'A Y',
    'C Y',
    'B Z',
    'A Y',
    'C X',
    'A Y',
    'A Y',
    'C X',
    'B Z',
    'B X',
    'A X',
    'A Y',
    'B Y',
    'A X',
    'B X',
    'C X',
    'C Y',
    'A Y',
    'C Y',
    'A Y',
    'A Y',
    'C X',
    'B Y',
    'C X',
    'B Y',
    'C Y',
    'C Y',
    'A Y',
    'B Z',
    'A Z',
    'B Y',
    'C X',
    'C Y',
    'C Y',
    'B Z',
    'C Z',
    'A Y',
    'A Y',
    'A Z',
    'C Y',
    'A Y',
    'B Z',
    'C Y',
    'C Y',
    'B Y',
    'A Y',
    'A Y',
    'C Y',
    'C X',
    'C X',
    'B Y',
    'B Z',
    'C Y',
    'B Y',
    'B Z',
    'C Y',
    'A Y',
    'B Z',
    'A Y',
    'A Y',
    'A Z',
    'C X',
    'B Z',
    'C Y',
    'B Z',
    'A Y',
    'C X',
    'C Y',
    'C Y',
    'B X',
    'B Z',
    'A Y',
    'A Y',
    'A Y',
    'A Y',
    'A Y',
    'C Y',
    'A Y',
    'A Y',
    'C X',
    'C Y',
    'C Z',
    'B Z',
    'A Z',
    'C Z',
    'A Y',
    'B Z',
    'B Y',
    'A Y',
    'C Y',
    'B Z',
    'A Y',
    'C Y',
    'C Y',
    'A Y',
    'C Y',
    'B Z',
    'B Y',
    'B Z',
    'C Y',
    'C Y',
    'C Y',
    'A Z',
    'C X',
    'B X',
    'B Z',
    'C Z',
    'C Y',
    'C Y',
    'C Y',
    'C X',
    'A Y',
    'C Y',
    'A Y',
    'A Y',
    'B Z',
    'A Y',
    'C Y',
    'C Y',
    'A Y',
    'C Y',
    'A Z',
    'B X',
    'A Y',
    'C Y',
    'A Y',
    'A Z',
    'A Y',
    'A Y',
    'B Z',
    'B Y',
    'B Z',
    'C Y',
    'B Z',
    'C X',
    'A Y',
    'C Y',
    'A Y',
    'A Y',
    'A Y',
    'B Z',
    'B Z',
    'C Y',
    'B Z',
    'B Y',
    'C X',
    'A Y',
    'C Y',
    'A Y',
    'B Z',
    'C X',
    'B Y',
    'C Y',
    'B Z',
    'C Y',
    'A Y',
    'C Y',
    'C Y',
    'B Y',
    'B Z',
    'C Y',
    'B Z',
    'B Y',
    'C Y',
    'C X',
    'A Z',
    'C Z',
    'C Y',
    'C Y',
    'A Y',
    'A Y',
    'C X',
    'C Y',
    'C Y',
    'C Y',
    'C X',
    'B Z',
    'C X',
    'C Y',
    'A Y',
    'A Y',
    'B Z',
    'A Y',
    'A Y',
    'C Y',
    'A Y',
    'B Z',
    'C X',
    'C Y',
    'C Y',
    'C Y',
    'C Y',
    'C X',
    'B Z',
    'A Y',
    'B Y',
    'C Y',
    'C X',
    'B Z',
    'C Y',
    'A Y',
    'A Y',
    'B Z',
    'C Y',
    'A Y',
    'C Z',
    'C X',
    'B Z',
    'C Y',
    'A Z',
    'B Z',
    'A Y',
    'A Y',
    'C Y',
    'B Z',
    'B Z',
    'A Y',
    'C Y',
    'B Y',
    'C Y',
    'A Y',
    'A Y',
    'B Y',
    'B X',
    'B Z',
    'C Y',
    'A Y',
    'C Y',
    'A Y',
    'A Y',
    'B Z',
    'B Y',
    'A Y',
    'A Y',
    'A Y',
    'C Y',
    'B Y',
    'C Y',
    'A Y',
    'C X',
    'C Y',
    'C Y',
    'B Z',
    'B Z',
    'C Y',
    'C Y',
    'A Y',
    'B X',
    'C X',
    'A Y',
    'C Y',
    'C Y',
    'C Y',
    'A Y',
    'C X',
    'B Z',
    'A Y',
    'C Z',
    'B Y',
    'B Y',
    'C Z',
    'A Y',
    'C Z',
    'C Y',
    'C X',
    'B Y',
    'A Y',
    'C X',
    'C X',
    'C Y',
    'C X',
    'C X',
    'B Z',
    'C Y',
    'B Y',
    'A Y',
    'B Y',
    'A Y',
    'B Z',
    'C X',
    'C Y',
    'C X',
    'C Z',
    'C X',
    'B Z',
    'C X',
    'C Y',
    'C Y',
    'C Y',
    'B Z',
    'A Y',
    'C Y',
    'C Y',
    'C Y',
    'B Z',
    'A Y',
    'C X',
    'C Y',
    'C Y',
    'C Y',
    'C X',
    'A Z',
    'C Y',
    'C Y',
    'C X',
    'B X',
    'B Z',
    'A Y',
    'B Z',
    'C Y',
    'B Y',
    'B Z',
    'A Y',
    'B Z',
    'C Y',
    'A Y',
    'A X',
    'C X',
    'C X',
    'C Y',
    'A Y',
    'B X',
    'C Y',
    'B X',
    'B Z',
    'C X',
    'A Y',
    'B X',
    'C X',
    'A Y',
    'C Y',
    'C Y',
    'C Y',
    'A Z',
    'C Y',
    'A Y',
    'B Z',
    'B Z',
    'A Z',
    'C Y',
    'A Y',
    'B Z',
    'C Z',
    'C X',
    'C X',
    'C X',
    'A Y',
    'A X',
    'C Y',
    'A Y',
    'B Y',
    'C Y',
    'C X',
    'C Y',
    'C Y',
    'A Y',
    'B Z',
    'C Y',
    'B Z',
    'A Y',
    'C X',
    'C Y',
    'B Z',
    'C Y',
    'C Y',
    'B Y',
    'A Y',
    'A Y',
    'A Z',
    'C Y',
    'B Z',
    'B Y',
    'B Z',
    'B Y',
    'A Y',
    'C Y',
    'C Y',
    'C X',
    'C Y',
    'C Y',
    'B Z',
    'C Y',
    'C Y',
    'C X',
    'B Y',
    'B Z',
    'C Y',
    'C Y',
    'A Y',
    'C Z',
    'C Y',
    'B Z',
    'A Y',
    'A X',
    'A Y',
    'C X',
    'C Y',
    'C Y',
    'B Z',
    'A Y',
    'B X',
    'C Z',
    'C Z',
    'C X',
    'C Y',
    'B Z',
    'C Z',
    'B Z',
    'C Y',
    'A Y',
    'C Y',
    'A Y',
    'B X',
    'C X',
    'C Y',
    'B Z',
    'C Y',
    'B Y',
    'B X',
    'B X',
    'B Z',
    'C Y',
    'C Y',
    'B Y',
    'B Z',
    'C Y',
    'A Y',
    'B Z',
    'C Y',
    'B Z',
    'C Y',
    'B Z',
    'C Y',
    'A Y',
    'A Y',
    'C Y',
    'C Y',
    'B Y',
    'B Z',
    'C Y',
    'B Z',
    'C X',
    'B Z',
    'C Y',
    'B X',
    'C X',
    'B Z',
    'A Y',
    'C X',
    'B Z',
    'C Y',
    'A Y',
    'B Z',
    'A X',
    'B Z',
    'B Z',
    'B Z',
    'C Y',
    'C Y',
    'C Y',
    'C Y',
    'A Y',
    'A Y',
    'B Z',
    'B X',
    'C X',
    'C Y',
    'B Y',
    'A Y',
    'A Y',
    'B Z',
    'C Y',
    'A Y',
    'A Y',
    'C Y',
    'C X',
    'C Y',
    'C X',
    'C Y',
    'C Y',
    'C Y',
    'B Z',
    'C Y',
    'C X',
    'B Y',
    'C Y',
    'C Y',
    'C Y',
    'A Z',
    'C X',
    'C Y',
    'A Y',
    'C Y',
    'B Z',
    'B Y',
    'C Y',
    'A Y',
    'A Y',
    'C Y',
    'C Y',
    'C X',
    'A Y',
    'C Y',
    'A Z',
    'A Y',
    'B Z',
    'A Y',
    'C X',
    'C Y',
    'C Y',
    'B X',
    'B Z',
    'C X',
    'B X',
    'C Z',
    'C X',
    'B Z',
    'B Z',
    'C Y',
    'C X',
    'B Z',
    'B Z',
    'B Z',
    'C Y',
    'C Y',
    'A Y',
    'C Y',
    'B Y',
    'B X',
    'C Y',
    'C Y',
    'C Y',
    'B X',
    'C X',
    'B X',
    'C Y',
    'A Y',
    'C Y',
    'C X',
    'C Y',
    'C Y',
    'B X',
    'B Z',
    'A Z',
    'B Z',
    'A Y',
    'B Z',
    'C X',
    'B Z',
    'C Y',
    'C Y',
    'C Z',
    'A Y',
    'C Y',
    'C Y',
    'A Z',
    'B Y',
    'C Y',
    'A X',
    'A Y',
    'B Y',
    'C Y',
    'B Z',
    'C Y',
    'C X',
    'C Y',
    'B Z',
    'A Y',
    'C X',
    'C Y',
    'C X',
    'C Y',
    'C Y',
    'C Z',
    'A Y',
    'C Y',
    'B Z',
    'A Y',
    'C Z',
    'C Y',
    'A Y',
    'C Y',
    'C Y',
    'C Y',
    'C Y',
    'A Y',
    'C Y',
    'C Y',
    'C Y',
    'C Y',
    'B Z',
    'C X',
    'A Y',
    'A Y',
    'C Y',
    'B Y',
    'C Y',
    'C Y',
    'A Z',
    'C Y',
    'B Y',
    'C Y',
    'B Z',
    'C X',
    'A Y',
    'C Y',
    'C Y',
    'B Z',
    'C Y',
    'A Y',
    'A Y',
    'C Y',
    'B Z',
    'C Y',
    'A Y',
    'B Z',
    'C Y',
    'C Y',
    'B Z',
    'C X',
    'B Z',
    'B Z',
    'C Y',
    'C Y',
    'A Y',
    'C X',
    'A Y',
    'C Y',
    'B Z',
    'A Y',
    'B Z',
    'A Y',
    'C X',
    'C Y',
    'B Z',
    'B Y',
    'B Z',
    'A Y',
    'B Z',
    'C Y',
    'B Z',
    'C Y',
    'B Y',
    'A Y',
    'B Z',
    'B X',
    'B Z',
    'C Y',
    'B Z',
    'B Z',
    'B Z',
    'A Y',
    'A Y',
    'C Y',
    'B Z',
    'B Z',
    'C X',
    'B Z',
    'C Z',
    'A Y',
    'B Z',
    'B Z',
    'C Y',
    'B Z',
    'B Z',
    'C X',
    'C Z',
    'A Z',
    'C Y',
    'C Y',
    'B X',
    'C Z',
    'C Y',
    'A Y',
    'B Z',
    'C X',
    'B Z',
    'C Y',
    'C Y',
    'B Z',
    'B Z',
    'B Z',
    'C X',
    'C Y',
    'C X',
    'C X',
    'A Y',
    'B Z',
    'B Y',
    'C Y',
    'C Y',
    'B Z',
    'C Y',
    'C Y',
    'C Y',
    'C Y',
    'C Y',
    'B X',
    'A Y',
    'A Y',
    'B Y',
    'C Y',
    'B Y',
    'C Y',
    'B Y',
    'B Z',
    'C Y',
    'C Y',
    'C X',
    'B Y',
    'A Y',
    'B X',
    'B Z',
    'C X',
    'A X',
    'C Y',
    'A Y',
    'A Y',
    'C X',
    'B Y',
    'A Y',
    'B Z',
    'C X',
    'B Z',
    'C Z',
    'C X',
    'C Y',
    'C X',
    'C Y',
    'C Y',
    'C Y',
    'B Y',
    'C Z',
    'C X',
    'B Z',
    'C Y',
    'C X',
    'C X',
    'B Y',
    'C Y',
    'C Y',
    'C Z',
    'B Z',
    'C Y',
    'C Y',
    'B Y',
    'C Z',
    'C X',
    'B Z',
    'C Y',
    'C X',
    'C Y',
    'B Z',
    'C Y',
    'C Y',
    'A Y',
    'B Y',
    'C X',
    'C Y',
    'C Y',
    'C Y',
    'B Y',
    'B Y',
    'C Z',
    'B Z',
    'C Y',
    'B Z',
    'A Z',
    'C X',
    'B X',
    'C X',
    'A Y',
    'C Y',
    'A Z',
    'C X',
    'C Y',
    'A Y',
    'A Y',
    'B Y',
    'A Y',
    'C Y',
    'B Y',
    'C X',
    'C X',
    'C X',
    'C X',
    'C Y',
    'C Y',
    'A Y',
    'B Z',
    'C Y',
    'A Z',
    'C Y',
    'A Y',
    'B Z',
    'B Z',
    'C Y',
    'A Z',
    'C Y',
    'C Y',
    'C Y',
    'B Z',
    'C Y',
    'C Y',
    'A X',
    'A Y',
    'A Z',
    'C Y',
    'A Y',
    'B X',
    'A Y',
    'B Z',
    'B Y',
    'B Z',
    'B Y',
    'C X',
    'C X',
    'A Y',
    'B Z',
    'B Y',
    'C X',
    'B X',
    'B Y',
    'A Y',
    'C Y',
    'C Y',
    'C Y',
    'B Z',
    'C Y',
    'A Y',
    'B Z',
    'C X',
    'B Z',
    'B Z',
    'B X',
    'B Y',
    'C Y',
    'C Y',
    'C X',
    'B Z',
    'C Y',
    'C Y',
    'C Y',
    'A Y',
    'C Y',
    'B Z',
    'B Y',
    'C Y',
    'C X',
    'C X',
    'B X',
    'B Z',
    'A Z',
    'C X',
    'A Y',
    'B Y',
    'C Y',
    'A Y',
    'B Y',
    'C Y',
    'C Y',
    'C Z',
    'C Y',
    'C X',
    'A Y',
    'C Y',
    'C Y',
    'B Z',
    'C Y',
    'C Y',
    'C Y',
    'C Y',
    'A Y',
    'B Z',
    'B Z',
    'C Y',
    'C Y',
    'C Y',
    'C Y',
    'C Y',
    'B Z',
    'C Y',
    'C Y',
    'C X',
    'A Y',
    'A Y',
    'C Y',
    'C X',
    'A Y',
    'B Z',
    'A Y',
    'C X',
    'C Y',
    'C Z',
    'C Y',
    'A Z',
    'A Y',
    'A Y',
    'B Y',
    'C Y',
    'C Y',
    'B Y',
    'C Y',
    'A Y',
    'C X',
    'B Z',
    'C X',
    'A Y',
    'B Z',
    'C X',
    'A Y',
    'C X',
    'C X',
    'A Z',
    'A Y',
    'B Y',
    'A Y',
    'B Y',
    'A Z',
    'C Y',
    'C Y',
    'C Y',
    'B Z',
    'C Y',
    'A Y',
    'B Z',
    'B Y',
    'C Y',
    'B Y',
    'C Z',
    'A Y',
    'B Y',
    'C Y',
    'B Y',
    'A Y',
    'B Z',
    'C Y',
    'C X',
    'C Y',
    'A Y',
    'A Z',
    'C Y',
    'B Z',
    'C Y',
    'B Y',
    'A Y',
    'C X',
    'A Z',
    'C Z',
    'C X',
    'A Y',
    'C X',
    'C X',
    'C Y',
    'C Z',
    'A Y',
    'A Y',
    'C Y',
    'A Y',
    'C Y',
    'B Z',
    'C X',
    'A X',
    'C X',
    'C Y',
    'C Y',
    'C Y',
    'C Y',
    'B Z',
    'B Z',
    'B Z',
    'C X',
    'C Y',
    'B Y',
    'C Y',
    'B Y',
    'C Z',
    'A X',
    'B Y',
    'C X',
    'B Y',
    'C X',
    'B Y',
    'C Y',
    'B Z',
    'C X',
    'A Y',
    'B Z',
    'C X',
    'A X',
    'C Y',
    'B Z',
    'B Z',
    'C X',
    'B Z',
    'B Z',
    'C X',
    'C Y',
    'C Z',
    'B Z',
    'C Y',
    'C Y',
    'C Y',
    'B X',
    'A Y',
    'B Y',
    'B Z',
    'B Z',
    'C X',
    'A Z',
    'C Y',
    'C Y',
    'A Y',
    'A X',
    'A Y',
    'C Y',
    'B Y',
    'C Y',
    'A Y',
    'C X',
    'C Y',
    'C Y',
    'C Y',
    'C Y',
    'C Y',
    'C Y',
    'C Y',
    'C Y',
    'C Y',
    'C Y',
    'B Z',
    'B Z',
    'A Y',
    'B Y',
    'C Y',
    'C Y',
    'C X',
    'B Z',
    'A Y',
    'C Y',
    'B Z',
    'C Y',
    'A Y',
    'C X',
    'B X',
    'C Z',
    'A Y',
    'C X',
    'B Y',
    'C X',
    'B Z',
    'A Y',
    'C Y',
    'C Y',
    'C Y',
    'B Z',
    'B Z',
    'A Z',
    'C Z',
    'A Y',
    'B Z',
    'C X',
    'C Y',
    'A Y',
    'C Y',
    'C Y',
    'C X',
    'B Z',
    'C Z',
    'C Y',
    'B Z',
    'A X',
    'B Y',
    'A Z',
    'B X',
    'C X',
    'A Y',
    'C Y',
    'B Z',
    'B Z',
    'C Y',
    'A Y',
    'B Z',
    'B Z',
    'A Y',
    'A Y',
    'B Z',
    'B Z',
    'A X',
    'B Z',
    'C Y',
    'C Z',
    'C Y',
    'C Y',
    'B Z',
    'C Y',
    'A Z',
    'A X',
    'C X',
    'B Y',
    'B Z',
    'C X',
    'B Z',
    'A X',
    'A Y',
    'A Y',
    'B X',
    'B Y',
    'B Z',
    'C X',
    'C X',
    'C X',
    'C Y',
    'C Y',
    'B X',
    'C Y',
    'C Y',
    'A Y',
    'C X',
    'A Y',
    'B Z',
    'A Y',
    'C Y',
    'B X',
    'C X',
    'C Y',
    'A Y',
    'C X',
    'C Y',
    'C Y',
    'B Z',
    'A Y',
    'A Y',
    'A Z',
    'C Y',
    'B Z',
    'A Z',
    'B X',
    'A Z',
    'C Y',
    'B X',
    'A Y',
    'C Y',
    'C Z',
    'A Z',
    'C X',
    'A Y',
    'B X',
    'C Y',
    'C Y',
    'C X',
    'C Z',
    'A Y',
    'A Y',
    'C Y',
    'B Z',
    'C Y',
    'C X',
    'B X',
    'A Y',
    'B Y',
    'B Z',
    'B Z',
    'C Y',
    'C Y',
    'A Y',
    'B Z',
    'B Z',
    'C Y',
    'C Z',
    'C Y',
    'C Y',
    'C X',
    'C X',
    'A Y',
    'B Z',
    'A Y',
    'B Z',
    'B Z',
    'C X',
    'B X',
    'C X',
    'C Y',
    'B X',
    'B Z',
    'C X',
    'C X',
    'C X',
    'B Z',
    'B Y',
    'B Z',
    'C Y',
    'C Y',
    'B Z',
    'B Y',
    'B Z',
    'C Y',
    'B Y',
    'A Y',
    'A Y',
    'B Y',
    'A Y',
    'B Z',
    'A Y',
    'C X',
    'A Y',
    'C Z',
    'B Y',
    'C Y',
    'C X',
    'C X',
    'C Y',
    'C X',
    'C Y',
    'A Y',
    'B Z',
    'C X',
    'C Y',
    'C Y',
    'C Y',
    'C Y',
    'C Y',
    'B Y',
    'A Y',
    'B Z',
    'C Y',
    'A Z',
    'C Y',
    'B Z',
    'C X',
    'C Z',
    'A Y',
    'B Z',
    'C X',
    'C Y',
    'B Z',
    'C Y',
    'A Y',
    'C Y',
    'C X',
    'C X',
    'C Y',
    'A Y',
    'B Y',
    'A X',
    'C Y',
    'C Y',
    'A Y',
    'C Y',
    'A X',
    'C Y',
    'B Y',
    'C X',
    'B Z',
    'B Z',
    'B Y',
    'C Y',
    'C Z',
    'C X',
    'B Z',
    'B Z',
    'B Y',
    'C Z',
    'A Y',
    'C Y',
    'C Y',
    'B Y',
    'C X',
    'A Y',
    'C Y',
    'C Y',
    'A Z',
    'A Y',
    'B Y',
    'C Y',
    'C Y',
    'C X',
    'B X',
    'C Y',
    'A Y',
    'B Z',
    'B Y',
    'A Y',
    'B Y',
    'C Y',
    'C X',
    'C Y',
    'C Y',
    'C X',
    'A Y',
    'B Z',
    'C X',
    'C Z',
    'B X',
    'C Y',
    'C X',
    'C Y',
    'C X',
    'C Y',
    'B Z',
    'A Y',
    'A Y',
    'B Z',
    'C Y',
    'C Y',
    'B Z',
    'C Y',
    'C X',
    'B Z',
    'C Y',
    'B Z',
    'C X',
    'C Y',
    'C X',
    'A Y',
    'C Y',
    'A X',
    'C Y',
    'C X',
    'A Y',
    'C Y',
    'A Y',
    'C Y',
    'A Y',
    'C X',
    'A Y',
    'A Y',
    'A Y',
    'B Y',
    'B Z',
    'C Y',
    'B Z',
    'A Y',
    'C Y',
    'C X',
    'B X',
    'C Y',
    'B Z',
    'B X',
    'B X',
    'B Y',
    'C Y',
    'C X',
    'C Y',
    'C X',
    'B Y',
    'B Z',
    'A Y',
    'B Y',
    'C Y',
    'C Z',
    'A Y',
    'C Y',
    'B Y',
    'A Y',
    'C X',
    'C Y',
    'A Y',
    'C Y',
    'A Z',
    'C Z',
    'C Y',
    'B Z',
    'C Y',
    'C Y',
    'B Y',
    'A Y',
    'C Z',
    'A X',
    'C Y',
    'B Z',
    'C Z',
    'B X',
    'C Y',
    'C X',
    'C X',
    'B Z',
    'B Z',
    'B X',
    'B Y',
    'C Y',
    'B Z',
    'B Z',
    'B Z',
    'A Y',
    'B Z',
    'C Y',
    'C Y',
    'A Y',
    'A X',
    'C Z',
    'A Y',
    'C Z',
    'C Y',
    'C X',
    'C Y',
    'C X',
    'B Z',
    'C Y',
    'A X',
    'B Z',
    'B Y',
    'C Y',
    'B Y',
    'C Y',
    'C Y',
    'A Y',
    'B Z',
    'B Y',
    'C Y',
    'C X',
    'C Y',
    'C Y',
    'B Z',
    'A Y',
    'B X',
    'C Y',
    'C Y',
    'C Y',
    'A Y',
    'C Y',
    'C Y',
    'C X',
    'C Z',
    'C X',
    'B Y',
    'A Y',
    'C Z',
    'B Z',
    'B Z',
    'A Y',
    'C Y',
    'C X',
    'B X',
    'C X',
    'B Z',
    'A Y',
    'C Y',
    'C Y',
    'B Z',
    'A Y',
    'B Y',
    'C X',
    'B Y',
    'B Z',
    'B Z',
    'B Z',
    'B X',
    'B Y',
    'B Z',
    'C X',
    'A Z',
    'A Y',
    'C Y',
    'A Y',
    'C Y',
    'C Y',
    'B Z',
    'B Z',
    'C X',
    'B X',
    'C Y',
    'A Z',
    'C Y',
    'C X',
    'C Y',
    'B Y',
    'C X',
    'B Z',
    'C Y',
    'C X',
    'B Z',
    'A Y',
    'A Y',
    'C Y',
    'A Y',
    'A Z',
    'C Y',
    'A Z',
    'A Y',
    'C Y',
    'C X',
    'B X',
    'C Y',
    'C Y',
    'C X',
    'A Y',
    'C X',
    'C Y',
    'B Z',
    'B X',
    'C Y',
    'A Y',
    'B X',
    'C Y',
    'B Y',
    'C X',
    'A Y',
    'B Z',
    'C Y',
    'C Y',
    'B Z',
    'A Y',
    'A Z',
    'C Y',
    'C Y',
    'C X',
    'A Y',
    'B Z',
    'B Z',
    'B Y',
    'B Z',
    'A Y',
    'C Y',
    'A Y',
    'B Y',
    'A Y',
    'C X',
    'C Y',
    'A Z',
    'A Z',
    'B Y',
    'A Y',
    'C Y',
    'A X',
    'C Y',
    'C Y',
    'B Z',
    'C Y',
    'C X',
    'C Y',
    'A Y',
    'C Y',
    'C Y',
    'C Y',
    'C Y',
    'A X',
    'C Y',
    'B Y',
    'C Y',
    'A Y',
    'C Y',
    'C X',
    'C X',
    'C Z',
    'B Z',
    'A Y',
    'B X',
    'C Y',
    'C Y',
    'C Y',
    'A Y',
    'B Z',
    'B Z',
    'C Y',
    'A Y',
    'B Z',
    'A Y',
    'C X',
    'C X',
    'A Y',
    'C Z',
    'C Y',
    'B Z',
    'B Z',
    'A Y',
    'A Y',
    'C Y',
    'A Y',
    'C Y',
    'A Y',
    'B Z',
    'C X',
    'C Y',
    'C Y',
    'A Y',
    'C Y',
    'A Y',
    'A Z',
    'B Y',
    'C Y',
    'C X',
    'A Y',
    'C X',
    'A X',
    'C Y',
    'C Y',
    'B Y',
    'C Y',
    'B Z',
    'A Y',
    'C X',
    'B Z',
    'A Y',
    'C X',
    'B Z',
    'A Y',
    'C Y',
    'B Z',
    'A Y',
    'B Z',
    'C X',
    'C Y',
    'C X',
    'C Y',
    'B Z',
    'C Y',
    'B Y',
    'C Z',
    'B Z',
    'C Y',
    'C Y',
    'A X',
    'C X',
    'A Y',
    'C Y',
    'B Z',
    'A Y',
    'A Z',
    'B Z',
    'C Y',
    'C Y',
    'A Y',
    'A Y',
    'A Y',
    'C X',
    'C Y',
    'A Z',
    'C Y',
    'C Z',
    'A Y',
    'A Y',
    'C Y',
    'C X',
    'C X',
    'C Z',
    'C Y',
    'C Z',
    'B Z',
    'A Y',
    'B Z',
    'B Z',
    'C X',
    'A Y',
    'B Y',
    'A Y',
    'A Z',
    'A Y',
    'C Y',
    'C Y',
    'C Z',
    'A Y',
    'C Y',
    'B Y',
    'C X',
    'C X',
    'B X',
    'C Y',
    'A Y',
    'C Z',
    'A Y',
    'B Z',
    'B Y',
    'C Y',
    'A Y',
    'A Y',
    'C Y',
    'C Y',
    'C Y',
    'C Y',
    'C Y',
    'C Y',
    'C Y',
    'A Y',
    'B Y',
    'A Y',
    'B Y',
    'B Y',
    'C X',
    'C X',
    'C Y',
    'A Y',
    'C Y',
    'C Y',
    'C Z',
    'C Y',
    'C Y',
    'B Y',
    'C Y',
    'B Y',
    'A Y',
    'C Y',
    'B Z',
    'C X',
    'C Y',
    'A Z',
    'A Z',
]

//Part 1
const rules = {
    plays: [
        {
            myValue: 'X',
            draw: 'A',
            win: 'C',
            loss: 'B',
            point: 1,
            name: 'rock'
        },
        {
            myValue: 'Y',
            draw: 'B',
            win: 'A',
            loss: 'C',
            point: 2,
            name: 'paper'
        },
        {
            myValue: 'Z',
            draw: 'C',
            win: 'B',
            loss: 'A',
            point: 3,
            name: 'scissors'
        }
    ],
    scores: {
        win: 6,
        draw: 3,
        loss: 0
    }
}

let totalScore = 0

games.map(game => {
    rules.plays.map(play => {
        const match = game.split(' ')
        if(play.myValue == match[1]){
            let matchRes = Object.keys(play).find(key => play[key] === match[0])
            let sum = rules.scores[matchRes] + play.point
            totalScore += sum
        }
    })
})

console.log(`${totalScore} 👌`)


//Part 2
const rules2 = {
    plays: [
        {
            value: 'A',
            draw: 'A',
            loss: 'C',
            win: 'B',
            point: 1,
            name: 'rock'
        },
        {
            value: 'B',
            draw: 'B',
            loss: 'A',
            win: 'C',
            point: 2,
            name: 'paper'
        },
        {
            value: 'C',
            draw: 'C',
            loss: 'B',
            win: 'A',
            point: 3,
            name: 'scissors'
        }
    ],
    scores: [
        {
            name: 'win',
            point: 6,
            value: 'Z'
        },
        {
            name: 'draw',
            point: 3,
            value: 'Y'
        },
        {
            name: 'loss',
            point: 0,
            value: 'X'
        }
    ]
}

let totalScore2 = 0

games.map(game => {
    rules2.plays.map(play => {
        const match = game.split(' ')
        if(play.value == match[0]){
            let matchRes = rules2.scores.find(obj => obj.value == match[1])
            let myPoint = 0
            rules2.plays.map(p => {
                if(p.value == play[matchRes.name]){
                    myPoint = p.point
                }
            })
            let sum = myPoint + matchRes.point
            totalScore2 += sum
        }
    })
})

console.log(`${totalScore2} 👌`)