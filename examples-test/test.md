create an empty array numberBank to store the numbers entered by the user. When the user submits the form, the addNumber function is called. This function gets the value of the input field, converts it to an integer, and adds it to numberBank. If the input is not a valid number, an alert is displayed.

The updateNumberBank function updates the contents of the output element with the current contents of numberBank.

The sortOne function removes the last element from numberBank and adds it to either the odds or evens array depending on whether it is odd or even. The updateOdds and updateEvens functions update the contents of their respective output elements with the current contents of odds and evens.

The sortAll function sorts all of the numbers in numberBank into either the odds or evens array depending on whether they are odd or even. It then clears out numberBank, updates all three outputs, and displays them.

event.preventDefault() is a method that is used to prevent the default action of an event from occurring. When an event is triggered, the browser performs a default action associated with that event. For example, when a user clicks on a link, the browser navigates to the URL specified in the link’s href attribute. Similarly, when a user submits a form, the browser sends the form data to the server and loads the response.

By calling event.preventDefault(), you can prevent the default action from occurring. This is useful when you want to perform some custom action instead of the default action. For example, you might want to validate form data before submitting it to the server.

In the code I provided earlier, event.preventDefault() is called in the addNumber function to prevent the form from being submitted when the user clicks on the “Add Number” button. Instead, the function adds the number entered by the user to an array and updates the display.
