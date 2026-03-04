document.getElementById("calc").addEventListener("click", () => {
    const bill = Number(document.getElementById("bill").value);
    const taxP = Number(document.getElementById("tax").value);
    const tipP = Number(document.getElementById("tip").value);
    const people = Number(document.getElementById("people").value) || 1;
    const code = document.getElementById("code").value.trim().toUpperCase();

    if (bill <= 0) return;

    const taxAmt = bill * (taxP / 100);
    const tipAmt = bill * (tipP / 100);
    let total = bill + taxAmt + tipAmt;

    let discount = 0;
    if (code === "VIP" && (total > 200 || bill > 150)) {
        discount = total * 0.10;
    } else if (code === "STUDENT") {
        discount = 10;
    }

    total -= discount;
    const perPerson = total / people;

    const outBox = document.getElementById("out");
    outBox.style.display = "block";
    outBox.innerHTML = `
        <div class="row"><span>Subtotal:</span> <span>$${bill.toFixed(2)}</span></div>
        <div class="row"><span>Tax (${taxP}%):</span> <span>+$${taxAmt.toFixed(2)}</span></div>
        <div class="row"><span>Tips:</span> <span>+$${tipAmt.toFixed(2)}</span></div>
        <div class="row discount-label"><span>Discount:</span> <span>-$${discount.toFixed(2)}</span></div>
        <div class="row total-row"><span>TOTAL:</span> <span>$${total.toFixed(2)}</span></div>
        ${people > 1 ? `<div class="per-person">Each person pays: $${perPerson.toFixed(2)}</div>` : ''}
    `;
});