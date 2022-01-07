// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    if( S === 'a' || S === 'aa' ) return 0;
    if( S.indexOf('aaa') >= 0 ) return -1;

    let arr = [];
    let arr2 = [];
    let str;
    let strReslut;
    let cnt_a = 0;

    for( let i = 0 ; i < S.length ; i++ ){
        str = S.substring(i+1, i);
        arr.push(str);
    }

    for( let i = 0 ; i < arr.length ; i++ ){
       
        if( arr[i] !== 'a'){
            if( i === 0 ){
                arr2.push(arr[i] + 'aa');
                cnt_a += 2;
            }
            if( arr[i+1] !== 'a' || i+1 === undefined ){
                arr2.push(arr[i] + 'aa');
                cnt_a += 2;
            }
            else arr2.push(arr[i]);
        }
        if( arr[i] === 'a'){
            if( arr[i-1] !== 'a' )
                if( arr[i+1] !== 'a' ){
                    arr2.push(arr[i] + 'a');
                    cnt_a++;
                }
                else arr2.push(arr[i]);
            else if( arr[i-1] === undefined )
                arr2.push(arr[i]);
            else arr2.push(arr[i]);
        }

    }
    strReslut = arr2.join("");
    return cnt_a;
}

solution('aaba');
