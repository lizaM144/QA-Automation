const merchantName = "Qrius Store";
let balancePaisa = 250000; // Rs 2,500.00 in paisa
const isKYCVerified = false;

const amountPaisa = 150000; // Rs 1,500.00 in paisa
const cashBackPaisa = amountPaisa * 0.02; // 2% cashback

const canSend = balancePaisa >= amountPaisa && isKYCVerified && amountPaisa > 0;
if (canSend == true) {
    balancePaisa -= amountPaisa;
    console.log(`
Merchant : ${merchantName}
KYC      : ${isKYCVerified ? "Verified" : "Not Verified"}
Sent     : Rs ${(amountPaisa / 100).toFixed(2)}
CashBack : Rs ${ (cashBackPaisa / 100).toFixed(2) }
Balance  : Rs ${ (balancePaisa / 100).toFixed(2) }
Approved : ${canSend ? "Yes" : "No"}`);
}
else {
    console.log("Transaction cannot be processed.");
}
