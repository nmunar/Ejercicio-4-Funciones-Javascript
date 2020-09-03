//Nicolás Munar - 201814383

function secret(arr, func, key) {
    arr.forEach((element, i) => {
        if (func === "encrypt") {
            arr[i] = element + key;
        } else if (func === "decrypt") {
            arr[i] = element - key;
        }
    });
    console.log(arr);
}

const mcd = (a, b) => { var resp = (a === b || b == 0) ? a : (a < b) ? mcd(a, b - a) : mcd(b, a - b); return resp; };