## About

Precisly extract number with N fractionals of float number, Without flooring or ceiling the number.

## Installation 
Using npm 
```bash
    npm install precise_to_n_fractionals
```
Using yarn
```bash
    yarn add precise_to_n_fractionals
```

## Usage
>In the _Node_ side
```javascript
const preciseToNFractionals = require(precise_to_n_fractionals)

console.log(preciseToNFractionals(99.9999,3)) //99.999
console.log(preciseToNFractionals(-99.9999,1)) // -99.9
console.log(preciseToNFractionals(99.575,2)) // 99.57
console.log(preciseToNFractionals(99.575,-2)) // will throw an error
```
>In the Browser
```javascript
import preciseToNFractionals from 'precise_to_n_fractionals'

console.log(preciseToNFractionals(99.576,3)) //99.576
console.log(preciseToNFractionals(99.576,4)) // 99.576
console.log(preciseToNFractionals(-99.89,2)) // 99.89
console.log(preciseToNFractionals(-99.8,2)) // 99.8
console.log(preciseToNFractionals(-99.8,2)) // will throw an error
```




