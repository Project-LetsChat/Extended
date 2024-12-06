This is the ruleset for the Kwitter specification. It outlines what goes where and what does what.

<code>src</code> files and directories structure:
- <code>index.html</code>: This file holds the startup page of a site.
- <code>kwitter.js</code>: This file holds the <code><a href="https://github.com/Project-LetsChat/LetsChat/wiki/addUser()/">addUser()</a></code> function and is primarily designed to be linked with the <code>index.html</code>
- <code>kwitter_room.html</code>: This file holds the homepage for LetsChat which lists the list of rooms and can add/create a new room.
- <code>kwitter_room.js</code>: This file includes the required JS for the functionality of <code>kwitter_room.html</code> and is linked with <code>kwitter_room.html</code>.
- <code>kwitter_page.html</code>: This file holds the page of a LetsChat chatroom, it has the interface used to send messages and like them.
- <code>kwitter_page.js</code>: This file includes the required JS for the functionality of <code>kwitter_page.html</code> and is linked with <code>kwitter_page.html</code>.
- <code>style.css</code>: This is the universal theming file for LetsChat.
- <code>Kwitter.css</code>: This is the legacy theming file for the Kwitter ruleset.
- <code>game.css</code>: This is the theming file for the login page in LetsChat.
- <code>main.js</code>: This is the universal JS file for LetsChat (And subsequently the Kwitter ruleset.).