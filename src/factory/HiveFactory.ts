import BeeModel from '../model/BeeModel';
import BEE_CREATION_DATA from '../data/BeeCreationData';
import BeeFactory from './BeeFactory';
import BeeRoles from '../type/BeeRoles';

export default class HiveFactory {
    static beeCounter: number = 0;

    static createHive(): BeeModel[] {
        const bees: BeeModel[] = [];

        Object.entries(BEE_CREATION_DATA).forEach(([beeType, beeTypeObject]) =>{
            const amount: number = beeTypeObject.amount;
            for (let i: number = 1; i <= amount; i++) {
                bees.push(BeeFactory.createBee(beeType as BeeRoles, this.beeCounter));
                this.beeCounter++;
            }
        });

        return bees;
    }

    static deserializeToBeeModel(bees: BeeModel[]): BeeModel[] {
        const deserializedBees : BeeModel[] = []
        bees.forEach(bee => {
                const deserializedBee = new BeeModel(bee.id, bee.role, bee.lp, bee.hp, bee.lossPerHit);
                deserializedBee.isLastHit = bee.isLastHit;
                deserializedBees.push(deserializedBee);
            }
        )

        return deserializedBees;
    }
}