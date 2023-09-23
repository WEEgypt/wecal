function Check(input) {
    if (input.value.length > input.maxLength) {
        input.value = input.value.slice(0, input.maxLength);
    }
}
document.getElementById("ReqBalancePrepaid").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        CalPrepaid();
    }
});
document.getElementById("ReqBalancePostpaid").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        CalPostpaid();
    }
});
document.getElementById("ReqBalanceADSL").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        CalAdsl();
    }
});
document.getElementById("BESQuota").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        CalQuota();
    }
});
function CalPrepaid() {
    document.getElementById("RealMoneyPrepaid").value = Math.ceil(Number(document.getElementById("ReqBalancePrepaid").value * 10) / 7) + " LE";
}
function ResetPrepaid() {
    document.getElementById("ReqBalancePrepaid").value = "";
    document.getElementById("RealMoneyPrepaid").value = "";
}
function CalPostpaid() {
    document.getElementById("RealMoneyPostpaid").value = Math.ceil((Number(document.getElementById("ReqBalancePostpaid").value) * 23.12) / 100 + Number(document.getElementById("ReqBalancePostpaid").value)) + " LE";
}
function ResetPostpaid() {
    document.getElementById("ReqBalancePostpaid").value = "";
    document.getElementById("RealMoneyPostpaid").value = "";
}
function CalAdsl() {
    document.getElementById("RealMoneyADSL").value = Math.ceil(Number(document.getElementById("ReqBalanceADSL").value * 14) / 100) + Number(document.getElementById("ReqBalanceADSL").value) || 0 + " LE";
}
function ResetAdsl() {
    document.getElementById("ReqBalanceADSL").value = "";
    document.getElementById("RealMoneyADSL").value = "";
}
function CalQuota() {
    document.getElementById("CSTQuota").value = Math.ceil((document.getElementById("BESQuota").value / 8 / 8 / 8 / 8 / 8 / 8 / 8 / 8 / 8 / 8) * 100) / 100 + " GB";
}
function ResetQuota() {
    document.getElementById("BESQuota").value = "";
    document.getElementById("CSTQuota").value = "";
}
