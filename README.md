# Revisiting Objects

> > [<img src="https://i.ytimg.com/vi/bl98dm7vJt0/maxresdefault.jpg" width="300" height="200" />](https:https://i.ytimg.com/vi/bl98dm7vJt0/maxresdefault.jpg)

## Required Tasks

- Write an object with field name.

```javascript
  const obj = {
    name: [], // ['name', length][]
    set name,
    get name,
  }

  console.log(obj.name)

  obj.name = 'Hovhannes, Sona';

  console.log(obj.name) // [['Hovhannes', 9], ['Sona', 4]]
```

[SEE Solution](./SetGet.js)

- The input is object, which `keys` are student's names and `values` are `array` of their scores. Find the student with the best average score.

```javascript
getBestStudent({
  John: [100, 90, 80],
  Bob: [100, 70, 80],
});
// OUTPUT => "John"

// John's avg = 90
// Bob's avg = 83.33
```

[SEE Solution](./getBestStud.js)
