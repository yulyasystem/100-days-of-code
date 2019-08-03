## css variables

makes code more readable and flexible for changes, supported by browser, they have access to DOM
```
:root { // avaiable everywhere in the document
  --main-color: #ff6f69;
}
```

to access variable -> *var(nameOfVariable)*  

local variables are supported. name of class :
```
.navbar {
  --link-color: #ff6f69;
}
```
**change vars in depening upon screen size** :
```
:root {
  --main-font-size: 16px;
}

media all and (max-width: 600px) {
  :root {
    --main-font-size: 12px;
  }
}
```



