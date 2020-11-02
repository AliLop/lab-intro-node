class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
      this.items.push(item);
      this.length++;
      return this.items.sort((a, b) => {  
        if (a < b) ; 
        return a - b;
      });
    }
     
  get(pos) {
    if(pos > this.length || pos < 0) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    } 
  }

  max() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items); 
    }
  }
  
  min() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items); 
    }
  }

  sum() {
    if (this.length <= 0) {
      return 0;
    } else {
      let sum = this.items.reduce((a,b) => {
        return a+b;
      },0)
      return sum;
    }
  }

  avg() {
     if(this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
        let avg = this.sum() / this.length;
        return avg;
    }
  }
}
module.exports = SortedList;
