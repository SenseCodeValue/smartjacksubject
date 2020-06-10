const PrimeNumber = class{
    constructor(n){
        this.n = n;
        this.primeNumberArray = this.createPrimeNumberArray();
    }
    createPrimeNumberArray(){
        const arr = [];

        for(let i=2; i<this.n; i++){
            let isPrimeNumber = true;

            for(let j=2; j<i; j++){
                if(i%j===0){
                    isPrimeNumber = false;
                    break;
                }
            }
            if(isPrimeNumber){
                arr.push(i);
            }
        }
        return arr;
    }
    getPrimeNumberArray(){
        return this.primeNumberArray;
    }
}

//최악의 경우 loop수 :17265


const solution = (n)=>{
    if(n%2===0){ // 혹시 인풋값에 짝수 있을 경우 처리
        console.error('홀수를 입력해 주세요!');
    }
    if(n<=5){ // 5보다 작으면 만들 수 없음 처리
        return 0;
    }
    const primeNumber = new PrimeNumber(n);
    const primeNumberArray = primeNumber.getPrimeNumberArray();
    const resultArray = [];
    // let max_loop = 0;
    for(let i=0; i<primeNumberArray.length; i++){ // 간단히 3중 for문 돌면서 찾으면 쉽게 끝난다.
        if(resultArray.length>0){
            break;
        }
        // max_loop+=1;
        let sumI = primeNumberArray[i];
        for(let j=0; j<primeNumberArray.length; j++){
            if(sumI+primeNumberArray[j]>=n||resultArray.length>0){
                break;
            }
            // max_loop+=1;
            let sumJ = sumI+primeNumberArray[j];
            for(let k=0; k<primeNumberArray.length; k++){
                const sumK = sumJ+primeNumberArray[k];
                if(sumK>n||resultArray.length>0){
                    break;
                }
                // max_loop+=1;
                if(sumK===n){
                    resultArray.push(primeNumberArray[i]);
                    resultArray.push(primeNumberArray[j]);
                    resultArray.push(primeNumberArray[k]);
                }
            }
        }
    }
    console.log(resultArray.join(' '));
    // console.log(max_loop); //최악의 경우
};

solution(999);