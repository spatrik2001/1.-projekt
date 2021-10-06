
function Összead(a : number, b : number) : number {
    return a + b;
}

function Számol() {
    let a : number;
    a = Number((document.getElementById('a') as HTMLInputElement)?.value);
    let b = parseInt((document.getElementById('b') as HTMLInputElement)?.value);

    let c = Összead(a, b);

    (document.getElementById('c') as HTMLInputElement).value = c.toString();
}

document.getElementById('számol')?.addEventListener("click", Számol);