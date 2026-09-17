const balancePaisa = 500000;      // Rs 5,000
const perTxnLimitPaisa = 2500000;  // Rs 25,000

const batch = [
  { id: "TXN-01", gateway: "esewa",     amountPaisa: 15000,   verified: true  },
  { id: "TXN-02", gateway: "khalti",    amountPaisa: 0,       verified: true  , kyc: {level: 1}},
  { id: "TXN-03", gateway: "esewa",     amountPaisa: 2700000, verified: true  },
  { id: "TXN-04", gateway: "connectips",amountPaisa: 120000,  verified: false },
  { id: "TXN-05", gateway: "paypal",    amountPaisa: 50000,   verified: true  },
  { id: "TXN-06", gateway: "esewa",     amountPaisa: 600000,  verified: true  },
];

function validate(txn) {
    if(txn.amountPaisa <= 0) {
        return "Invalid amount";
    }
    if(!txn.verified) {
        return "KYC pending";
    }
    if (txn.amountPaisa > perTxnLimitPaisa) {
        return "Exceeds per-transaction limit";
    }
    if(txn.amountPaisa > balancePaisa) {
        return "Insufficient balance";
    }
    if(!["esewa", "Khalti", "connectips"].includes(txn.gateway)) {
        return "Unsupported gateway";
    }
    return "OK";// TODO: return a reason string, or "OK"
}


function feeFor(amountPaisa) {
    if (amountPaisa <= 0) {
        return "Invalid Amount";
    }
    if (amountPaisa <=10000){
        return "Free";
    }
    if (amountPaisa <= 100000){
        return "Rs 5.00";
    }
    if (amountPaisa > 100000) {
        return "Rs 15.00";
    }

    // TODO: if / else if ladder, return paisa
}

function route(gateway) {
    switch (gateway) {
        case "esewa":
            return "Redirect to esewa";
            break;
        case "khalti":
            return "Redirect to khalti";
            break;
        case "connectips":
            return "Redirect to connectips";
            break;
        default:
            return "Unsupported gateway";
    }
}

let approved = 0;
for (const txn of batch) {
    const result = validate(txn);
    if (result !== "OK") {
        console.log(`${txn.id} REJECTED ${result}`);
    }
    if (result === "OK") {
        console.log(`${txn.id} OK Rs ${(txn.amountPaisa / 100).toFixed(2)}  Rs ${feeFor(txn.amountPaisa)}  ${route(txn.gateway)}`);
    approved++;
    
}
};

console.log(`APPROVED: ${approved} out of ${batch.length} `)
    console.log(`REJECTED: ${batch.length - approved} out of ${batch.length} `)

    //use filter to count approvals instead of a counter variable
    approved = batch.filter(txn => validate(txn) === "OK");
    console.log(`APPROVED (using filter): ${approved.length} out of ${batch.length} `);