import Bee from "./Bee";
import BeeModel from "../model/BeeModel";
import { Dispatch, SetStateAction } from "react";
import HiveService from '../service/HiveService';
import HiveRepository from "../service/HiveRepository";
import HiveFactory from "../factory/HiveFactory";


type Props = {
    hive: BeeModel[],
    setHive: Dispatch<SetStateAction<BeeModel[]>>
}

export default function Hive({hive, setHive}: Props) {
    function hitRandomBee(){
        HiveService.hitRandomBee();
        const updatedHive: BeeModel[] = HiveFactory.restoreBeeTypeArray(JSON.parse(String(HiveRepository.getHiveState())));
        setHive(updatedHive);
    }

    const bees = hive.map(
        bee => 
            <Bee 
                key={bee.id}
                bee={bee}
            />
    );
    return (
        <div className="container">
            <div>
                {bees}
            </div>
            <div className="hitBtn">
                <button className="button-49" onClick={hitRandomBee}>Hit a bee</button>
            </div>
        </div>
    )
}