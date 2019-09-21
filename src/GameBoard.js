import React, { Component } from 'react';
import './css/tiles.scss';
import ChanceTile from "./ChanceTile.js";
import GoTile from "./GoTile.js";
import FreeParkingTile from "./FreeParkingTile.js";
import GoToJailTile from "./GoToJailTile.js";
import JailTile from "./JailTile.js";
import HouseTile from "./HouseTile.js";
import TaxTile from "./TaxTile.js";
import Color from "./Constants.js";
import DiningTile from "./DiningTile";
import UtilityTile from "./UtilityTile";



class GameBoard extends Component {
    constructor(props) {
        super();
    }

    render() {
        return(
            <div class="table">
                <div className="board">
                    <div className="center">
                        <div class="community-chest-deck">
                            <h2 class="label">Community Chest</h2>
                            <div class="deck"></div>
			            </div>
			            <h1 class="title">MONOPOLY</h1>
                        <div class="chance-deck">
                            <h2 class="label">Chance</h2>
                            <div class="deck"></div>
                        </div>
                    </div>
                    <div className="space corner go">
                        <GoTile propertyName="SAC Loop" tileId={0} tileInstruction="Collect $200 as you pass go"/>
                    </div>
                    <div className="row horizontal-row bottom-row">
                    <HouseTile propertyName="Melville Library" tileId={9} colorGroup="light-blue" footerPrice="$200" />  
                    <HouseTile propertyName="Frey Hall" tileId={8} colorGroup="light-blue" />
                    <ChanceTile propertyName="Chance" tileId={7}/>
                    <HouseTile propertyName="Harriman Hall" tileId={6} colorGroup="light-blue" />
                    <DiningTile propertyName="East Side Dining" tileId={5} />
                    <TaxTile propertyName="Housing Fee" tileId={4} />
                    <HouseTile propertyName="Javits Center" tileId={3} colorGroup="brown" />
                    <ChanceTile propertyName="Community Chest" tileId={2}/>
                    <HouseTile propertyName="Earth & Space Sciences" tileId={1} colorGroup="brown" />
                    </div>
                    <div className ="space corner jail">
                        <JailTile propertyName="Jail" tileId={10} />
                    </div>
                    <div className="row vertical-row left-row">
                        <HouseTile propertyName="Light Engineering" tileId={19} colorGroup={Color.Orange}/>
                        <HouseTile propertyName="New Comp Sci" tileId={18} colorGroup={Color.Orange}/>
                        <ChanceTile propertyName="Community Chest" tileId={17}/>
                        <HouseTile propertyName="Old Comp Sci" tileId={16} colorGroup={Color.Orange}/>
                        <DiningTile propertyName="West Side Dining" tileId={15} />
                        <HouseTile propertyName="James College" tileId={14} colorGroup={Color.Pink} />
                        <HouseTile propertyName="Langmuir College" tileId={13} colorGroup={Color.Pink} />
                        <UtilityTile propertyName="Housing Fee" tileId={12}/>
                        <HouseTile propertyName="Benedict College" tileId={11} colorGroup={Color.Pink} />
                    </div>
                    <div className="space corner free-parking">
                        <FreeParkingTile propertyName="Free Parking" tileId={20}/>
                    </div>
                    <div className="row horizontal-row top-row">
                        <HouseTile propertyName="Gershwin College" tileId={21} colorGroup={Color.Red}/>
                        <ChanceTile propertyName="Chance" tileId={22}/>
                        <HouseTile propertyName="Cardozo College" tileId={23} colorGroup={Color.Red}/>
                        <HouseTile propertyName="Mount College" tileId={24} colorGroup={Color.Red}/>
                        <DiningTile propertyName="Roth Cafe" tileId={25}/>
                        <HouseTile propertyName="Wang Center" tileId={26} colorGroup={Color.Yellow}/>
                        <HouseTile propertyName="Staller Center" tileId={27} colorGroup={Color.Yellow}/>
                        <UtilityTile propertyName="Tuition Fee" tileId={28}/>
                        <HouseTile propertyName="Humanities" tileId={29} colorGroup={Color.Yellow}/>
                    </div>
                    <div className="space corner go-to-jail">
                        <GoToJailTile propertyName="Go to Jail" tileId={30}/>
                    </div>
                    <div className="row vertical-row right-row">
                        <HouseTile propertyName="Island Federal Arena" tileId={31} colorGroup={Color.Green}/>
                        <HouseTile propertyName="Rec Center" tileId={32} colorGroup={Color.Green}/>
                        <ChanceTile propertyName="Community Chest" tileId={33}/>
                        <HouseTile propertyName="LaValle Stadium" tileId={34} colorGroup={Color.Green}/>
                        <DiningTile propertyName="Jasmine" tileId={35}/>
                        <ChanceTile propertyName="Chance" tileId={36}/>
                        <HouseTile propertyName="Chavez Hall" tileId={37} colorGroup={Color.Blue}/>
                        <TaxTile propertyName="Income Tax" tileId={38}/>
                        <HouseTile propertyName="Tubman Hall" tileId={39} colorGroup={Color.Blue}/>


                    </div>
                </div>
            </div>
        );
    }
}

export default GameBoard;