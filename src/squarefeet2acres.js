export function squarefeet2acres(squareFeet){
    //processing
    let acre = squareFeet / 43560;
    return (acre);
}

if (import.meta.main){
    console.log(`squarefeet2acres(43560) returns ${squarefeet2acres(43560)}`);
}