## Task 1
* When the user changes the select box to `Translate to Klingonian` the input box with the id `to` should have the placeholder `to Klingonian`
* When the user changes the select box to `Translate to Uruk-hai` the input box with the id `to` should have the placeholder `to Uruk-hai`
## Task 2
* When the user selects `Translate to Klingonian`, types into the input with the id `from` the word `hello` and presses enter the input box with the id `to` should have the value `asvaim` (similar for other words present into the variable `dictionary` from `index.js` file)
* When the user selects `Translate to Uruk-hai`, types into the input with the id `from` the word `hello` and presses enter the input box with the id `to` should have the value `saruhachhh` (similar for other words present into the variable `dictionary` from `index.js` file)
* When the user selects `Translate to English`, types into the input with the id `from` the word `hello` and presses enter the input box with the id `to` should have the value `hello` (similar for other words present into the variable `dictionary` from `index.js` file)
* Whatever the value of select input, when the user types into the input with the id `from` the word `monkey` (or any other word no present in the `dictionary` variable) and presses enter the input box with the id `to` should have the value `!!! ERROR !!!`

## Task 3
* The word that is typed into the input box with the id `to` is case insenstive and any spaces are ignored when translating. Ex `  HelLo    ` which has 2 spaces before `H` and 4 spaces after `o` is still matched to the word `asvaim`