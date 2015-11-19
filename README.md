#NodeJS training

Basic concepts of Node and understanding how it works

####Scheduler commits(Client JS)-

> 3 jobs to be done (Work starter, Empty for loop, Work Completed)

> Making chunks of the for-loop (multiple split iterations)

> Create callback function for onWorkCompletion and onWorkProgress

####Node-Intro commits-

> A simple Hello World module

####Calculator commits-

> A basic Calculator

> Node Module

####Accumulator commits-

> A basic accumulator

####Accumulator Factory commits-

> Accumulator Factory - function wrapper

> Accumulator Client - Now, the states of 2 variables are maintained

####Async commits-

> Error Handling. *No Try-catch for Async!!*

####Print File commits-

> Print to console

> Print to console - Sync

> Using streams

####Web Server commits-

> Basic server

> Calculator using GET

> Calculator using POST


####Task Manager App-

> Task List

> Task Add

> Task Toggle

####Async-

> To learn about sync and async ways of coding

####App Server-

> Modularized components from Day-1's Web server.

####Chat App info-

> To create a multi client chat application. The ultimate feature would be a message broadcasting app, something like a group chat.

> To Run-
> *http-server -p 7890*
> *node app.js*


####Net App info-

> Run app-

> *node server.js test.txt*

> Another console-

> *telnet localhost:8080*
> 
> Change the file. New values will reflect. Telnet is the client here. You can replace telnet with your own client.

> now run client-

> *node client.js*
> 
> Change the file. New values will reflect.

####Net App Custom Parser info-

> We send 19 chars first, then next 20 chars.

> Here, we emit events using *events.EventEmitter.*
> 
> *util.inherits(MessageParser, EventEmitter);*

> *MessageParser - destination*

> *EventEmitter - where to inherit from*
> 
> Server-

> *node server.js*
> 
> Client-

> *node client.js*
> 
> Now change file. After 3 secs we'll see it in the client.

####Cluster info-

> Use clusters for scalability

> nodejs.org/api/cluster.html

> Fork the master cluster.isMaster using cluster.fork([env]). Forked one's isMaster api will return false. Number of forks = Number of CPU's(value got by - os.cpus()).

> run the server-

> *node app*

> open task manager and see in processes. you will have multiple processes.

> **Use PM2 - Load balancer + Helps in Scalings**

####Socket.IO example-

> [Socket.IO chat example](https://github.com/tkmagesh/Cisco-Node-Oct-2015/tree/master/Day-02/18-Socket-IO)

####Books-

> Nodebook

> Nodejs in Action

####Videos-

> javascript - http://bit.ly/javascript-training-videos

> nodejs - http://bit.ly/node-training-videos