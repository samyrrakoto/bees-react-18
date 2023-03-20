import { useState } from 'react';
import BeeModel from '../model/BeeModel';
import Hive from './Hive';
import HiveService from '../service/HiveService';
import HiveRepository from '../service/HiveRepository';
import HiveFactory from '../factory/HiveFactory';
import ResetGame from './ResetGame';
import GodSave from './GodSave';

export default function Game(){
    const hiveState: string | null = HiveRepository.getHiveState();
    const [hive, setHive] = useState<BeeModel[]>(
            hiveState
            ? HiveFactory.deserializeToBeeModel(JSON.parse(String(HiveRepository.getHiveState())))
            : HiveService.createNewHive()
        );
    const [gameOver, setGameOver] = useState(false);
    
    return (
        <div className="container">            
            <GodSave isGameOver={gameOver}/>
            <Hive hive={hive} setHive={setHive} setGameOver={setGameOver} isGameOver={gameOver}/>
            <ResetGame setHive={setHive} setGameOver={setGameOver}/>
        </div>
    );
}