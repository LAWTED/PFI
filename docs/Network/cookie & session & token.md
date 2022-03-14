# Cookie & Session & Token

## why need this
Since the HTTP protocol is a stateless protocol, when the server needs to record the user's status, it need to use some mechanism to identify the user

## Cookie
Cookie is client-side(saved on the browser)
### Set-Cookie
```http
Set-Cookie: <cookie-name>=<cookie-value>
```

The server sending headers to tell the client to store a pair of cookies
```http
HTTP/2.0 200 OK
Content-Type: text/html
Set-Cookie: user_ID=choco
Set-Cookie: tasty_cookie=strawberry

[page content]
```

After that, the browser sends all previously stored cookies back to the server using `Cookie` header, when requst to the server
```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: userID=choco; tasty_cookie=strawberry
```

## Session
Session is in the server-side
when user login and the server will generate a session id and max-age and send it back to the browser with `Set-Cookie`, then next time the browser will request with the session, hence Session is dependent on Cookie

### why we use Session
session is a crypted message between browser and server, when the message is being hacked, the message is useless because it is crypted.

### Disadvantage of Session
1. Performance overhead in case of large number of user, because of session data stored in server memory, also not applicable in distributed systems
2. Will not work if user disables cookies
3. Cookie cannot cross-domain, so session authentication cannot cross-domain, not applicable to single sign-on(SSO)
:::tip
SSO: an authentication method that enables users to securely authenticate with multiple applications and websites by using just one set of credentials.
:::


## Json Web Token
advantage:
1. Small amount of data, and transfer fast
2. Does not depend on cookies and sessions, so there is no drawback of cookies, suit for distributed miscroservices and SSO

the server only store a sercet and the browser can use any storage methods to store JWT
### JWT structure
[JWT](jwt.io)

`header`.`payload`.`signature`

