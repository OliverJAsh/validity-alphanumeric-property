# validity-alphanumeric-property

[![Build Status](https://travis-ci.org/OliverJAsh/validity-alphanumeric-property.png?branch=master)](https://travis-ci.org/OliverJAsh/validity-alphanumeric-property)

Validity style validator to ensure a property is alphanumeric.

## Installation

    npm install validity-alphanumeric-property

## Usage

Below is a simple example for usage with schemata and save:

```js
var validity = require('validity');
var schemata = require('schemata');
var alphanumericPropertyValidator = require('validity-alphanumeric-property');

var schema = schemata({
  emailAddress: {
    type: String,
    validators: { all: [alphanumericPropertyValidator] }
  }
});
```

## API

### alphanumericPropertyValidator(String:key, String:keyDisplayName, Object:object, Function:cb)

This is a validity compatible function, which in turn is used by schemata for schema validation.

The callback signature cb(err, errorMessage).

err is an Error object if something bad happened and null otherwise.
errorMessage is a String if a validation error happened and undefined otherwise.

## Licence
Licensed under the [New BSD License](http://opensource.org/licenses/bsd-license.php)
