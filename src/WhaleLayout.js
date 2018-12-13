import React from 'react';
import WhaleCard from './WhaleCard.js';

//icons for WhaleCards
import narwhalIcon from './img/narwhal.png'
import bowheadIcon from './img/bowhead.png';
import orcaIcon from './img/orca.png';
import belugaIcon from './img/beluga.png';
import spermIcon from './img/sperm.png';
import livyatanIcon from './img/livyatan.png';

export class WhaleLayout extends React.Component {


    renderWhaleCard(icon, i) {
        return (
          <WhaleCard image={icon} index={i} />
        );
      }

    render() {

        return(
            <div id="whaleIcons">
                <div id="row1" className="row">
                    {this.renderWhaleCard(narwhalIcon, 0)}
                    {this.renderWhaleCard(bowheadIcon, 1)}
                    {this.renderWhaleCard(orcaIcon, 2)}
                </div>
                <div id="row1" className="row">
                    {this.renderWhaleCard(belugaIcon, 3)}
                    {this.renderWhaleCard(spermIcon, 4)}
                    {this.renderWhaleCard(livyatanIcon, 5)}
                </div>
            </div>
        );
    }    
}

export default WhaleLayout;