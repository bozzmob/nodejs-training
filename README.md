#NodeJS training

Basic concepts of Node and understanding how it works

Scheduler commits(Client JS)-

> 3 jobs to be done (Work starter, Empty for loop, Work Completed)

> Making chunks of the for-loop (multiple split iterations)

> Create callback function for onWorkCompletion and onWorkProgress

Node-Intro commits-

> A simple Hello World module

Calculator commits-

> A basic Calculator

> Node Module

Accumulator commits-

> A basic accumulator

Accumulator Factory commits-

> Accumulator Factory - function wrapper

> Accumulator Client - Now, the states of 2 variables are maintained

Async commits-

> Error Handling. *No Try-catch for Async!!*

Print File commits-

> Print to console
> Print to console - Sync
> Using streams

Web Server commits-

> Basic server
> Calculator using GET
> Calculator using POST


//// To refactor


Task Manager App-
Task List
Task Add
Task Toggle

Async-
To learn about sync

App Server-
Modularized components from Day-1's Web server

---
Morgan - Log file.
---

Chat App info-
To Run-

http-server -p 7890
node app.js

use clusters for scalability
nodejs.org/api/cluster.html
Fork the master cluster.isMaster using cluster.fork([env]). Forked one's isMaster api will return false. Number of forks = Number of CPU's(value got by - os.cpus()).
run- node app

open task manager and see in processes. you will have multiple processes.

Use PM2 - Load balancer + Helps in Scalings

---
Net App info-
Run app-
node server.js test.txt
Another console-
telnet localhost:8080

Change the file. New values will reflect. Telnet is the client here. You can replace telnet with your own client.
now run client-
node client.js

Change the file. New values will reflect.

---

Custom Parser-
Send 20 chars first, then next 20 chars.
Here, we emit events using events.EventEmitter.

util.inherits(MessageParser, EventEmitter);
MessageParser - destination
EventEmitter - where to inherit from

Server-
node server.js

Client-
node client.js

Now change file. After 3 secs we'll see it in the client.

---

Books-
Nodebook
Nodejs in Action