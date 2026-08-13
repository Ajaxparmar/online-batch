// let a=20;
// let b=10;
// // let c= 46;   


// if (b>a) {
//     console.log("A is greater than B");
     
// }else{
//     console.log("B is greater than A");
// }
// let a=9;
// let b=80;
// let c= 234;

// if (a>b) {
//     if (a>c) {
//         console.log("A is greater than B,C");
        
//     }
//     else{
//         console.log("C is greater than A,B");
        
//     }
// }
// else{
//     if (b>c) {
//         console.log("B is greater than A,C");
        
//     }
//     else{
//         console.log("C is greater than A,B");
        
//     }
// }

// find if number is positive , negative or zero
// let num = 0;

// if (num>0) {
//     console.log("Number is positive");    
// }
// else if(num<0)
// {
//     console.log("Number is negative");
    
// }else{
//     console.log("number is Zero");
    
// }

// Number is even or odd
// let a =23;

// if (a%2 == 0) {
//     console.log("Number is even");
    
// }
// else{
//     console.log('number is odd');
    
// }
// Voiting Eligiblity
//let age= 18
//if (age >= 18) {
//  console.log('You can vote!');
    
//}
//else{
//  console.log('Sorry you cannot vote');
    
//}

//Find the greatest of Two Numbers
//let a=56;
//let b=78;

//if (a>b) {
  //  console.log('A is greater than B');
    
//}
//else{
  //  console.log('B is greater than A');
    
//}

// Grade Calculator
//let marks=-100;

//if (marks>100 || marks<0) {
//    console.log('Invalid!');
    
//}
//else if (marks>=90) {
//   console.log(' Grade A');
    
//} else if(marks>=80){
//    console.log('Grade B');
    
//} else if (marks >=70) {
//   console.log('Grade C');
    
//} else if (marks >=60) {
//    console.log('Grade D');
    
//} else if (marks<60) {
//   console.log('Grade F');
    
//} 

//Login System

//let username = "khushi";
//let password = "1234";

//if (username == "khushi") {
//    if (password == "1234") {
//        console.log('login succesfull');
//        } 
//    else
//    {
//        console.log('password is wrong!');
        
//    }
//    }
//   else
//{    console.log('user not found!');
    
//}

//Electricity bill calculater
//let units=300;


//if (units<=100) {
//    console.log(units*5);
    
    
//}else if (units<=200) {
//    console.log(units*7);
    
    
//}else if(units<=300)
//    {
//console.log(units*10);


//}else{
//   console.log( units*15);
   
    
//}

//ATM Withdrawal 
//let pin = 68;
//let withdrawlamount  =90;
//let balance =400;

//if (pin == 678) {

//    if (withdrawlamount>0) {
//        if (balance>=300) {
//            console.log('payment is done!');
            
//        } else{
//            console.log("Insufficent balance");
//        } 
//    }else{
//        console.log("invalid amount");
//    }
//}else{
//    console.log('PIN is wrong');
    
//}

//Student Admission System
//let age =90;
//let percnetage =80;
//let enteranceexamscore =56;

//if (age>=17) {
//    if (percnetage>=75) {
//        if (enteranceexamscore >=70) {
//            console.log("Admission approved");
//        }else{
//            console.log("Entrance score too low");
            
//        }
//    }else{
//        console.log("Percentage too low");
        
//    }
//}else{
//    console.log("Invalid age!");
    
//}

//ATM + Account Security System

let accountstatus= "active";
let pin =90;
let amount =99;
let balance=2000;

if (accountstatus == "active") {
    if (pin== 90) {
        if (amount>90) {
            if (amount<=balance) {
                console.log("Withdraw money");
                if (balance<500) {
                    console.log("Warning!");
                    
                }else{
                    console.log("Successful!");
                    
                }
            }else{
                console.log("Withdrawl amount successful");
                 }  
         }else{
            console.log("invalid amount ");
            
         }
    }else{
        console.log("Wrong pin");
        
    }
}else{
    console.log("Account is blocked");
    
}