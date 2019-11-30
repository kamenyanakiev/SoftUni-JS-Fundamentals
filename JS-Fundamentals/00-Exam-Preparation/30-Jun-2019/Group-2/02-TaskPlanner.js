function taskPlanner(array) {
    let tasks = array.shift().split(' ');
    
    array.forEach(element => {
        let [action, ...actionSpesifics] = element.split(' ');
        if (action === 'Complete') {
            completeTask(Number(actionSpesifics[0]));
        } else if (action === 'Change') {
            changetask(Number(actionSpesifics[0]), actionSpesifics[1]);
        } else if (action === 'Drop') {
            dropTask(Number(actionSpesifics[0]))
        } else if (action === 'Count') {
            countTasks(actionSpesifics[0]);
        }
    });

    let finalTasks = [];
    tasks.forEach(task => {
        if (Number(task) > 0) {
            finalTasks.push(task);
        }
    });
    console.log(finalTasks.join(' '));
    
    function completeTask(index) {
        if (tasks[index]) {
            tasks[index] = '0';
        }
    }

    function changetask(index, time) {
        if (tasks[index]) {
            tasks[index] = time;
        }
    }

    function dropTask(index) {
        if (tasks[index]) {
            tasks[index] = '-1';
        }
    }

    function countTasks(countType) {
        if (countType === 'Completed') {
            let completed = 0;
            tasks.forEach(task => {
                if (task === '0') {
                    completed++;
                }
            });
            console.log(completed);
        } else if (countType === 'Incomplete') {
            let incomplete = 0;
            tasks.forEach(task => {
                if (Number(task) > 0) {
                    incomplete++;
                }
            });
            console.log(incomplete);
        } else if (countType === 'Dropped') {
            let dropped = 0;
            tasks.forEach(task => {
                if (task === '-1') {
                    dropped++;
                }
            });
            console.log(dropped);
        }
    }
}

taskPlanner([
    '1 -1 2 3 4 5',
    'Complete 4',
    'Change 0 4',
    'Drop 3',
    'Count Dropped',
    'End'
  ]);