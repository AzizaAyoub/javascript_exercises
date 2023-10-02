// let's write a function gteetingMessage

let greetingMessage = 'Good Morning';
function greetPeople() {
    console.log(greetingMessage)
}

function changeGreetingMessage(newMessage) {
    greetingMessage = newMessage;
}
changeGreetingMessage('Good Evning');
greetPeople();