# Supervised Linear Regression

- [Ordinary Least Squares regression (metodo dei minimi quadrati)](#ols)
- [Example](#example)
- [How to use LinearRegression.js](#linearregression.js)

Simple Linear Regression is finding the best relationship between the input variable x (independent variable) and the expected variable y (dependent variable). 
The linear relationship between these two variables can be represented by a straight line called regression line.

![graph](docs/graph.png?raw=true)

The variable y is linearly dependent on the variable x. So, we can find a straight line which can best define the data.

This model could be applied to these following situations:
* Body mass vs muscle strength
* Money spent on advertising vs total sales
* Years of experience vs salary
* Physical exercise (in mins) vs cholesterol level

ecc...

## OLS

To calculate the regression line you can use the Ordinary Least Squares regression (metodo dei minimi quadrati):

![OLS](docs/2.jpg?raw=true)

## Example

![Example](docs/1.PNG?raw=true)

_Y(predict value)=a(0.135)+b(0.627)*X(UserInput)_

## LinearRegression.js

#### How to use

```
// inital datasets for training 
var x = [1, 2, 3]; // inputs
var y = [123, 4234, 435345]; // expected values
var test = new LinearRegression(x, y);
test.predict(6);
```


## Authors

* **Anas Araid** - [asdf1899](https://github.com/asdf1899)