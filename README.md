# json-to-pivot-json
Convert JSON Array to Pivot JSON Array

There are many libraries which accepts JSON array and few config such as Pivot Row, Pivot Column and Value field which needs to be aggregated. But output of all these modules is JSON object with helper functions. 

I couldn't find a library which gives output as JSON array only. This library serves that purpose. It internally uses [Crossfilter](https://github.com/crossfilter/crossfilter) and hence it's fast for larger datasets as well. 

## What it does ?

##### Input
![alt text](https://raw.githubusercontent.com/itsmejainh/dataviz/master/input.PNG)

##### Output 
![alt text](https://raw.githubusercontent.com/itsmejainh/dataviz/master/output.PNG)

## Setup

```sh
npm install --save json-to-pivot-json
```

## Usage

```
var jsonToPivotjson = require("json-to-pivot-json");

var input = [
    {student: "Andrew", subject: "Maths", marks: 85},
    {student: "Andrew", subject: "Science", marks: 82},
    {student: "Andrew", subject: "Computers", marks: 90},
    {student: "John", subject: "Maths", marks: 90},
    {student: "John", subject: "Science", marks: 85},
    {student: "John", subject: "Electronics", marks: 75}
]; 

var options = {
    row: "student", 
    column: "subject", 
    value: "marks"
};

var output = jsonToPivotjson(input, options); 

console.log(output);

//output 
[
    { student: 'Andrew', Computers: 90, Electronics: 0, Maths: 85, Science: 82 },
    { student: 'John', Computers: 0, Electronics: 75, Maths: 90, Science: 85 } 
]

```


## Limitations

Only supports single column, row and value for pivoting for now. 

## Future Support 

Support of multiple rows and columns, but not sure how would output look like? 
Suggestions are welcome :)

## Buy me a drink

paypal.me/hjain89 

## License

Apache License 2.0
