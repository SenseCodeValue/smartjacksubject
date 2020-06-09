const SolutionClass = class{
    constructor(n){
        this.n = n;
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
    solution(){
        if(this.n%2===0){ // 혹시 인풋값에 짝수 있을 경우 처리
            console.error('홀수를 입력해 주세요!');
        }
        if(this.n<=5){ // 5보다 작으면 만들 수 없음 처리
            return 0;
        }
        const primeNumberArray = this.createPrimeNumberArray();
        const resultArray = [];
        for(let i=0; i<primeNumberArray.length; i++){ // 간단히 3중 for문 돌면서 찾으면 쉽게 끝난다.
            if(resultArray.length>0){
                break;
            }
            let sumI = primeNumberArray[i];
            for(let j=0; j<primeNumberArray.length; j++){
                if(sumI+primeNumberArray[j]>=this.n||resultArray.length>0){
                    break;
                }
                let sumJ = sumI+primeNumberArray[j];
                for(let k=0; k<primeNumberArray.length; k++){
                    const sumK = sumJ+primeNumberArray[k];
                    if(sumK>this.n||resultArray.length>0){
                        break;
                    }
                    if(sumK===this.n){
                        resultArray.push(primeNumberArray[i]);
                        resultArray.push(primeNumberArray[j]);
                        resultArray.push(primeNumberArray[k]);
                    }
                }
            }
        }
        console.log(resultArray.join(' '));
    }
}
const sc = new SolutionClass(2);
sc.solution();