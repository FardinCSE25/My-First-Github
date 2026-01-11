let height = 75;
const weight = 64;

height = (height * 2.54) / 100;

const BMI = weight / (height ** 2);

if(BMI<18.5){
    console.log('kom ojon');
}

else if(BMI >= 18.5 && BMI < 24.9){
    console.log('sothik ojon');
}

else if(BMI >= 24.9 && BMI < 29.9){
    console.log('beshi ojon');
}

else {
    console.log('sthulo');
}
