The login page is usually located in the index.html file, the default one can be swapped out with some of the ones in the NeoLogins folder or you can build a custom one yourself.

### How to swap out login pages (NeoLogins)

1. Choose one of the TXT files from the NeoLogins folder and rename it to index.html (which should convert the file from TXT to HTML).

2. Replace the default index.html file with the new one you renamed.

3. You're all set!

### How to build a custom login page:

1. Create a file and name it index.html.

2. The file must link to LetsChat.js, the easiest way to do so is by adding this code snippet to the body or the head tags:

```HTML
<script src="LetsChat.js"></script>
```

3. In the body section, there needs to be a textbox to enter the username and that textbox must have the id user_name:
```HTML
<input type="text" id="user_name" placeholder="Enter your username">
```

4. Now, create a button. The button should have onclick="addUser()" in the HTML tag so that it can trigger the addUser() function:
```HTML
<button onclick="addUser()">Login</button>
```

5. Replace the default index.html with your custom created index.html.

6. You're all set!

#### Customise the custom login page (Optional):

1. Link your custom index.html to the universal style.css file:
```HTML
<link rel="stylesheet" href="style.css">
```
This will make the page aligned with all the rest of the pages.

2. Create and attach a custom .css file to your custom login page, if you have linked the universal style.css file to your custom login page then make sure that your custom .css file is compatible with the universal style.css file or else it might break the styling.
