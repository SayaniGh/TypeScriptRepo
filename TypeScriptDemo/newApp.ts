/*********** Data Type*************/

//let name ='Sayani';  // Why it is giving error ????
let fname='Sayani';
console.log('Hi ',fname);

let newCity : string;
newCity='Bangalore';
//newCity=10; //compilation error
console.log('Hi ',fname,' Welcome to ',newCity);



let year : number;
year=2018;
//year='2018'; //compilation error
console.log('Hi ',fname,' Welcome to ',newCity,' in ',year);

let nyType : any;
nyType = 'String';
nyType = 2;
nyType  = true;

let anyTypeArr : any[] = ['Sayani','Bangalore',2018] ;
console.log('Welcome to ',anyTypeArr[1],anyTypeArr[0]);


/************* Enum *******************/
//Enum vowel {'a','e','i','o','u'};
