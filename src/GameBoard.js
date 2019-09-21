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
			            <h1 class="title">SBU MONOPOLY</h1>
                        <div class="chance-deck">
                            <h2 class="label">Chance</h2>
                            <div class="deck"></div>
                        </div>
                    </div>
                    <GoTile propertyName="SAC Loop" tileId={0} tileInstruction="Collect $200 as you pass go"/>
                    <div className="row horizontal-row bottom-row">
                    <HouseTile propertyName="Melville Library" tileId={9} colorGroup="light-blue" footerPrice="$120" />  
                    <HouseTile propertyName="Frey Hall" tileId={8} colorGroup="light-blue" footerPrice="$100" />
                    <ChanceTile propertyName="Chance" tileId={7}/>
                    <HouseTile propertyName="Harriman Hall" tileId={6} colorGroup="light-blue"  footerPrice="$100" />
                    <DiningTile propertyName="East Side Dining" tileId={5} footerPrice="$200" />
                    <TaxTile propertyName="Housing Fee" tileId={4} footerPrice="$200" />
                    <HouseTile propertyName="Javits Center" tileId={3} colorGroup="dark-purple"  footerPrice="$60" />
                    <ChanceTile propertyName="Community Chest" tileId={2}/>
                    <HouseTile propertyName="Earth & Space Sciences" tileId={1} colorGroup="dark-purple" footerPrice="$60" />
                    </div>
                    <JailTile propertyName="Jail" tileId={10} />
                    <div className="row vertical-row left-row">
                        <HouseTile propertyName="Light Engineering" tileId={19} colorGroup="orange" footerPrice="$200" />
                        <HouseTile propertyName="New Comp Sci" tileId={18} colorGroup="orange" footerPrice="$180" />
                        <ChanceTile propertyName="Community Chest" tileId={17}/>
                        <HouseTile propertyName="Old Comp Sci" tileId={16} colorGroup="orange" footerPrice="$180" />
                        <DiningTile propertyName="West Side Dining" tileId={15} footerPrice="$200" />
                        <HouseTile propertyName="James College" tileId={14} colorGroup="purple" footerPrice="$160" />
                        <HouseTile propertyName="Langmuir College" tileId={13} colorGroup="purple" footerPrice="$140" />
                        <UtilityTile propertyName="SBU Buses" tileId={12} footerPrice="$200" />
                        <HouseTile propertyName="Benedict College" tileId={11} colorGroup="purple" footerPrice="$140" />
                    </div>
                    <div className="space corner free-parking">
                        <FreeParkingTile propertyName="Free Parking" tileId={20}/>
                    </div>
                    <div className="row horizontal-row top-row">
                        <HouseTile propertyName="Cardozo College" tileId={29} colorGroup="red" footerPrice="$220" />
                        <ChanceTile propertyName="Chance" tileId={28}/>
                        <HouseTile propertyName="Mount College" tileId={27} colorGroup="red" footerPrice="$220" />
                        <HouseTile propertyName="Gershwin College" tileId={26} colorGroup="red" footerPrice="$240" />
                        <DiningTile propertyName="Roth Cafe" tileId={25} footerPrice="$200" />
                        <HouseTile propertyName="Humanities" tileId={24} colorGroup="yellow" footerPrice="$260" />
                        <HouseTile propertyName="Staller Center" tileId={23} colorGroup="yellow" footerPrice="$260" />
                        <UtilityTile propertyName="Softheon Bikes" tileId={22} footerPrice="$150" />
                        <HouseTile propertyName="Wang Center" tileId={21} colorGroup="yellow" footerPrice="$280" />
                    </div>
                    <div className="space corner go-to-jail">
                        <GoToJailTile propertyName="Go to Jail" tileId={30}/>
                    </div>
                    <div className="row vertical-row right-row">
                        <HouseTile propertyName="Island Federal Arena" tileId={39} colorGroup="green" footerPrice="$300" />
                        <HouseTile propertyName="Rec Center" tileId={38} colorGroup="green" footerPrice="$300" />
                        <ChanceTile propertyName="Community Chest" tileId={37}/>
                        <HouseTile propertyName="LaValle Stadium" tileId={36} colorGroup="green" footerPrice="$320" />
                        <DiningTile propertyName="Jasmine" tileId={35} footerPrice="$200" />
                        <ChanceTile propertyName="Chance" tileId={34}/>
                        <HouseTile propertyName="Chavez Hall" tileId={33} colorGroup="dark-blue" footerPrice="$350" />
                        <TaxTile propertyName="Tuition Fee" tileId={32} footerPrice="$100"/>
                        <HouseTile propertyName="Tubman Hall" tileId={31} colorGroup="dark-blue" footerPrice="$400" />


                    </div>
                </div>
            </div>
        );
    }
}

export default GameBoard;