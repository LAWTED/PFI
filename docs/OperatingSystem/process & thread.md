# Process & Thread

## Process
> the smallest unit of resource allocation

an application that is running on the system; once a program is running it is a process;

`Process = thread + memory + file`

### memory
virtual memory, and each process has dependent memory.Otherwise, there will be a problem: we can change the value of the pointer to point to the memory of other process, so that we can the the imformation in other process.

### file/network handle
Such as opening the same file and grabbing the same network port are allowed

## Thread
> the smallest unit of program execution

a unit of execution flow within a process that executes independently within a process

`thread = stack + PC (Program Counter) + TLS`

### stack
Everytime we continuously make funciton calls, and each time we call, we will push all paramaters and return addresses onto the stack

### Program counter
The program counter is where the address of the unit where the next instruction is located, so PC pointer is pointing to memory

### TLS (thread local storage)
TLS is the unique data in each thread, and it's a thread-specific data

### Communicate in processes
pipe, MQ, socket

### Communicate in threads
A large shared memory, something about lock ...