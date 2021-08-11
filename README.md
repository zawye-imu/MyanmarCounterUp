# MyanmarCounterUp
Add counter up functionality to your numbers in Myanmar font.  
![Giphy](https://media.giphy.com/media/OrHFkNSzgLYPpsIvnE/giphy.gif)


## With NPM

```cmd 
    npm i myanmarcounterup
```


## Setup 
Make sure myanmarCounterUp.js is included in the HTML file. 

```html
    <script src='myanmarCounterUp.js'></script>
```

For adding the counter-up functionality, add the class `mm-counter` to an element. 

```html 
   <p class="mm-counter"></p>
```


To finish up, initialize counter up class by adding the following code.

The first parameter is the start of the number. \
The second is the end of number. \
And the last one is the miliseconds the animation will take.  


```javascript
   var counter = new myanmarCounterUp(0,1000,5000);
```  

## Further Development Options
