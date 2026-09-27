// Payment names the shape every payment object must have
interface Payment {
  // a unique id for the transaction, as text
  transactionId: string;
  // the amount, as a whole number of paisa
  amountPaisa: number;
  // method can only be one of these three
  method: "eSewa" | "Khalti" | "ConnectIPS";
  // status can only be one of these three
  status: "SUCCESS"  | "FAILED";
  // the "?" makes remarks optional, it may be missing
  remarks?: string;
}

// this test record must match the Payment shape exactly
const validKhalti: Payment = {
  // each field matches a field in the interface
  transactionId: "TXN-2081-001",
  amountPaisa: 50000,
  method: "Khalti",
  status: "SUCCESS"
};

// a function that only accepts a valid Payment
function receipt(p: Payment): string {
  // convert paisa to rupees for display
  const rupees: number = p.amountPaisa / 100;
  // build and return the receipt line
  return `Rs ${rupees} via ${p.method}`;
}

console.log(receipt(validKhalti));

// this object claims to be a Payment, but two fields are wrong
// const broken: Payment = {
//   transactionId: "TXN-2081-002",
//   // wrong: text where a number is required
//   amountPaisa: "50000",
//   method: "eSewa",
//   // wrong: "DONE" is not a valid status
//   status: "DONE"
// };
// Two errors, both before running:
// amountPaisa: string is not a number
// status: "DONE" is not a valid status