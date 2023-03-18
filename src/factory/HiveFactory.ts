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

    static restoreBeeTypeArray(bees: BeeModel[]): BeeModel[] {
        const restoredBees : BeeModel[] = []
        bees.forEach(bee => {
                const restoredBee = new BeeModel(bee.id, bee.role, bee.lp, bee.hp, bee.lossPerHit);
                restoredBee.isLastHit = bee.isLastHit;
                restoredBees.push(restoredBee);
            }
        )

        return restoredBees;
    }
}