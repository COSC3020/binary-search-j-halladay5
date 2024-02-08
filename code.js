function binarySearch(list, element) {
    var hi = list.length - 1;
    var lo = 0;
    var mid;
    while(hi != lo){
        mid = Math.floor((hi + lo)/ 2);
        if(list[mid] == element){ 
            return mid;
        }else if(list[mid] > element){
            hi = mid-1;
        }else{
            lo = mid+1;
        }
    }     
    return -1;
}
