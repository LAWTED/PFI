# HTTP vs HTTPS

## Diff

`HTTP` is `Hypertext Transfer Protocol` and the information that flows from server to browser is not encrypted, which means it is unsafe and easily stolen.
`HTTPS` is remedy the unsafe `HTTP` by using `SSL` (secure sockets layer), which helps create a secure encryped connection between the server and the browser

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

## How SSL/TLS Do
* `SSL/TLS` use `public-key cryptography`, which means that the client first requests the public key from the server, then encrypts the message with the public key, and the server decrypts it with its own private key after receiving the content
* `SSL/TLS` use `SHA-2` (A Digest Algorithm) to ensure the intergrity of the data, and brow will generate the finger print, and send the Ciphertext(Encrypt Plaintext and finger print), the server compare the decrypted finger print and the Plainttext to ensure the intergrity
* `SSL/TLS` use `CA` (Certificate Authority), browser ask public key from server, and encrypt with public key, after receive the Ciphertext server decrypt with private key. How to ensure the public key is not been modified, we need CA, server publish the public key in CA, CA validate indentity and generate signed certificate and send it to server, browser use the public key stored in the local browser to ensure the certificate is correct and get the public key that server generate.

![](/images/TLS.png)

