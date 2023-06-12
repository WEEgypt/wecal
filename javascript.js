function Check(input) {
    if (input.value.length > input.maxLength) {
        input.value = input.value.slice(0, input.maxLength);
    }
}
document.getElementById("ReqBalance").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        CalMob();
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
function CalMob() {
    document.getElementById("RealMoney").value = Math.round(Math.ceil(document.getElementById("ReqBalance").value * 10) / 7) + " LE";
}
function ResetCalMob() {
    document.getElementById("ReqBalance").value = "";
    document.getElementById("RealMoney").value = "";
}
function CalAdsl() {
    document.getElementById("RealMoneyADSL").value = Math.round(Math.ceil(document.getElementById("ReqBalanceADSL").value * 14) / 100) + parseInt(document.getElementById("ReqBalanceADSL").value) || 0 + " LE";
}
function ResetAdsl() {
    document.getElementById("ReqBalanceADSL").value = "";
    document.getElementById("RealMoneyADSL").value = "";
}
function CalQuota() {
    document.getElementById("CSTQuota").value = Math.ceil((document.getElementById("BESQuota").value / 8 / 8 / 8 / 8 / 8 / 8 / 8 / 8 / 8 / 8) * 100) / 100 + " GB";
}
function ResetCal() {
    document.getElementById("BESQuota").value = "";
    document.getElementById("CSTQuota").value = "";
}
