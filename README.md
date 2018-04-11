# StockMarketApplication
Stock market application for SE3314
Frontend created as a windows forms application using C# in .NET
Backend created as a node.js application using a custom network protocol and socket connections

**NOTE:** the frontend was not implemented for this assignment, only the backend.


## SME Protocol - Stock Market Exchange Network Protocol
This is the protocol defined by the assignment. It is a custom network protocol that is text-based and runs over two concurrent TCP connections.


## How to Use Start the Server
Navigate to `/backend` and use the command `node main.js` to start the server.
To test the functionality of the server: with the above command running, open a new terminal and navigate to `/testing` and use the command `node client.js`.
After issuing this command, watch what the server terminal outputs to stdout to verify the functionality.
