# Cache
## Strong Cache VS Negotiation Cache
|                   | status code        | send request to server                                           |
| ----------------- | ------------------ | ---------------------------------------------------------------- |
| Strong Cache      | 200(from Cache)    | No, fetch directly from the cache                                |
| Negotiation Cache | 304 (not modified) | Yes, through the server to inform whether the Cache is available |
**Strong Cache**:  The browser directly obtains data from the local cache without interacting with the server
**Negotiation Cache**: The browser sends a request to the server, and the server determines whether the local cache can be used

### From cache in Strong Cache
There are two type `from disk cache` and `from memory cache`. `from memory cache` is faster

## Request Process

## Headers in Strong Cache
### expires
if time is before the expires time, then the local cache is available
``` http
Expires: Wed, 21 Oct 2015 07:28:00 GMT
```

### cache-control: max-age=number
compare the first request time with the max-age to current time, reuse the source if the source is "fresh"
other cache-control directives:
* no-store: the response can not be stored in cache
* no-cache: it can be stored but don't reuse before validating, hence it need a Negotiation

## Headers in Negotiation Cache
### Last-Modified/ If-Modified-Since
Last-Modified is in the response header and If-Modified-Since is in the request header.It is used as a validator to determine if the resource is the same as the previously stored one.
```
Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT
```

### Etag/ If-None-Match
Etag is in the response header and If-None-Match is in the request header
The ETag (or entity tag) HTTP response header is an identifier for a specific version of a resource.
```
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```
Etag is more specific than Last-Modified