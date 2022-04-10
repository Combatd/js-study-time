const countDown = (num) => {
    if(num <= 0) {
        console.log("Below 0!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}