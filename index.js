// Write your solution in this file!
var customerName = 'bob';

const leastFavoriteCustomer = 'also bob';


function upperCaseCustomerName(){
    this.customerName = this.customerName.toUpperCase();
}

function setBestCustomer(){
    this.bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    this.bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'carl';
}
