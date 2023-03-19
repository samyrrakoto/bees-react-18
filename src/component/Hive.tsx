import Bee from "./Bee";
import BeeModel from "../model/BeeModel";
import { Dispatch, SetStateAction } from "react";
import HiveService from '../service/HiveService';
import HiveRepository from "../service/HiveRepository";
import HiveFactory from "../factory/HiveFactory";
import HitBee from "./HitBee";

type Props = {
    hive: BeeModel[],
    setHive: Dispatch<SetStateAction<BeeModel[]>>
}

export default function Hive({hive, setHive}: Props) {
    function hitRandomBee(){
        HiveService.hitRandomBee();
        const updatedHive: BeeModel[] = HiveFactory.deserializeToBeeModel(JSON.parse(String(HiveRepository.getHiveState())));
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
            <HitBee hitFunction={hitRandomBee}/>
        </div>
    )
}