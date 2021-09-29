/*
   Mediator Pattern 
   Scenario:
     Have a Chatroom(Mediator)- that will be used to route & regulate message sending btn members
     Members - Send/receive msg to other members in a chartroom

*/

//Create Members
function Members(name) {
  this.name = name;
  this.chatroom = null;
}

Members.prototype = {
  send: function (message, toMember) {
    this.chatroom.send(message, this, toMember);
  },

  receive: function (message, fromMember) {
    console.log(
      `From:${fromMember.name}\nTo:${this.name}\n\nMessage:${message}`
    );
  },
};

//Define the Chatrooom(Mediator)

function Chatroom() {
  this.members = {};
}

Chatroom.prototype = {
  addMember: function (member) {
    this.members[member.name] = member;
    member.chatroom = this;
  },
  send: function (message, fromMember, toMember) {
    toMember.receive(message, fromMember);
  },
};

//Instantiate new Members
const john = new Members("John");
const jane = new Members("Jane");
const joseph = new Members("Joseph");
const joseline = new Members("Joseline");
const jackson = new Members("Jackson");
const joshua = new Members("Joshua");

const chat = new Chatroom();

//Add members to chatroom
chat.addMember(john);
chat.addMember(jane);
chat.addMember(joseph);
chat.addMember(joseline);
chat.addMember(jackson);
chat.addMember(joshua);

john.send("Hi! Jane", jane);
jane.send("Hello! John", john);
john.send("How are you", jane);
