//leetcode.com/problems/single-threaded-cpu/

// Scheduling task on CPU
// Imagine a list of tasks on a single-core CPU
// Task
https: task = {
  id: number,
  queued_time: number,
  exec_time: number,
};

// Starting at time 0, look for the task with minimum exec_time in the queue, and execute

Input: [
  { id: 1, queued_time: 1, exec_time: 10 },
  { id: 2, queued_time: 3, exec_time: 7 },
  { id: 3, queued_time: 6, exec_time: 3 },
];
// Output: [1, 3, 2]

// brute-force
var getOrder = function (taskList) {
  taskList = taskList.map((task, index) => {
    return {
      id: index,
      queued_time: task[0],
      exec_time: task[1],
    };
  });

  const res = [];
  if (!taskList) {
    return res;
  }
  let cur_time = 0;

  taskList.sort((a, b) => a.queued_time - b.queued_time);
  const q = [];

  while (res.length < taskList.length) {
    for (let task of taskList) {
      if (
        task.queued_time <= cur_time &&
        !res.includes(task.id) &&
        !q.map((task) => task.id).includes(task.id)
      ) {
        q.push(task);
      }
    }
    if (!q.length) {
      for (let task of taskList) {
        if (res.includes(task.id)) {
          continue;
        } else {
          cur_time = task.queued_time;
          break;
        }
      }
      continue;
    }
    q.sort((a, b) => a.exec_time - b.exec_time);
    const nextTask = q.shift();
    cur_time += nextTask.exec_time;
    res.push(nextTask.id);
  }

  return res;
};

// O(nlogn)
