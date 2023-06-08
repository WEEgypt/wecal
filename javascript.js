function CalQuota1() {
    document.getElementById("RealMoney").value = Math.round(Math.ceil(document.getElementById("ReqBalance").value * 10) / 7) + " LE";
}
function ResetCal1() {
    document.getElementById("ReqBalance").value = "";
    document.getElementById("RealMoney").value = "";
}
function CalQuota2() {
    document.getElementById("RealMoneyADSL").value = Math.round(Math.ceil(document.getElementById("ReqBalanceADSL").value * 14) / 100) + parseInt(document.getElementById("ReqBalanceADSL").value) || 0 + " LE";
}
function ResetCal2() {
    document.getElementById("ReqBalanceADSL").value = "";
    document.getElementById("RealMoneyADSL").value = "";
}
function CalQuota3() {
    document.getElementById("CSTQuota").value = Math.ceil((document.getElementById("BESQuota").value / 8 / 8 / 8 / 8 / 8 / 8 / 8 / 8 / 8 / 8) * 100) / 100 + " GB";
}
function ResetCal3() {
    document.getElementById("BESQuota").value = "";
    document.getElementById("CSTQuota").value = "";
}
function Thanks() {
    if (thanks.style.display === "none") {
        thanks.style.display = "block";
        document.getElementById("more").innerHTML = "Our Management ˄";
    } else {
        thanks.style.display = "none";
        document.getElementById("more").innerHTML = "Our Management ˅";
    }
}
