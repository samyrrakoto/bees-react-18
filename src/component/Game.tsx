import { useState } from 'react';
import BeeModel from '../model/BeeModel';
import Hive from './Hive';
import HiveService from '../service/HiveService';
import HiveRepository from '../service/HiveRepository';
import HiveFactory from '../factory/HiveFactory';

export default function Game(){
    const hiveState: string | null = HiveRepository.getHiveState();
    const [hive, setHive] = useState<BeeModel[]>(
            hiveState
            ? HiveFactory.deserializeToBeeModel(JSON.parse(String(HiveRepository.getHiveState())))
            : HiveService.createNewHive()
        );
    
    return <Hive hive={hive} setHive={setHive}/>;
}