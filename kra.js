function calculateIndividualNetSalary(){
    const kraRate=[0.10,0.25,0.30]
    const nhifRates=[150,300,400,500,600,750,850,900,950,1000,1100,1200,1300,1400,1500,1600,1700]
    const nssfRate = 6/100;
    
    
    //It gets the value of input submitted by the user
    let basicSalary=parseInt(document.getElementById("basicSalary").value);
    let benefits=parseInt(document.getElementById("benefits").value);
    
    
    // Calculate gross salary
    let grossSalary = basicSalary + benefits;
    
    // Calculate NSSF Deductions
    let nssf = 0;
    let tierOneEmployee=(grossSalary)*nssfRate
    let tierTwoEmployee=(grossSalary-6000)*nssfRate
    
    if (grossSalary<=6000){
        nssf=tierOneEmployee;
    }else if (grossSalary>6000 && grossSalary<=18000){
        nssf=360+tierTwoEmployee;
    }else{
        nssf= 1080;
    }
    
    
    
    
    
    
    
    // Calculate Payee before relief
    
    let taxableIncome = grossSalary-nssf;
    
    let payeeBeforeRelief = 0;
    
    
    if (taxableIncome<=24000){
        payeeBeforeRelief= taxableIncome*kraRate[0];
    }else if(taxableIncome>24000 && taxableIncome<=32333){
        payeeBeforeRelief=(24000*kraRate[0])+((taxableIncome-24000)*kraRate[1])
    }else{
        payeeBeforeRelief=(24000*kraRate[0])+((32333-24000)*kraRate[1])+((taxableIncome-32333)*kraRate[2])
    
    }
    
    
    //calculate Payee(Income Tax )
    
    let personalRelief= 2400;
    // To prevent getting negative payee tax
    if (personalRelief>payeeBeforeRelief){
    
        payee=0;
    
    }else {
        payee=payeeBeforeRelief-personalRelief;
    }
    
    
    
    // Calculate NHIF Deductions
    let nhif = 0;
    if (grossSalary <= 5999) {
    nhif = nhifRates[0];
    } else if (grossSalary>5999 && grossSalary <= 7999) {
    nhif = nhifRates[1];
    } else if (grossSalary>7999 &&grossSalary <= 11999) {
    nhif = nhifRates[2];
    } else if (grossSalary>11999 &&grossSalary <=14999) {
    nhif = nhifRates[3];
    }else if (grossSalary>14999 &&grossSalary <= 19999) {
    nhif = nhifRates[4];
    }else if (grossSalary>19999 &&grossSalary <= 24999) {
    nhif = nhifRates[5];
    }else if (grossSalary>24999 &&grossSalary <= 29999) {
    nhif = nhifRates[6];
    }else if (grossSalary>29999 &&grossSalary <= 34999) {
    nhif = nhifRates[7];
    }else if (grossSalary>34999 &&grossSalary <= 39999) {
    nhif = nhifRates[8];
    }else if (grossSalary>39999 &&grossSalary <= 44999) {
    nhif = nhifRates[9];
    }else if (grossSalary>44999 &&grossSalary <= 49999) {
    nhif = nhifRates[10];
    }else if (grossSalary>49999 &&grossSalary <= 59999) {
    nhif = nhifRates[11];
    }else if (grossSalary>59999 &&grossSalary <= 69999) {
    nhif = nhifRates[12];
    }else if (grossSalary>69999 &&grossSalary <= 79999) {
    nhif = nhifRates[13];
    }else if (grossSalary>79999 &&grossSalary <= 89999) {
    nhif = nhifRates[14];
    }else if (grossSalary>89999 &&grossSalary <= 99999) {
    nhif = nhifRates[15];
    }else {
    nhif = nhifRates[16];
    }
    
    
    
    
    
    
    
    
    
    
    // Calculate Net Salary
    let deductions = payee + nhif + nssf;
    let netSalary = grossSalary - deductions;
    
    
    // Output results
    document.getElementById("taxableIncome").value = taxableIncome;
    document.getElementById("payeTax").value = payee;
    document.getElementById("nhif").value = nhif;
    document.getElementById("nssf").value = nssf;
    document.getElementById("netpay").value =netSalary;
    document.getElementById("gross").value = grossSalary;
    document.getElementById("deductions").value = deductions;
    document.getElementById("personalRelief").value = personalRelief;
    
    
    
    
    
    
    }
    
    
    
    
    