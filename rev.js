
rev = 0
num=12345
for(i=num; i>0; i=Math.floor(i/10)){
    let rem=i%10;
    rev=rev*10+rem;

}
    
    console.log("reversed number is"+rev);

