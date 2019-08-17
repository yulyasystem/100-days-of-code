- indentation defines nesting, only tabs or only spaces
- to compile cd dir -> `pug index.pug`, compiled into minificated .html, `pug index.pug -P` -> not minified .html
- to define div with class and id : `#container.flex`, `h1.title`
- variables `- var pageTitle = 'awesome'`
- template inheritance
- to display element `block content`
- to add class dynamically use `p(class=nameOfVariable)` instead of `.nameOfClass`
- `include` is a part of code separate it and insert it into main page
- mixin - templates with variables

### template ineheritance 

It works via `block` and `extends` keywords. `block` is simply a block :))) that child template may replace, it may provide default content 

**only name blocks and mixins definitions** can appear at the top level of child template, parent templates defines overall structure and child can only `append`, `prepend` or replace spesific blocks of markups or logic

You can use `include` for different files, not only for pug files. Also, you can use include multiple times on the page. This command just includes content of the different file, straight into the place. You may think of it, as if you make a big Lego project by using (including) different small pieces.

`Extends` on the contrary takes big Lego project and substitutes marked blocks with your pieces with special block command. It could be used once and overwrite content of the destination file (file with the extends command).
