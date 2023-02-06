Simple Array to Object for this arrays:

let ar1 = [ "Key1", "Value2", "Key2", "Value2", ... ];
let ar2 = [
            [ "Key1", "Value1" ],
            [ "Key2", "Value2" ],
            ...
          ];

Convert to Object with

let obj1 = ar1.toObject();
let obj2 = ar2.toObject();

Standalone Keys become `null` as Value.

