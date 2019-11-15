import sum,{minus, pow} from './math';
import h1 from './createDom';
import pic from './img';
let body = document.querySelector('body');
console.log(sum(5,6,61,25));
console.log(minus(45,2,3,10));
console.log(pow(2,3));

body.append(h1);
body.append(pic);
