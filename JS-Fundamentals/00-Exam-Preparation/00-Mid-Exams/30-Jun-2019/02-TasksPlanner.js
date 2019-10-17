function tasksPlanner(array) {
    let tasks = array.shift().split(' ');

    array.forEach(element => {
        let [command, ...commandSpecifics] = element.split(' ');  
        if (command === 'Complete') {
            completePlans(Number(commandSpecifics[0]));
        } else if (command === 'Change') {
            changePlans(Number(commandSpecifics[0]), commandSpecifics[1]);
        } else if (command === 'Drop') {
            dropPlans(Number(commandSpecifics[0]));
        } else if (command === 'Count') {
            countPlans(commandSpecifics[0]);
        }
    });

    let result = [];
    tasks.forEach(element => {
        if (Number(element) > 0) {
            result.push(element);
        }
    });
    console.log(result.join(' '));
    

    function completePlans(index) {
        if (tasks[index]) {
            tasks[index] = '0';
        }
    }

    function changePlans(index, time) {
        if (tasks[index]) {
            tasks[index] = time;
        }
    }

    function dropPlans(index) {
        if (tasks[index]) {
            tasks[index] = '-1';
        }
    }

    function countPlans(toBeCounted) {

        if (toBeCounted === 'Completed') {
            let countOfCompleted = 0;
            tasks.forEach(element => {
                if (element === '0') {
                    countOfCompleted++;
                }
            });
            console.log(countOfCompleted);

        } else if (toBeCounted === 'Incomplete') {
            let countOfIncompleted = 0;
            tasks.forEach(element => {
                if(Number(element) > 0) {
                    countOfIncompleted++;
                }
            });
            console.log(countOfIncompleted);

        } else if (toBeCounted === 'Dropped') {
            let countOfDropped = 0;
            tasks.forEach(element => {
                if (element === '-1') {
                    countOfDropped++;
                }
            });
            console.log(countOfDropped);
        }
    }
    
}

tasksPlanner([
    '1 -1 2 3 4 5',
    'Complete 4',
    'Change 0 4',
    'Drop 3',
    'Count Dropped',
    'End'
  ]);