function chatLogger(input) {
  input.pop();
  const COMMANDS = {
    CHAT: 'Chat',
    DELETE: 'Delete',
    EDIT: 'Edit',
    PIN: 'Pin',
    SPAM: 'Spam'
  }
  let chatLog = [];
  input.forEach(line => {
    let [command, ...string] = line.split(' ');
    if (command === COMMANDS.CHAT) {
      chat(string[0]);
    } else if (command === COMMANDS.DELETE) {
      deleteLog(string[0]);
    } else if (command === COMMANDS.EDIT) {
      edit(string);
    } else if (command === COMMANDS.PIN) {
      pin(string[0]);
    } else if (command === COMMANDS.SPAM) {
      spam(string);
    }
  });

  chatLog.forEach(element => {
    console.log(element);
  });

  function chat(string) {
    chatLog.push(string);
  }
  
  function deleteLog(string) {
    const deleteIndex = chatLog.indexOf(string);
    chatLog.splice(deleteIndex, 1);
  }

  function edit(string) {
    const editIndex = chatLog.indexOf(string[0]);
    chatLog[editIndex] = string[1];
  }

  function pin(string) {
    const pinIndex = chatLog.indexOf(string);
    const toBePinned = chatLog[pinIndex];
    chatLog.splice(pinIndex, 1);
    chatLog.push(toBePinned);
  }

  function spam(string) {
    string.forEach(element => {
      chatLog.push(element);
    });
  }
}
chatLogger(['Chat Hello',
'Chat darling',
'Edit darling Darling',
'Spam how are you',
'Delete Darling',
'end']);