# http vs https

## Diff

`HTTP` is `Hypertext Transfer Protocol` and the information that flows from server to brower is not encrypted, which means it is unsafe and easily stolen.
`HTTPS` is remedy the unsafe `HTTP` by using `SSL` (secure sockets layer), which helps create a secure encryped connection between the server and the brower

## What SSL DO
The `SSL` certificate encrypts the information that users supply to the site, which basically translates the data into a code. Even if someone stole the data being communicated between the sender and the reciever, they would not be able to stand it due to the encryption

## Disadvantage of HTTP
* Eavesdropping Risk, Communication content is available on the communication link
* Tampering Risk, Ads are added in the content
* Pretending Risk, the website may be fake

## How HTTP impoves
* Crypted the content, which make it can't be eavesdropped
* Validation mechanism, ensure the content is not been modified
* CA, ensure the website is the correct

### How SSL/TLS Do
`SSL/TLS` use `public-key cryptography`, which means that the client first requests the public key from the server, then encrypts the message with the public key, and the server decrypts it with its own private key after receiving the cipher text