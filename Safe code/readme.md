You have a safe that can be opened by typing the numbers 1234.
As you press the buttons 0 to 9 the typed number is appended to the innerText of the div with the id result.


Task 1

Extend the program to update the innerText of the div with the id result ONLY WHEN the button's number is contained in the safe open combination contained in the js variable safeCombination.
Ex: when safeCombination=1234 you could only press the buttons 1, 2, 3, 4 to update the inner text of the div with the id result. Pressing the buttons 5, 6, 7, 8, 9, 0 would have not update the innerText of the div.


Task 2

Extend the program to delete the last letter of the innerText of the div with the id result when the button labeled C is pressed.
Ex: if the innerText of the div with the id result has the content 1235, pressing C will update the innerText to 123.


Task 3

Extend the program to change the standard safe combination of 1234 to the value typed in the input box. Each time you update the safe combination clear the innerText of the div with the result.


Task 4

Extend the program to modify the innerText of the div with the id result to Safe OPEN when the last pressed button adds to the innerText the number that would produce a complete match with the safe combination.
Ex: if the innerText of the div with the id result is 123 pressing the button 4 would update the innerText of the div to Save OPEN.

