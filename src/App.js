import React, { Component } from 'react';
import PropTypes from 'prop-types';


//styling
import './main.css';

//imports for other components
import WhaleHouse from './WhaleHouse';
import WhaleCard from './WhaleCard.js';


class App extends Component {

  constructor(props) {
    super();
    
    this.state = {
      count: props.count,
      show: false,
    };
  
    this.nextCard = this.nextCard.bind(this);
  }
 
  
    nextCard() {
      if(this.state.count === 5){
        this.setState((prevState) => ({ count: 0 }));
      }
      else{
        this.setState((prevState) => ({ count: prevState.count + 1 }));
      }
      var scrollStep = -window.scrollY / (175 / 15),
        scrollInterval = setInterval(function(){
          if ( window.scrollY != 0 ) {
              window.scrollBy( 0, scrollStep );
          }
          else clearInterval(scrollInterval); 
        },15);

    }


  renderWhaleCard(icon, i) {
    return (
      <WhaleCard 
      image={icon} 
      index={i} 
      onClick={() => this.HandleWhaleCardClick(i)}
      />
    );
  }

  renderWhaleHouse(obj, i) {
    return (<WhaleHouse 
      index={i}
      name={obj.name} 
      latin={obj.latin} 
      about={obj.about}
      age={obj.age}
      size={obj.size}
      amount={obj.amount}
      image={obj.image}
      onClick={() => this.HandleCloseClick()}
      onClickNext={() => this.nextCard()}
      />
    );
  }

  HandleWhaleCardClick(i) {
    //console.log("index: " + i);
    this.setState({
      count: i,
      show: true,
    });
  }

  HandleCloseClick() {
    console.log("In HandleCloseClick()");
    this.setState({
      show: false,
    })
  }

  render() {
    return (
      <div className="App">
        <div id="whaleIcons">
          <div id="row1" className="row">
            {this.renderWhaleCard("./img/narwhal.png", 0)}
            {this.renderWhaleCard("./img/bowhead.png", 1)}
            {this.renderWhaleCard("./img/orca.png", 2)}
          </div>
          <div id="row2" className="row">
            {this.renderWhaleCard("./img/beluga.png", 3)}
            {this.renderWhaleCard("./img/sperm.png", 4)}
            {this.renderWhaleCard("./img/livyatan.png", 5)}
          </div>
        </div>
        <div id="whaleInfo">
          {this.state.show ? this.renderWhaleHouse(whales[this.state.count], this.state.count) : null}
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  count: 0
};

App.propTypes = {
  count: PropTypes.number
};

export default App;

//class and array to store the whale info.

class Whale {
  constructor(name, latin, about, age, size, amount, image) {
      this.name = name;
      this.latin = latin;
      this.about = about;
      this.age = age;
      this.size = size;
      this.amount = amount;
      this.image = image;
  }
}

var narwhal =  new Whale("Narwhal", "Monodon monoceros", "The narwhal is an arctic predator found in the Canadian arctic, greenlandic and Russian waters. They mainly eat Greenland halibut, polar and arctic cod, and cuttlefish. Polar bears, killer whales, walruses, and humans are the narwhal’s main predators, though entrapment under ice often leads to drowning. They usually congregate in groups of twenty, though during their summer migration, many groups come together. ", "50 years", "3.95 to 5.5m, 600 to 1600kg", "170,000", "./img/narwhale-map.png");

var bowhead = new Whale("Bowhead Whale", "Balaena mysticetus", "The whale's blubber is the thickest of that of any animal, with a maximum of 43–50 cm. They do not migrate to low latitude waters like other whales. They are the mammal with the largest mouth. The head takes up a third of its body.", "200 years", "17m, 75 to 100 tonnes", "10,000", "./img/bowhead-map.png");

var killer = new Whale("Killer Whale", "Orcinus orca", "Apex predators, no animal preys on them. They are really social, they live in groups of related females headed by the oldest female called pods. They use echolocation to hunt, which means they produce sounds and then listen to their echos to tell how far objects are. They can sleep with one eye opened. The language of killer whales is one of the most complex in the animal kingdom.", "50 years", "6 to 8m, 3600 to 5400kg", "N/A", "./img/orca-map.jpg");

var beluga = new Whale("Beluga Whale", "Delphinapterus leucas", "Beluga means 'white' in russian. However, they are born dark gray. It can take up to eight years before they turn completely white. Belugas are known as the 'canaries of the sea' because the vast range of sounds they produce. The vertebrae in a beluga’s neck is not fused together, giving it the unusual ability to turn its head up, down and side-to-side. The beluga is able to swim backwards. The beluga can change the shape of its bulbous forehead, called a 'melon,' by blowing air around its sinuses.", "30 years", "4.2m, 1400kg", "150,000", "./img/beluga-map.png");

var sperm = new Whale("Sperm Whale", "Physeter macrocephalu", "The sperm whale is the largest of the toothed whales and the largest toothed predator. The sperm whale is a pelagic mammal with a worldwide range, and will migrate seasonally for feeding and breeding. Females and young males live together in groups, while mature males (bulls) live solitary lives outside of the mating season. The females cooperate to protect and nurse their young. Females give birth every four to twenty years, and care for the calves for more than a decade. A mature sperm whale has few natural predators, although calves and weakened adults are sometimes killed by pods of killer whales.", "60 years", "16m", "200,000", "./img/sperm-map.png");

var livyatan = new Whale("Livyatan", "Livyatan melvillei", "Livyatan is an extinct genus of sperm whale. Its name was inspired by the biblical sea monster Leviathan, and the author of the book Moby-Dick, Herman Melville, where the antagonist is a large sperm whale. It was found in the Pisco Formation of Peru and lived during the Tortonian stage of the Mioceneepoch, about 9.9–8.9 million years ago (mya), however a large tooth from Australia implies that either it or a close relative survived into the Pliocene, around 5 mya. It was a member of a group of hyper-predatory macroraptorial sperm whales and was likely an apex predator, preying on whales, seals, and so forth. Characteristic of raptorial sperm whales, Livyatan had functional, enamel-coated teeth on the upper and lower jaws, as well as several adaptations for hunting large prey.", "N/A", "16m", "0", "./img/livyatan-map.jpg");

var whales = [narwhal, bowhead, killer, beluga, sperm, livyatan];