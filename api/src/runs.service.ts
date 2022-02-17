import { Run, RunEntity } from "../lib/api-interfaces";

export class RunService {
  private readonly runPresets!: RunEntity[];
  private readonly runlogs: RunEntity[] = []; 

  getRunPresets(): RunEntity[] {
    return this.runPresets;
  }

  getNewRunLogs(): RunEntity[] {
    return this.runlogs;
  }

  getSingleRun(id: string): RunEntity {
    const singleRun = this.runPresets.find(run => run.id === id);

    if(!singleRun) {
      throw new Error('Run not found')
    }
    return singleRun;
  }
}