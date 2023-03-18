import BeeModel from "../model/BeeModel";

export default class HiveRepository {
    static getHiveState(): string | null {
        return localStorage.getItem('hive');
    }

    static updateHiveState(hive: BeeModel[]): void {
        localStorage.setItem('hive', JSON.stringify(hive));
    }
}