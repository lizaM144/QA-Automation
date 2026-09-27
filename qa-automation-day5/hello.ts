// interface Box {
//     value: string;
// }

// interface called Box where type is generic(the box can contain different type of values)
// interface Box<T> {
//     value: T;
// }
// const numberBox: Box<string> = {value: "hello"};
// const numberBox: Box<number> = {value: 123};

// create an interface for valid transaction
// interface valid {
//     id: String;
//     amountPaisa: Number;
//     method: "eSewa" | "Khalti";
//     status: "SUCCESS" | "FAILED";
    
// }
// // test data p
// let p: valid = {
//     // each field matches the field in the interface
//     id : "TX01",
//     amountPaisa: 1223,
//     method: "eSewa",
//     status: "SUCCESS"
// }

// function printPayment(p: valid) {
//     console.log(`The payment id is:${p.id}`);
//     // return `The payment id is:${p.id}`;
// }

// printPayment(p);


// Create a Payment interface with id, amount, and status. 
// Then create a generic Response<T> interface that has success and data. 
// Create one response containing a Payment object and another response containing a string message. 
// Use <Payment> and <string> to tell TypeScript what type of data each response contains, then print the payment amount and the message.

interface Payment {
    id: string;
    amount: number;
    status: "SUCCESS" | "PENDING" | "FAILED";
}

interface PayResponse<T>{
    success: boolean;
    data: T;
}

const paymentResponse: PayResponse<Payment> = {
    success: true,
    data: {id:"P001",
           amount: 200,
           status: "SUCCESS"
    }
};

const message: PayResponse<string> = {
    success: true,
    data: "Payment successful"
};
console.log(paymentResponse.data.amount); //200
console.log(message.data); // Payment successful