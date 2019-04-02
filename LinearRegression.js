class LinearRegression{
  constructor (x, y){
    if (! Array.isArray(x) || !Array.isArray(y)){
        return false;
    }
    this.x_dataset = x;
    this.y_dataset = y;
  }
  getSommaProdotto(){
    var somma=0;
    for (var i=0; i < this.x_dataset.length;i++){
      somma += this.x_dataset[i] * this.y_dataset[i];
    }
    return somma;
  }
  getSommaQuadratiX(){
    var somma=0;
    for (var i=0; i < this.x_dataset.length;i++){
      somma += this.x_dataset[i] * this.x_dataset[i];
    }
    return somma;
  }
  getXMedia(){
    var m=0;
    for (var i=0; i<this.x_dataset.length;i++){
      m += this.x_dataset[i];
    }
    return m / this.x_dataset.length;
  }
  getYMedia(){
    var m=0;
    for (var i=0; i<this.y_dataset.length;i++){
      m += this.y_dataset[i];
    }
    return m / this.y_dataset.length;
  }
  getCovarianza(){
    return (this.getSommaProdotto() / this.x_dataset.length) - (this.getXMedia() * this.getYMedia());
  }
  getVarianza(){
    return (this.getSommaQuadratiX() / this.x_dataset.length) - (this.getXMedia() * this.getXMedia());
  }
  predict(x_predict){
    var B = this.getCovarianza() / this.getVarianza();
    var A = this.getYMedia() - (B * this.getXMedia());
    return (A + (B * x_predict));
  }
}