# Instructions
## Exercise 1. Default Exports and Imports with Generics
In this section, you'll practice exporting and importing a default value from a module with generics.

1. Create a new file named data.ts in the root of your project.
2. In data.ts, define a generic class named DataStore that has a private property named data of type T[].
3. Add a constructor to DataStore that initializes the data property to an empty array.
4. Add a public method named add to DataStore that takes an item of type T as a parameter and adds it to the data array.
5. Export DataStore as the default export of the module.
6. In index.ts, import the DataStore class from data.ts using a default import.
7. Create a new instance of DataStore with a generic type of string.
8. Call the add method on the instance with a string parameter.
9. Create a new instance of DataStore with a generic type of number.
10. Call the add method on the instance with a number parameter.

## Exercise 2 - Named Exports and Imports with Generics
In this section, you'll practice exporting and importing named values from a module with generics.

1. Modify data.ts to export a named interface IDataStore that defines the shape of the DataStore class.
2. Modify DataStore to implement the IDataStore interface.
3. Export another named interface IDataItem that defines the shape of the items that can be added to the DataStore.
4. In index.ts, import the IDataStore and IDataItem interfaces using named imports.
5. Create a new instance of DataStore with a generic type of IDataItem.
6. Call the add method on the instance with an object that conforms to the IDataItem interface.

## Exercise 3 - Renaming Exports and Imports with Generics
In this section, you'll practice renaming exports and imports with generics using the as keyword.

1. Modify data.ts to export the DataStore class as a named export with the name Store.
2. In index.ts, import the Store class using a renamed import that changes its name to DataStore.
3. Create a new instance of DataStore with a generic type of number.
4. Call the add method on the instance with a number parameter.

## Exercise 4 - Re-Exporting with Generics

In this section, you'll practice re-exporting values from one module to another with generics.

1. Create a new file named data2.ts in the root of your project.
2. In data2.ts, import the DataStore class from data.ts and re-export it as the default export of the module with the generic type parameter T.
3. In index.ts, import the DataStore class from data2.ts with a generic type of string.
4. Call the add method on the instance with a string parameter.
5. Create a new instance of DataStore with a generic type of number.
6. Call the add method on the instance with a number parameter.

## Exercise 5 - Generics with Constraints

In this section, you'll practice using generics with constraints to enforce a specific shape for the generic type.

1. Modify data.ts to export a new interface ICountable that has a count property of type number.
2. Add a constraint to the DataStore class that restricts the generic type parameter to types that implement the ICountable interface.
3. Add a public method named getCount to the DataStore class that returns the total count of items in the data array.
4. In index.ts, create a new object that implements the ICountable interface and pass it as a parameter to the add method of the DataStore instance.
5. Call the getCount method on the DataStore instance and log the result to the console.
