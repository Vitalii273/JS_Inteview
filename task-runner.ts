interface ITask {
    taskId: string;
    taskFunc: () => Promise<void>;
}

interface ITaskRunner {
    maxRunningTasks: number | null;
    addTasks(tasks: ITask[]): void;
    run(): void;
}

class TaskRunner implements ITaskRunner {
    maxRunningTasks: number | null;
    runningTasks: number;
    taskQueue: ITask[];
    cache: Set<string>;

    constructor(maxRunningTasks: number | null) {
        this.maxRunningTasks = maxRunningTasks;
        this.runningTasks = 0;
        this.taskQueue = [];
        this.cache = new Set();
    }

    addTasks(tasks: ITask[]): void {
        tasks.forEach(t => {
            if(!this.cache.has(t.taskId)){
                this.taskQueue.push(t);
                this.cache.add(t.taskId)
            }
        })
    }

    run(): void {
        if (this.taskQueue.length === 0 || this.runningTasks > 0) {
            // The TaskRunner is already running or there are no tasks in the queue
            return;
        }

        const maxRunningTasks = this.maxRunningTasks !== null ? this.maxRunningTasks : this.taskQueue.length;

        while (this.runningTasks < maxRunningTasks && this.taskQueue.length > 0) {
            const task = this.taskQueue.shift();
            if (task) {
                this.executeTask(task).then(r => r);
            }
        }
    }

    private async executeTask(task: ITask): Promise<void> {
        this.runningTasks++;

        try {
            await task.taskFunc();
        } catch (error) {
            console.error(`Error executing task ${task.taskId}:`, error);
        } finally {
            this.runningTasks--;

            if (this.runningTasks === 0 && this.taskQueue.length > 0) {
                // If there are no more running tasks, but the queue is not empty, run additional tasks
                this.run();
            }
        }
    }
}

// ----------------------------------------------------------------------------------------------
console.log('------------------------------------------------')

// const getTimeoutMS = () => {
//   return Number((Math.random() * 1000).toFixed(0));
// };

// const tasks: ITask[] = [];

// for (let i = 0; i < 5; i++) {
//   tasks.push({
//     taskId: `t{i}`,
//     taskFunc: (): Promise<void> => {
//       console.log("task started");
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           console.log("task completed");
//           resolve();
//         }, getTimeoutMS());
//       });
//     }
//   });
// };

// const taskRunner = new TaskRunner(3);

// taskRunner.addTasks(tasks);

// taskRunner.run();

/*
(console)
(3 tasks are running out of 5 that were added)

task started
task started
task started

(after random milliseconds a task will complete and because we have a max number of 3 tasks another task will start running leaving one more task waiting)

task completed
task started

(after random milliseconds a task will complete and because we have a max number of 3 tasks another task will start running leaving no more tasks waiting)

task completed
task started

(after random milliseconds a task will complete and we don't have any more tasks waiting)

task completed

(after random milliseconds a task will complete and we don't have any more tasks waiting)

task completed

(after random milliseconds a task will complete and we don't have any more tasks waiting)

task completed

*/

//--------------------------------------------------------------------------------

const getTimeoutMS = () => {
    return 200;
};

const tasks: ITask[] = [];

for (let i = 0; i < 5; i++) {
    tasks.push({
        taskId: `t${i}`,
        taskFunc: (): Promise<void> => {
            console.log("task started");
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("task completed");
                    resolve();
                }, getTimeoutMS());
            });
        }
    });
};

// tasks.push({
//     taskId: `t{1}`,
//     taskFunc: (): Promise<void> => {
//       console.log("task started");
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           console.log("task completed");
//           resolve();
//         }, getTimeoutMS());
//       });
//     }
//   })

// tasks.push({
//     taskId: `t{1}`,
//     taskFunc: (): Promise<void> => {
//       console.log("task started");
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           console.log("task completed");
//           resolve();
//         }, getTimeoutMS());
//       });
//     }
//   })

const taskRunner = new TaskRunner(4);

taskRunner.addTasks(tasks);

taskRunner.run();


/*

(console)
(all 5 tasks starts at the same time)

task started
task started
task started
task started
task started

(after ~200 ms all 5 tasks are completed at the same time)

task completed
task completed
task completed
task completed
task completed

*/

console.log('testing')
