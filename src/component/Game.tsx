import Hive from './Hive';
import HiveService from '../service/HiveService';
import HiveRepository from '../service/HiveRepository';
import HiveFactory from '../factory/HiveFactory';

export default function Game(){
    const beeState: string | null = HiveRepository.getHiveState();
    const hive = (beeState) 
        ? HiveFactory.restoreBeeTypeArray(JSON.parse(String(HiveRepository.getHiveState())))
        : HiveService.createNewHive();
    
    return <Hive hive={hive}/>;
}