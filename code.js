function binarySearch(list, element) {
    var hi = list.length - 1;
    var lo = 0;
    var mid;
    var indices = [];
    
    while(hi >= lo){
        mid = Math.floor((hi + lo)/ 2);
        if(list[mid] == element){ 
            let left = mid-1;
            indices.push(mid);
            while((left >= lo) && (list[left] == element)){
                indices.push(left);
                left--;
            }

            let right = mid+1;
            while((right<= hi) && (list[right] == element)){
                indices.push(right);
                right++;
            }
            
            return indices;
        }else if(list[mid] > element){
            hi = mid-1;
        }else{
            lo = mid+1;
        }
    }
    return -1;
}

//https://www.geeksforgeeks.org/javascript-return-multiple-values-from-function/
// Although the search was working correctly, it failed when the list only consisted of multiple values of the element
// I researched the return function and found it could only return one item, and this website gave me the idea of an array 
// to return multiple values and told me I couldn't return multiple numbers at a time.
