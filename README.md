# Monsters REST API

![Fooz](./static/yellow-150x150.jpg)
![Bazz](./static/blue-150x150.jpg)
![Koo](./static/violet-150x150.jpg)

Welcome to Monsters API - a short list of silly pranksters that loves to mess with code and programmers. Let's meet all of them face to face! 💪

## API

By default API works on `localhost:8080/api/v1`. There's no [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) restrictions 👌. Just make sure your `node.js` version is `>=8.9.4`.

```bash
$ curl http://localhost:8080/api/v1
{
  "data":{
    "message": "Hello, Monsters API! 👋"
  }
}

$ curl -I http://localhost:8080/api/v1
# ...
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
# ...
```

## End points

* `GET /monsters`

Returns array of monsters with their names and slugs. Slug is used for requesting monster details.

```bash
{
  "data":[
    {
      "name": "Fooz",
      "slug": "fooz",
      "images": {
        # ...
      }
    },
    {
      "name": "Bazz",
      "slug": "bazz",
      "images": {
        # ...
      }
    },
    # ...
  ]
}
```

* `GET /monster/:slug`

  If slug is correct and monster exists, will response with generated monster details. Each server instance will create new statistics so don't be surprised with the diffs 😉.


```bash
{
  "data": {
    "name": "Fooz",
    "statistics": {
      # ...
    },
    "description": "Lorem ipsum...",
    "images": {
      # ...
    }
  }
}
```

## Licence

Monsters images used by the API were dowloaded from `http://www.freepik.com`. Full terms of usage can be found in [licence document](./static/License_free.txt).