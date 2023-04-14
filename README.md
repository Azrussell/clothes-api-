## Clothes-API 

This is an API to show various choices for garment selection.

here are the request methods:

`/clothes`. GET
Returns list of all available clothing items

`/clothes/:id`  GET 
Returns a single clothing item by its id 
example response from `/clothes/2`:

```
{
        "id": 2,
        "type": "jeans",
        "color": "black"
      }
```


`/shoes`.  GET
Returns list of all available shoes.

`/shoes/:id  GET
Returns list of a single shoe by its id 
Example here `/shoes/2
```
{
        "id": 2,
        "type": "boots",
        "color": "brown"
      }
```

      `/clothes` - POST
- Accepts a `clothes` object
- example object:

```
{
        "id": 3,
        "type": "sweater",
        "c
```