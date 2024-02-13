function binarySearch(list, element) {
    var hi = list.length - 1;
    var lo = 0;
    var mid;
    
    while(hi >= lo){
        mid = Math.floor((hi + lo)/ 2);
        if(list[mid] == element){ 
                while(list[lo] != element){
                    lo++;
                }
                return lo;
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
