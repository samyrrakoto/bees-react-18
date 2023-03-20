import BeeModel from "../model/BeeModel";
import HiveFactory from "../factory/HiveFactory";
import HiveRepository from "./HiveRepository";

export default class HiveService {
    static createNewHive(): BeeModel[] {
        let hive: BeeModel[] = HiveFactory.createHive();
        hive = this.shuffleHive(hive);
        HiveRepository.updateHiveState(hive);

        return hive;
    }

    static shuffleHive(hive: BeeModel[]) {
        for (let i: number = hive.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp: BeeModel = hive[i];
            hive[i] = hive[j];
            hive[j] = temp;
        }

        return hive;
    }

    static hitRandomBee(): boolean {
        const hive: [] = JSON.parse(String( HiveRepository.getHiveState()));
        const beeHive: BeeModel[] = HiveFactory.deserializeToBeeModel(hive);

        const livesBeesIndexes: number[] = this.getLiveBeesIndexes(beeHive);
        const randomIndex: number = Math.floor(Math.random() * livesBeesIndexes.length);
        const randomBee: BeeModel = beeHive[livesBeesIndexes[randomIndex]];

        randomBee.getHit();
        randomBee.isLastHit = true;
        randomBee.lp = randomBee.lp <= 0 ? 0 : randomBee.lp;
        this.toggleLastHits(randomBee, beeHive);

        HiveRepository.updateHiveState(beeHive);

        return randomBee.role === "queen" && randomBee.lp === 0;
    }

    static getLiveBeesIndexes(bees: BeeModel[]): number[] {
        const livesBeesIndexes: number[] = [];
        let i: number = 0;
        bees.forEach(bee => {
            if (bee.lp > 0){
                livesBeesIndexes.push(i);
            }
            i++;
        });

        return livesBeesIndexes;
    }

    static toggleLastHits(randomBee: BeeModel, beeHive: BeeModel[]): void {
        for (let i = 0; i < beeHive.length; i++)
        {
            if (randomBee === beeHive[i])
            {
                continue;
            }
            beeHive[i].isLastHit = false;
        }
    }
}