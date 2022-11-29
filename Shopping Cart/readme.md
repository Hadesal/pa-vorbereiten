Context
You have a basic checkout cart for a supermarket store.

Task 1
Clicking the button in the product card will add the price in the button's text to the Total value in the upper left corner. For example, clicking Add to Cart: 100 will change the total from 0 to 100.

Task 2
After clicking a button, if the new total is above the value in the input field Max budget: then add the class over-budget to the span with the id total. For example, clicking Add to Cart: 176 should add the class over-budget if the maximum budget is still the default 150. (That makes the text color of the total number red.)

Task 3
Changing the value in the input field Max budget: will add the class over-budget to the span with the id total if the new value is lower than the total. If the new value exceeds the total, remove the class over-budget. These actions should happen as you type (no need to unfocus the input). Example clicking Add to Cart: 100 and setting the maximum budget to 80 will add the class over-budget to the span with the id total, and setting it back to 150 will remove it.