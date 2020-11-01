 import React from 'react';
import Card from  'react-bootstrap/Card';
import { Theme } from './ThemeProvider';
import {useState,useContext} from 'react';
import First_img from '../img/im6.jpg';
import Second_img from '../img/im7.jpg';
import Button from  'react-bootstrap/Button';





function Movies() {
    const[count,Setcount]= useState(20);
    const[dislike,Setdislike]= useState(20);
    const currentTheme = useContext(Theme)[0];
    return (
        <div className={ `bg-${currentTheme}` }>
          
            
                    <Card>
<Card.Img variant="top" src={Second_img } />
    <Card.Body>
      <Card.Text>
      Having been so successfully welcomed back to the jungle in Jack Kasdan’s 2017 Jumanji revival, audiences must surely have higher expectations for the director’s second stab. Lower them. Not by much but enough for some due tempering. The Next Level has its moments but fewer laughs, less momentum and a noticeably longer runtime – an admittedly harsh critique of four additional minutes. An improved second half ramps things up towards an enjoyable finale, promising at least one more sequel, but the weight of familiarity teeters of contempt when things drag prior.

Running with the ongoing indestructibility of the titular board game as raison d’etre enough, the film opens to a discontented Spencer (Alex Wolff) repairing the crushed remains of that old Jumanji console. Whilst his fire-forged friends have maintained connectivity, through messages and meet ups, Spencer has drifted from the group, driven by social anxiety that couldn’t quite be beaten last time around. Most aggrieved by the fracture is sort of girlfriend Martha (Morgan Turner) but buff Fridge (Ser’Darius Blain) and back packing popular Bethany (Madison Iceman) share concern. When Spencer skips brunch at a local cafe, the threesome head round to his to check in. With Spencer already zapped to Jumanji, it’s his grouch of a grandpa Eddie (Danny DeVito, always good value) waiting, plus his estranged buddy Milo (Danny Glover). And here’s the twist: when Martha, Fridge and Bethany volunteer to go after their friend, the game brings the old folk along for the ride too.

New additions aside, The Next Level fairly rigidly reprises its direct predecessor’s formula. Arrival in Jumanji once again kicks off with genial exposition from chummy explorer Nigel (Rhys Darby) and explanation that the recovery of some shiny MacGuffin is the group’s only means of escape. Next is a blackly comic reminder of the rules – three lives and you’re out – before the quest kicks off with some hearty action and ample running. One by one, lives are picked off inconsequentially, building to the inevitable realisation that they’re all on strike three. This isn’t the sort of film in which threat to life ever feels genuine but the tattoo bars remain a novel idea and a handful of the film’s biggest laughs come from the creative way characters are stripped of them.

Oddly, the body switching trick struggles to catch light as before. Dwayne Johnson and Kevin Hart give their best at impersonating DeVito and Glover but miss almost every comic beat. It’s all too mannered, lacking in sparks and the easy energy that came before. Hart, in particular, feels constrained by the effort of it all. Likewise, it is not until Jack Black is permitted to reprise his effeminate Bethany – via Professor Shelly Oberon – that his performance sings. New to the game, Awkwafina feels as wasted as Glover and DeVito – both essentially glorified cameos – until she gets a go at imitating the latter and thoroughly nails it. Karen Gillan and Nick Jonas return too, while Game of Thrones’ Rory McCann entirely fails to register as the film’s bland would be baddie Jurgen the Brutal. To say one dimensional wouldn’t cut it.

The effects of a killer budget here – after all, Welcome to the Jungle made a mere whisker sky of a billion – pay off, even when the script slacks. There’s a tremendous sequence set across a gorge, involving Harry Potter inspired mobile bridges and the onslaught of vicious mandrills, plus one or to commendable recalls to The Lion King. A golden desert savannah is well matched by Henry Jackman’s suitably sweeping score, with ample flair to seize the action. A reprise of Gillan’s dance fight sequence is more choppy in execution and can’t help but feel less fresh second time around. Quite clearly, originality isn’t everything with this one. Likeable but only okay.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  <p id="al">Likes {count}</p>
  <style type="text/css">
    {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
  </style>

  <Button variant="flat" size="xxl" onClick={()=>Setcount(count + 1)}>
    Like
  </Button>
  <p id="al">DisLikes {dislike}</p>
  <style type="text/css">
    {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
  </style>

  <Button variant="flat" size="xxl" onClick={()=>Setdislike(dislike - 1)}>
    DisLike
  </Button>






 
        </div>
    )
}

export default Movies;
