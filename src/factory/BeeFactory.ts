import BeeModel from '../model/BeeModel';
import BEE_CREATION_DETAILS from '../data/BeeCreationData';
import BeeRoles from '../type/BeeRoles';

export default class BeeFactory{
    static createBee(type: BeeRoles, id: number): BeeModel{
        return new BeeModel(id, type, BEE_CREATION_DETAILS[type].hp, BEE_CREATION_DETAILS[type].hp, BEE_CREATION_DETAILS[type].lossPerHit)
    }
}