# Trouble Shooting

> Node Docker: unable to stop Node container

    Node.js was not designed to run as PID 1 which leads to unexpected behaviour when running inside of Docker. For example, a Node.js process running as PID 1 will not respond to SIGINT (CTRL-C) and similar signals. As of Docker 1.13, you can use the --init flag to wrap your Node.js process with a lightweight init system that properly handles running as PID 1.

`docker run -it --init <image>`
    
[Reference Link](https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md)