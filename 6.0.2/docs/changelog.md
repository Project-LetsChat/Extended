LetsChat Extended 6.0.2 (Backport patch)

Extended Patches:
- Updated LetsChat TESTING to the latest LetsChat Rolling.
- Bundled LetsChat core.
- Updated Login_page component to comply with the Kwitter specification by renaming login.css to game.css and relinked to kwitter.js rather than LetsChat.js.
- Moved to the Kwitter compliant directory and file structure.
- Updated Documentation.
- Patched High Severity XSS vulnerability in LetsChat Core, link: https://github.com/Project-LetsChat/Extended/security/code-scanning/3/
- Patched a medium severity DOM text reinterpreted as HTML vulnerability in LetsChat Core, link: https://github.com/Project-LetsChat/Extended/security/code-scanning/4/
- Updated documentation and added some new documentation that applies to this version.

Backports:

- Everything from 6.0.3, link: https://github.com/Project-LetsChat/LetsChat/releases/tag/6.0.3/
- p5.js updated to version 10.0.0.
- Login page component.
- NeoLogins Series 2

6.0.2 Changelog:

- Added a new Components sub-directory underneath the src directory.
- Added a navbar template in the Components sub-directory.
- Updated documentation.
- Version number bumped to 6.0.2.
- Hence version 6.0.1 is no longer supported.
- Fixed minor 'meta-charset' bug in HTML pages.
