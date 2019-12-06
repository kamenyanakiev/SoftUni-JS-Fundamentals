function followers(array) {
    let data = {};
    array.forEach(element => {
        const [command, ...commandDetails] = element.split(': ');
        switch (command) {
            case 'New follower':
                addFollower(commandDetails[0]);
                break;
            case 'Like':
                likeFollower(commandDetails[0], Number(commandDetails[1]));
                break;
            case 'Comment':
                commentFollower(commandDetails[0]);
                break;
            case 'Blocked':
                blockFollower(commandDetails[0]);
                break;

            default:
                break;
        }
    });

    const followers = Object.keys(data);
    console.log(`${followers.length} followers`);
    if (followers.length > 0) {
        followers.sort((followerOne, followerTwo) => data[followerTwo].likes - data[followerOne].likes || followerOne.localeCompare(followerTwo));
        for(let currentFollower of followers) {
            const total = data[currentFollower].likes + data[currentFollower].comments
            console.log(`${currentFollower}: ${total}`);
        }
    }

    function addFollower(name) {
        if (!data.hasOwnProperty(name)) {
            data[name] = {
                likes: 0,
                comments: 0
            };
        }
    }

    function likeFollower(name, count) {
        if (data.hasOwnProperty(name)) {
            data[name].likes += count;
        } else {
            data[name] = {
                likes: count,
                comments: 0
            }
        }
    }

    function commentFollower(name) {
        if (data.hasOwnProperty(name)) {
            data[name].comments++;
        } else {
            data[name] = {
                likes: 0,
                comments: 1
            }
        }
    }

    function blockFollower(name) {
        if (data.hasOwnProperty(name)) {
            delete data[name];
        } else {
            console.log(`${name} doesn't exist.`);
        }
    }
}

followers([
    'New follower: gosho',
    'Like: gosho: 5',
    'Comment: gosho',
    'New follower: gosho',
    'New follower: tosho',
    'Comment: gosho',
    'Comment: tosho',
    'Comment: pesho',
    'Log out'
]);