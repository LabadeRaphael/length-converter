const convert=()=>{
    let firstSelectedOption=document.getElementById("firstselectedval").value
    let selectedOption=document.getElementById("selectval").value

    // first value to kilometer
    if (firstSelectedOption=="firstkilometer" && selectedOption=="kilometer") {
        let value=firstinput.value
        let result=value
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value remain the same</div>`
    }
    if (firstSelectedOption=="firstdecimeter" && selectedOption=="kilometer") {
        let value=firstinput.value
        let result=value/10000
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 10000</div>`
    }
    if(firstSelectedOption=="firstmeter" && selectedOption=="kilometer"){
        let value=firstinput.value
        let result=value/1000
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1000</div>`
    }
    if (firstSelectedOption=="firstcentimeter" && selectedOption=="kilometer") {
        let value=firstinput.value
        let result=value/100000
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 100000</div>`
    }
    if (firstSelectedOption=="firstmillimeter" && selectedOption=="kilometer") {
        let value=firstinput.value
        let result=value/1000000
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1000000</div>`
        
    }
    if (firstSelectedOption=="firstmicrometer" && selectedOption=="kilometer") {
        let value=firstinput.value
        let result=value/1000000000
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1000000000</div>`
    }
    if (firstSelectedOption=="firstnanometer" && selectedOption=="kilometer") {
        let value=firstinput.value
        let result=value/1000000000000
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1000000000000</div>`
    }
    if (firstSelectedOption=="firstmile" && selectedOption=="kilometer") {
        let value=firstinput.value
        let result=value/0.621
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.621</div>`
    }
    if (firstSelectedOption=="firstyard" && selectedOption=="kilometer") {
        let value=firstinput.value
        let result=value/1093.613
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1093.613</div>`
    }
    if (firstSelectedOption=="firstinch" && selectedOption=="kilometer") {
        let value=firstinput.value
        let result=value/39370.079
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 39370.079</div>`
    }
    if (firstSelectedOption=="firstnauticalmile" && selectedOption=="kilometer") {
        let value=firstinput.value
        let result=value/0.54
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.54</div>`
    }
    // end of first value to kilometer

    // start of first value to decimeter
    if (firstSelectedOption=="firstkilometer" && selectedOption=="decimeter") {
        let value=firstinput.value
        let result=value*10000
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is multiply by 10000</div>`
    }
    if (firstSelectedOption=="firstdecimeter" && selectedOption=="decimeter") {
        let value=firstinput.value
        let result=value
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value remain the same</div>`
    }
    if(firstSelectedOption=="firstmeter" && selectedOption=="decimeter"){
        let value=firstinput.value
        let result=value/0.1
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value divided by 0.1</div>`
    }
    if (firstSelectedOption=="firstcentimeter" && selectedOption=="decimeter") {
        let value=firstinput.value
        let result=value/10
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 10</div>`
    }
    if (firstSelectedOption=="firstmillimeter" && selectedOption=="decimeter") {
        let value=firstinput.value
        let result=value/100
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 100</div>`
    }
    if (firstSelectedOption=="firstmicrometer" && selectedOption=="decimeter") {
        let value=firstinput.value
        let result=value/100000
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 100000</div>`
    }
    if (firstSelectedOption=="firstnanometer" && selectedOption=="decimeter") {
        let value=firstinput.value
        let result=value/100000000
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 100000000</div>`
    }
    if (firstSelectedOption=="firstmile" && selectedOption=="decimeter") {
        let value=firstinput.value
        let result=value*16093.44
        inputtwo.value=result
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is multiply by 16093.44</div>`
        
    }
    if (firstSelectedOption=="firstyard" && selectedOption=="decimeter") {
        let value=firstinput.value
        let result=value/0.109
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.109</div>`
    }
    if (firstSelectedOption=="firstinch" && selectedOption=="decimeter") {
        let value=firstinput.value
        let result=value/3.937
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 3.937</div>`

    }
    if (firstSelectedOption=="firstnauticalmile" && selectedOption=="decimeter") {
        let value=firstinput.value
        let result=value/0.000054
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.000054</div>`
    }
    // end of first value to decimeter

    // start of first value to meter
    if (firstSelectedOption=="firstkilometer" && selectedOption=="meter") {
        let value=firstinput.value
        let result=value/0.001
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided 0.001</div>`
    }
    if (firstSelectedOption=="firstdecimeter" && selectedOption=="meter") {
        let value=firstinput.value
        let result=value/10
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 10</div>`
    }
    if(firstSelectedOption=="firstmeter" && selectedOption=="meter"){
        let value=firstinput.value
        let result=value
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value remain the same</div>`
    }
    if (firstSelectedOption=="firstcentimeter" && selectedOption=="meter") {
        let value=firstinput.value
        let result=value/100
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 100</div>`
    }
    if (firstSelectedOption=="firstmillimeter" && selectedOption=="meter") {
        let value=firstinput.value
        let result=value/1000
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1000</div>`
    }
    if (firstSelectedOption=="firstmicrometer" && selectedOption=="meter") {
        let value=firstinput.value
        let result=value/1000000
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1000000</div>`
    }
    if (firstSelectedOption=="firstnanometer" && selectedOption=="meter") {
        let value=firstinput.value
        let result=value/1000000000
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1000000000</div>`
    }
    if (firstSelectedOption=="firstmile" && selectedOption=="meter") {
        let value=firstinput.value
        let result=value/0.000621
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.000621</div>`
    }
    if (firstSelectedOption=="firstyard" && selectedOption=="meter") {
        let value=firstinput.value
        let result=value/1.094
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1.094</div>`
    }
    if (firstSelectedOption=="firstinch" && selectedOption=="meter") {
        let value=firstinput.value
        let result=value/39.37
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 39.37</div>`
    }
    if (firstSelectedOption=="firstnauticalmile" && selectedOption=="meter") {
        let value=firstinput.value
        let result=value/0.00054
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.00054</div>`
    }
    // end of first value to meter

    // start of first value to centimeter
    if (firstSelectedOption=="firstkilometer" && selectedOption=="centimeter") {
        let value=firstinput.value
        let result=value/0.00001
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.00001</div>`
    }
    if (firstSelectedOption=="firstdecimeter" && selectedOption=="centimeter") {
        let value=firstinput.value
        let result=value/0.1
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.1</div>`
    }
    if(firstSelectedOption=="firstmeter" && selectedOption=="centimeter"){
        let value=firstinput.value
        let result=value/0.01
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.01</div>`
    }
    if (firstSelectedOption=="firstcentimeter" && selectedOption=="centimeter") {
        let value=firstinput.value
        let result=value
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value remain the same</div>`
    }
    if (firstSelectedOption=="firstmillimeter" && selectedOption=="centimeter") {
        let value=firstinput.value
        let result=value/10
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 10</div>`
    }
    if (firstSelectedOption=="firstmicrometer" && selectedOption=="centimeter") {
        let value=firstinput.value
        let result=value/10000
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 10000</div>`
    }
    if (firstSelectedOption=="firstnanometer" && selectedOption=="centimeter") {
        let value=firstinput.value
        let result=value/10000000
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 10000000</div>`
    }
    if (firstSelectedOption=="firstmile" && selectedOption=="centimeter") {
        let value=firstinput.value
        let result=value/0.000006214
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.000006214</div>`
    }
    if (firstSelectedOption=="firstyard" && selectedOption=="centimeter") {
        let value=firstinput.value
        let result=value/0.0109
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.0109</div>`
    }
    if (firstSelectedOption=="firstinch" && selectedOption=="centimeter") {
        let value=firstinput.value
        let result=value/0.394
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.394</div>`
    }
    if (firstSelectedOption=="firstnauticalmile" && selectedOption=="centimeter") {
        let value=firstinput.value
        let result=value/0.0000054
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.0000054</div>`
    }
    // end of first value to centimeter

    // start of first value to millimeter
    if (firstSelectedOption=="firstkilometer" && selectedOption=="millimeter") {
        let value=firstinput.value
        let result=value/0.000001
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.000001</div>`
    }
    if (firstSelectedOption=="firstdecimeter" && selectedOption=="millimeter") {
        let value=firstinput.value
        let result=value/0.01
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.01</div>`
    }
    if(firstSelectedOption=="firstmeter" && selectedOption=="millimeter"){
        let value=firstinput.value
        let result=value/0.001
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.001</div>`
    }
    if (firstSelectedOption=="firstcentimeter" && selectedOption=="millimeter") {
        let value=firstinput.value
        let result=value/0.1
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.1</div>`
        
    }
    if (firstSelectedOption=="firstmillimeter" && selectedOption=="millimeter") {
        let value=firstinput.value
        let result=value
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value remain the same</div>`
    }
    if (firstSelectedOption=="firstmicrometer" && selectedOption=="millimeter") {
        let value=firstinput.value
        let result=value/1000
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1000</div>`
    }
    if (firstSelectedOption=="firstnanometer" && selectedOption=="millimeter") {
        let value=firstinput.value
        let result=value/1000000
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1000000</div>`
    }
    if (firstSelectedOption=="firstmile" && selectedOption=="millimeter") {
        let value=firstinput.value
        let result=value/0.000006214
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.000006214</div>`
    }
    if (firstSelectedOption=="firstyard" && selectedOption=="millimeter") {
        let value=firstinput.value
        let result=value/0.00109
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.00109</div>`
    }
    if (firstSelectedOption=="firstinch" && selectedOption=="millimeter") {
        let value=firstinput.value
        let result=value/0.0394
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.0394</div>`
    }
    if (firstSelectedOption=="firstnauticalmile" && selectedOption=="millimeter") {
        let value=firstinput.value
        let result=value/0.000054
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.000054</div>`
    }
    // end of first value to millimeter

    // start of first value to micrometer
    if (firstSelectedOption=="firstkilometer" && selectedOption=="micrometer") {
        let value=firstinput.value
        let result=value/0.000000001
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.000000001</div>`
    }
    if (firstSelectedOption=="firstdecimeter" && selectedOption=="micrometer") {
        let value=firstinput.value
        let result=value/0.00001
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.00001</div>`
    }
    if(firstSelectedOption=="firstmeter" && selectedOption=="micrometer"){
        let value=firstinput.value
        let result=value/0.000001
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.000001</div>`
    }
    if (firstSelectedOption=="firstcentimeter" && selectedOption=="micrometer") {
        let value=firstinput.value
        let result=value/0.0001
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.0001</div>`
        
    }
    if (firstSelectedOption=="firstmillimeter" && selectedOption=="micrometer") {
        let value=firstinput.value
        let result=value/0.001
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value remain is divided by 0.001</div>`
    }
    if (firstSelectedOption=="firstmicrometer" && selectedOption=="micrometer") {
        let value=firstinput.value
        let result=value
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value remain the same</div>`
    }
    if (firstSelectedOption=="firstnanometer" && selectedOption=="micrometer") {
        let value=firstinput.value
        let result=value/1000
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1000</div>`
    }
    if (firstSelectedOption=="firstmile" && selectedOption=="micrometer") {
        let value=firstinput.value
        let result=value/0.0000000006214
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.0000000006214</div>`
    }
    if (firstSelectedOption=="firstyard" && selectedOption=="micrometer") {
        let value=firstinput.value
        let result=value/0.000001094
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.000001094</div>`
    }
    if (firstSelectedOption=="firstinch" && selectedOption=="micrometer") {
        let value=firstinput.value
        let result=value/0.0000394
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.0000394</div>`
    }
    if (firstSelectedOption=="firstnauticalmile" && selectedOption=="micrometer") {
        let value=firstinput.value
        let result=value/0.00000000054
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.00000000054</div>`
    }
    // end of first value to micrometer

    // strat of first value to nanometer
    if (firstSelectedOption=="firstkilometer" && selectedOption=="nanometer") {
        let value=firstinput.value
        let result=value/0.000000000001
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.000000000001</div>`
    }
    if (firstSelectedOption=="firstdecimeter" && selectedOption=="nanometer") {
        let value=firstinput.value
        let result=value/0.00000001
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.00000001</div>`
    }
    if(firstSelectedOption=="firstmeter" && selectedOption=="nanometer"){
        let value=firstinput.value
        let result=value/0.000000001
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.000000001</div>`
    }
    if (firstSelectedOption=="firstcentimeter" && selectedOption=="nanometer") {
        let value=firstinput.value
        let result=value/0.0000001
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.0000001</div>`
        
    }
    if (firstSelectedOption=="firstmillimeter" && selectedOption=="nanometer") {
        let value=firstinput.value
        let result=value/0.000001
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value remain is divided by 0.000001</div>`
    }
    if (firstSelectedOption=="firstmicrometer" && selectedOption=="nanometer") {
        let value=firstinput.value
        let result=value/0.001
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.001</div>`
    }
    if (firstSelectedOption=="firstnanometer" && selectedOption=="nanometer") {
        let value=firstinput.value
        let result=value
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value remain the same</div>`
    }
    if (firstSelectedOption=="firstmile" && selectedOption=="nanometer") {
        let value=firstinput.value
        let result=value/0.0000000000006214
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.0000000000006214</div>`
    }
    if (firstSelectedOption=="firstyard" && selectedOption=="nanometer") {
        let value=firstinput.value
        let result=value/0.000000001094
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.000000001094</div>`
    }
    if (firstSelectedOption=="firstinch" && selectedOption=="nanometer") {
        let value=firstinput.value
        let result=value/0.00000000394
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.00000000394</div>`
    }
    if (firstSelectedOption=="firstnauticalmile" && selectedOption=="nanometer") {
        let value=firstinput.value
        let result=value/0.000000000000054
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.000000000000054</div>`
    }
    // end of first value to nanometer

    // start of first value to mile
    if (firstSelectedOption=="firstkilometer" && selectedOption=="mile") {
        let value=firstinput.value
        let result=value/1.609
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1.609</div>`
    }
    if (firstSelectedOption=="firstdecimeter" && selectedOption=="mile") {
        let value=firstinput.value
        let result=value/16093.44
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 16093.44</div>`
    }
    if(firstSelectedOption=="firstmeter" && selectedOption=="mile"){
        let value=firstinput.value
        let result=value/1609.344
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1609.344</div>`
    }
    if (firstSelectedOption=="firstcentimeter" && selectedOption=="mile") {
        let value=firstinput.value
        let result=value/160934.4
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 160934.4</div>`
        
    }
    if (firstSelectedOption=="firstmillimeter" && selectedOption=="mile") {
        let value=firstinput.value
        let result=value/1609344
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value remain is divided by 1609344</div>`
    }
    if (firstSelectedOption=="firstmicrometer" && selectedOption=="mile") {
        let value=firstinput.value
        let result=value/1609344000
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1609344000</div>`
    }
    if (firstSelectedOption=="firstnanometer" && selectedOption=="mile") {
        let value=firstinput.value
        let result=value/1609344000000
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1609344000000</div>`
    }
    if (firstSelectedOption=="firstmile" && selectedOption=="mile") {
        let value=firstinput.value
        let result=value
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value remain the same</div>`
    }
    if (firstSelectedOption=="firstyard" && selectedOption=="mile") {
        let value=firstinput.value
        let result=value/1760
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1760</div>`
    }
    if (firstSelectedOption=="firstinch" && selectedOption=="mile") {
        let value=firstinput.value
        let result=value/66360
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 66360</div>`
    }
    if (firstSelectedOption=="firstnauticalmile" && selectedOption=="mile") {
        let value=firstinput.value
        let result=value/0.869
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.869</div>`
    }
    // end of first value to mile

    // start of first value to yard
    if (firstSelectedOption=="firstkilometer" && selectedOption=="yard") {
        let value=firstinput.value
        let result=value/0.000914
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.000914</div>`
    }
    if (firstSelectedOption=="firstdecimeter" && selectedOption=="yard") {
        let value=firstinput.value
        let result=value/9.144
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 9.144</div>`
    }
    if(firstSelectedOption=="firstmeter" && selectedOption=="yard"){
        let value=firstinput.value
        let result=value/0.914
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.914</div>`
    }
    if (firstSelectedOption=="firstcentimeter" && selectedOption=="yard") {
        let value=firstinput.value
        let result=value/91.44
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 91.44</div>`
        
    }
    if (firstSelectedOption=="firstmillimeter" && selectedOption=="yard") {
        let value=firstinput.value
        let result=value/194.4
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value remain is divided by 194.4</div>`
    }
    if (firstSelectedOption=="firstmicrometer" && selectedOption=="yard") {
        let value=firstinput.value
        let result=value/914400
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 914400</div>`
    }
    if (firstSelectedOption=="firstnanometer" && selectedOption=="yard") {
        let value=firstinput.value
        let result=value/914400000
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 914400000</div>`
    }
    if (firstSelectedOption=="firstmile" && selectedOption=="yard") {
        let value=firstinput.value
        let result=value/0.000568
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided 0.000568</div>`
    }
    if (firstSelectedOption=="firstyard" && selectedOption=="yard") {
        let value=firstinput.value
        let result=value
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value rwemain the same</div>`
    }
    if (firstSelectedOption=="firstinch" && selectedOption=="yard") {
        let value=firstinput.value
        let result=value/36
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 36</div>`
    }
    if (firstSelectedOption=="firstnauticalmile" && selectedOption=="yard") {
        let value=firstinput.value
        let result=value/0.000494
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.000494</div>`
    }
    // end of first value to yard

    // start of first value to inch
    if (firstSelectedOption=="firstkilometer" && selectedOption=="inch") {
        let value=firstinput.value
        let result=value/0.0000254
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.0000254</div>`
    }
    if (firstSelectedOption=="firstdecimeter" && selectedOption=="inch") {
        let value=firstinput.value
        let result=value/0.254
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.254</div>`
    }
    if(firstSelectedOption=="firstmeter" && selectedOption=="inch"){
        let value=firstinput.value
        let result=value/0.0254
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.0254</div>`
    }
    if (firstSelectedOption=="firstcentimeter" && selectedOption=="inch") {
        let value=firstinput.value
        let result=value/2.54
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 2.54</div>`
        
    }
    if (firstSelectedOption=="firstmillimeter" && selectedOption=="inch") {
        let value=firstinput.value
        let result=value/25.4
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value remain is divided by 25.4</div>`
    }
    if (firstSelectedOption=="firstmicrometer" && selectedOption=="inch") {
        let value=firstinput.value
        let result=value/25400
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 25400</div>`
    }
    if (firstSelectedOption=="firstnanometer" && selectedOption=="inch") {
        let value=firstinput.value
        let result=value/25400000
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 25400000</div>`
    }
    if (firstSelectedOption=="firstmile" && selectedOption=="inch") {
        let value=firstinput.value
        let result=value/0.00001578
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided 0.00001578</div>`
    }
    if (firstSelectedOption=="firstyard" && selectedOption=="inch") {
        let value=firstinput.value
        let result=value/0.0278
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.0278</div>`
    }
    if (firstSelectedOption=="firstinch" && selectedOption=="inch") {
        let value=firstinput.value
        let result=value
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value rwemain the same</div>`
      
    }
    if (firstSelectedOption=="firstnauticalmile" && selectedOption=="inch") {
        let value=firstinput.value
        let result=value/0.00001371
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.00001371</div>`
    }
    // end of first value to inch

    // start of first value to nautical mile
    if (firstSelectedOption=="firstkilometer" && selectedOption=="nautical mile") {
        let value=firstinput.value
        let result=value/1.852
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1.852</div>`
    }
    if (firstSelectedOption=="firstdecimeter" && selectedOption=="nautical mile") {
        let value=firstinput.value
        let result=value/18520
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 18520</div>`
    }
    if(firstSelectedOption=="firstmeter" && selectedOption=="nautical mile"){
        let value=firstinput.value
        let result=value/1852
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1852</div>`
    }
    if (firstSelectedOption=="firstcentimeter" && selectedOption=="nautical mile") {
        let value=firstinput.value
        let result=value/185200
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 185200</div>`
        
    }
    if (firstSelectedOption=="firstmillimeter" && selectedOption=="nautical mile") {
        let value=firstinput.value
        let result=value/1852000
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value remain is divided by 1852000</div>`
    }
    if (firstSelectedOption=="firstmicrometer" && selectedOption=="nautical mile") {
        let value=firstinput.value
        let result=value/1852000000
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1852000000</div>`
    }
    if (firstSelectedOption=="firstnanometer" && selectedOption=="nautical mile") {
        let value=firstinput.value
        let result=value/1852000000000
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1852000000000</div>`
    }
    if (firstSelectedOption=="firstmile" && selectedOption=="nautical mile") {
        let value=firstinput.value
        let result=value/1.151
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided 1.151</div>`
    }
    if (firstSelectedOption=="firstyard" && selectedOption=="nautical mile") {
        let value=firstinput.value
        let result=value/2025.372
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 2025.372</div>`
    }
    if (firstSelectedOption=="firstinch" && selectedOption=="nautical mile") {
        let value=firstinput.value
        let result=value/72913.386
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 72913.386</div>`
    }
    if (firstSelectedOption=="firstnauticalmile" && selectedOption=="nautical mile") {
        let value=firstinput.value
        let result=value
        inputtwo.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value remain the same</div>`
    }
    // end of first value to nautical mile
}
const convertsecond=()=>{
    let firstSelectedOption=document.getElementById("firstselectedval").value
    let selectedOption=document.getElementById("selectval").value
    // start of second value to firstkilometer
    if (firstSelectedOption=="firstkilometer" && selectedOption=="kilometer") {
        let value=inputtwo.value 
        let result=value
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value remain the same</div>`
    }
    if (firstSelectedOption=="firstkilometer" && selectedOption=="decimeter") {
        let value=inputtwo.value 
        let result=value/10000
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 10000</div>`
    }  
    if (firstSelectedOption=="firstkilometer" && selectedOption=="meter") {
        let value=inputtwo.value 
        let result=value/1000
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1000</div>`
    }  
    if (firstSelectedOption=="firstkilometer" && selectedOption=="centimeter") {
        let value=inputtwo.value 
        let result=value/100000
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 100000</div>`
    }  
    if (firstSelectedOption=="firstkilometer" && selectedOption=="millimeter") {
        let value=inputtwo.value 
        let result=value/1000000
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1000000</div>`
    }  
    if (firstSelectedOption=="firstkilometer" && selectedOption=="micrometer") {
        let value=inputtwo.value 
        let result=value/1000000000
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1000000000</div>`
    }  
    if (firstSelectedOption=="firstkilometer" && selectedOption=="nanometer") {
        let value=inputtwo.value 
        let result=value/1000000000000
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1000000000000</div>`
    }  
    if (firstSelectedOption=="firstkilometer" && selectedOption=="mile") {
        let value=inputtwo.value 
        let result=value*1.609
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided multiply by 1.609</div>`
    }  
    if (firstSelectedOption=="firstkilometer" && selectedOption=="yard") {
        let value=inputtwo.value 
        let result=value/1094
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is multiply by 1094</div>`
    }  
    if (firstSelectedOption=="firstkilometer" && selectedOption=="inch") {
        let value=inputtwo.value 
        let result=value*39370
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is multiply by 39370</div>`
    }  
    if (firstSelectedOption=="firstkilometer" && selectedOption=="nautical mile") {
        let value=inputtwo.value 
        let result=value*1.852
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is mulitiply by 1.852</div>`
    }  
    // end of second value to firstkilometer

    // start of second value to firstdecimeter
    if ( selectedOption=="kilometer" && firstSelectedOption=="firstdecimeter") {
        let value=inputtwo.value 
        let result=value/0.0001
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.0001</div>`
    }
    if ( selectedOption=="decimeter" && firstSelectedOption=="firstdecimeter") {
        let value=inputtwo.value 
        let result=value
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value remain the same</div>`
    }  
    if ( selectedOption=="meter" && firstSelectedOption=="firstdecimeter") {
        let value=inputtwo.value 
        let result=value/0.1
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.1</div>`
    } 
    if ( selectedOption=="centimeter" && firstSelectedOption=="firstdecimeter") {
        let value=inputtwo.value 
        let result=value/10
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 10</div>`
    } 
    if ( selectedOption=="millimeter" && firstSelectedOption=="firstdecimeter") {
        let value=inputtwo.value 
        let result=value/100
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 100</div>`
    } 
    if ( selectedOption=="micrometer" && firstSelectedOption=="firstdecimeter") {
        let value=inputtwo.value 
        let result=value/100000
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 100000</div>`
    } 
    if ( selectedOption=="nanometer" && firstSelectedOption=="firstdecimeter") {
        let value=inputtwo.value 
        let result=value/0.00000001
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The is divided by 0.00000001</div>`
    } 
    if ( selectedOption=="mile" && firstSelectedOption=="firstdecimeter") {
        let value=inputtwo.value 
        let result=value*16093.44
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is multiply by 16093.44</div>`
    } 
    if ( selectedOption=="yard" && firstSelectedOption=="firstdecimeter") {
        let value=inputtwo.value 
        let result=value*9.144
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is multiply by 9.144</div>`
    } 
    if ( selectedOption=="inch" && firstSelectedOption=="firstdecimeter") {
        let value=inputtwo.value 
        let result=value*0.254
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is multiply by 0.254</div>`
    } 
    if ( selectedOption=="nautical mile" && firstSelectedOption=="firstdecimeter") {
        let value=inputtwo.value 
        let result=value*18520
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is multiply by 18520</div>`
    } 
    // end of second value to firstdecimeter

    // start of second value to meter
    if ( selectedOption=="kilometer" && firstSelectedOption=="firstmeter") {
        let value=inputtwo.value 
        let result=value/0.001
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.001</div>`
    }
    if ( selectedOption=="decimeter" && firstSelectedOption=="firstmeter") {
        let value=inputtwo.value 
        let result=value/10
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 10</div>`
    }  
    if ( selectedOption=="meter" && firstSelectedOption=="firstmeter") {
        let value=inputtwo.value 
        let result=value
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value remain the same</div>`
    } 
    if ( selectedOption=="centimeter" && firstSelectedOption=="firstmeter") {
        let value=inputtwo.value 
        let result=value/100
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 100</div>`
    } 
    if ( selectedOption=="millimeter" && firstSelectedOption=="firstmeter") {
        let value=inputtwo.value 
        let result=value/1000
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1000</div>`
    } 
    if ( selectedOption=="micrometer" && firstSelectedOption=="firstmeter") {
        let value=inputtwo.value 
        let result=value/1000000
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1000000</div>`
    } 
    if ( selectedOption=="nanometer" && firstSelectedOption=="firstmeter") {
        let value=inputtwo.value 
        let result=value/1000000000
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The is divided by 1000000000</div>`
    } 
    if ( selectedOption=="mile" && firstSelectedOption=="firstmeter") {
        let value=inputtwo.value 
        let result=value/0.000621
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.000621</div>`
    } 
    if ( selectedOption=="yard" && firstSelectedOption=="firstmeter") {
        let value=inputtwo.value 
        let result=value/1.094
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1.094</div>`
    } 
    if ( selectedOption=="inch" && firstSelectedOption=="firstmeter") {
        let value=inputtwo.value 
        let result=value/39.37
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 39.37</div>`
    } 
    if ( selectedOption=="nautical mile" && firstSelectedOption=="firstmeter") {
        let value=inputtwo.value 
        let result=value/0.00054
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.00054</div>`
    } 
    // end of second value to meter

    // end of second value to centimeter
    if ( selectedOption=="kilometer" && firstSelectedOption=="firstcentimeter") {
        let value=inputtwo.value 
        let result=value/0.00001
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.00001</div>`
    }
    if ( selectedOption=="decimeter" && firstSelectedOption=="firstcentimeter") {
        let value=inputtwo.value 
        let result=value/0.1
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.1</div>`
    }  
    if ( selectedOption=="meter" && firstSelectedOption=="firstcentimeter") {
        let value=inputtwo.value 
        let result=value/0.01
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided  by 0.01</div>`
    } 
    if ( selectedOption=="centimeter" && firstSelectedOption=="firstcentimeter") {
        let value=inputtwo.value 
        let result=value
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value remain the same</div>`
    } 
    if ( selectedOption=="millimeter" && firstSelectedOption=="firstcentimeter") {
        let value=inputtwo.value 
        let result=value/10
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 10</div>`
    } 
    if ( selectedOption=="micrometer" && firstSelectedOption=="firstcentimeter") {
        let value=inputtwo.value 
        let result=value/10000
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 10000</div>`
    } 
    if ( selectedOption=="nanometer" && firstSelectedOption=="firstcentimeter") {
        let value=inputtwo.value 
        let result=value/10000000
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The is divided by 10000000</div>`
    } 
    if ( selectedOption=="mile" && firstSelectedOption=="firstcentimeter") {
        let value=inputtwo.value 
        let result=value/0.000006214
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.000006214</div>`
    } 
    if ( selectedOption=="yard" && firstSelectedOption=="firstcentimeter") {
        let value=inputtwo.value 
        let result=value/0.0109
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.0109</div>`
    } 
    if ( selectedOption=="inch" && firstSelectedOption=="firstcentimeter") {
        let value=inputtwo.value 
        let result=value/0.394
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.394</div>`
    } 
    if ( selectedOption=="nautical mile" && firstSelectedOption=="firstcentimeter") {
        let value=inputtwo.value 
        let result=value/0.0000054
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.0000054</div>`
    } 
    // end of second value to centimeter


    // start of second value to millimeter
    if ( selectedOption=="kilometer" && firstSelectedOption=="firstmillimeter") {
        let value=inputtwo.value 
        let result=value/0.000001
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.000001</div>`
    }
    if ( selectedOption=="decimeter" && firstSelectedOption=="firstmillimeter") {
        let value=inputtwo.value 
        let result=value/0.01
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.01</div>`
    }  
    if ( selectedOption=="meter" && firstSelectedOption=="firstmillimeter") {
        let value=inputtwo.value 
        let result=value/0.001
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.001</div>`
    } 
    if ( selectedOption=="centimeter" && firstSelectedOption=="firstmillimeter") {
        let value=inputtwo.value 
        let result=value/0.1
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.1</div>`
    } 
    if ( selectedOption=="millimeter" && firstSelectedOption=="firstmillimeter") {
        let value=inputtwo.value 
        let result=value
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value remain the same</div>`
    } 
    if ( selectedOption=="micrometer" && firstSelectedOption=="firstmillimeter") {
        let value=inputtwo.value 
        let result=value/1000
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1000</div>`
    } 
    if ( selectedOption=="nanometer" && firstSelectedOption=="firstmillimeter") {
        let value=inputtwo.value 
        let result=value/1000000
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The is divided by 1000000</div>`
    } 
    if ( selectedOption=="mile" && firstSelectedOption=="firstmillimeter") {
        let value=inputtwo.value 
        let result=value/0.0000006214
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.0000006214</div>`
    } 
    if ( selectedOption=="yard" && firstSelectedOption=="firstmillimeter") {
        let value=inputtwo.value 
        let result=value/0.00109
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.00109</div>`
    } 
    if ( selectedOption=="inch" && firstSelectedOption=="firstmillimeter") {
        let value=inputtwo.value 
        let result=value/0.0394
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.0394</div>`
    } 
    if ( selectedOption=="nautical mile" && firstSelectedOption=="firstmillimeter") {
        let value=inputtwo.value 
        let result=value/0.00000054
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.00000054</div>`
    } 
    // end of second value to millimeter

    // start of second value to micrometer
    if ( selectedOption=="kilometer" && firstSelectedOption=="firstmicrometer") {
        let value=inputtwo.value 
        let result=value/0.000000001
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.000000001</div>`
    }
    if ( selectedOption=="decimeter" && firstSelectedOption=="firstmicrometer") {
        let value=inputtwo.value 
        let result=value/0.00001
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.00001</div>`
    }  
    if ( selectedOption=="meter" && firstSelectedOption=="firstmicrometer") {
        let value=inputtwo.value 
        let result=value/0.000001
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.000001</div>`
    } 
    if ( selectedOption=="centimeter" && firstSelectedOption=="firstmicrometer") {
        let value=inputtwo.value 
        let result=value/0.0001
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.0001</div>`
    } 
    if ( selectedOption=="millimeter" && firstSelectedOption=="firstmicrometer") {
        let value=inputtwo.value 
        let result=value/0.001
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.001</div>`
    } 
    if ( selectedOption=="micrometer" && firstSelectedOption=="firstmicrometer") {
        let value=inputtwo.value 
        let result=value
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value remain the same</div>`
    } 
    if ( selectedOption=="nanometer" && firstSelectedOption=="firstmicrometer") {
        let value=inputtwo.value 
        let result=value/1000
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The is divided by 1000</div>`
    } 
    if ( selectedOption=="mile" && firstSelectedOption=="firstmicrometer") {
        let value=inputtwo.value 
        let result=value/0.0000000006214
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.0000000006214</div>`
    } 
    if ( selectedOption=="yard" && firstSelectedOption=="firstmicrometer") {
        let value=inputtwo.value 
        let result=value/0.000001094
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.000001094</div>`
    } 
    if ( selectedOption=="inch" && firstSelectedOption=="firstmicrometer") {
        let value=inputtwo.value 
        let result=value/0.0000394
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.0000394</div>`
    } 
    if ( selectedOption=="nautical mile" && firstSelectedOption=="firstmicrometer") {
        let value=inputtwo.value 
        let result=value/0.00000000054
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.00000000054</div>`
    } 
    // end of second value to micrometer

    // start of second value to nanometer
    if ( selectedOption=="kilometer" && firstSelectedOption=="firstnanometer") {
        let value=inputtwo.value 
        let result=value/0.000000000001
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.000000000001</div>`
    }
    if ( selectedOption=="decimeter" && firstSelectedOption=="firstnanometer") {
        let value=inputtwo.value 
        let result=value/0.00000001
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.00000001</div>`
    }  
    if ( selectedOption=="meter" && firstSelectedOption=="firstnanometer") {
        let value=inputtwo.value 
        let result=value/0.000000001
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.000000001</div>`
    } 
    if ( selectedOption=="centimeter" && firstSelectedOption=="firstnanometer") {
        let value=inputtwo.value 
        let result=value/0.0000001
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.0000001</div>`
    } 
    if ( selectedOption=="millimeter" && firstSelectedOption=="firstnanometer") {
        let value=inputtwo.value 
        let result=value/0.000001
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.000001</div>`
    } 
    if ( selectedOption=="micrometer" && firstSelectedOption=="firstnanometer") {
        let value=inputtwo.value 
        let result=value/0.001
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.001</div>`
    } 
    if ( selectedOption=="nanometer" && firstSelectedOption=="firstnanometer") {
        let value=inputtwo.value 
        let result=value
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value remain the same</div>`
    } 
    if ( selectedOption=="mile" && firstSelectedOption=="firstnanometer") {
        let value=inputtwo.value 
        let result=value/0.0000000000006214
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.0000000000006214</div>`
    } 
    if ( selectedOption=="yard" && firstSelectedOption=="firstnanometer") {
        let value=inputtwo.value 
        let result=value/0.000000001094
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.000000001094</div>`
    } 
    if ( selectedOption=="inch" && firstSelectedOption=="firstnanometer") {
        let value=inputtwo.value 
        let result=value/0.0000000394
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.0000000394</div>`
    } 
    if ( selectedOption=="nautical mile" && firstSelectedOption=="firstnanometer") {
        let value=inputtwo.value 
        let result=value/0.00000000000054
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.00000000000054</div>`
    } 
    // end of second value to nanometer


    // start of second value to mile
    if ( selectedOption=="kilometer" && firstSelectedOption=="firstmile") {
        let value=inputtwo.value 
        let result=value/1.609
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1.609</div>`
    }
    if ( selectedOption=="decimeter" && firstSelectedOption=="firstmile") {
        let value=inputtwo.value 
        let result=value/16093.44
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 16093.44</div>`
    }  
    if ( selectedOption=="meter" && firstSelectedOption=="firstmile") {
        let value=inputtwo.value 
        let result=value/1609.344
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1609.344</div>`
    } 
    if ( selectedOption=="centimeter" && firstSelectedOption=="firstmile") {
        let value=inputtwo.value 
        let result=value/160934.4
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 160934.4</div>`
    } 
    if ( selectedOption=="millimeter" && firstSelectedOption=="firstmile") {
        let value=inputtwo.value 
        let result=value/1609344
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1609344</div>`
    } 
    if ( selectedOption=="micrometer" && firstSelectedOption=="firstmile") {
        let value=inputtwo.value 
        let result=value/1609344000
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1609344000</div>`
    } 
    if ( selectedOption=="nanometer" && firstSelectedOption=="firstmile") {
        let value=inputtwo.value 
        let result=value/1609344000000
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1609344000000</div>`
    } 
    if ( selectedOption=="mile" && firstSelectedOption=="firstmile") {
        let value=inputtwo.value 
        let result=value
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value remain the same</div>`  
    } 
    if ( selectedOption=="yard" && firstSelectedOption=="firstmile") {
        let value=inputtwo.value 
        let result=value/1760
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1760</div>`
    } 
    if ( selectedOption=="inch" && firstSelectedOption=="firstmile") {
        let value=inputtwo.value 
        let result=value/63360
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 63360</div>`
    } 
    if ( selectedOption=="nautical mile" && firstSelectedOption=="firstmile") {
        let value=inputtwo.value 
        let result=value/0.869
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.869</div>`
    } 
    // end of second value to mile
    
    // start of second value to yard
    if ( selectedOption=="kilometer" && firstSelectedOption=="firstyard") {
        let value=inputtwo.value 
        let result=value/0.000914
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.000914</div>`
    }
    if ( selectedOption=="decimeter" && firstSelectedOption=="firstyard") {
        let value=inputtwo.value 
        let result=value/9.144
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 9.144</div>`
    }  
    if ( selectedOption=="meter" && firstSelectedOption=="firstyard") {
        let value=inputtwo.value 
        let result=value/0.914
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.914</div>`
    } 
    if ( selectedOption=="centimeter" && firstSelectedOption=="firstyard") {
        let value=inputtwo.value 
        let result=value/91.44
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 91.44</div>`
    } 
    if ( selectedOption=="millimeter" && firstSelectedOption=="firstyard") {
        let value=inputtwo.value 
        let result=value/914.4
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 914.4</div>`
    } 
    if ( selectedOption=="micrometer" && firstSelectedOption=="firstyard") {
        let value=inputtwo.value 
        let result=value/914400
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 914400</div>`
    } 
    if ( selectedOption=="nanometer" && firstSelectedOption=="firstyard") {
        let value=inputtwo.value 
        let result=value/914400000
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 914400000</div>`
    } 
    if ( selectedOption=="mile" && firstSelectedOption=="firstyard") {
        let value=inputtwo.value 
        let result=value/0.000568
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.000568</div>`
    } 
    if ( selectedOption=="yard" && firstSelectedOption=="firstyard") {
        let value=inputtwo.value 
        let result=value
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value remain the same</div>`  
    } 
    if ( selectedOption=="inch" && firstSelectedOption=="firstyard") {
        let value=inputtwo.value 
        let result=value/36
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 36</div>`
    } 
    if ( selectedOption=="nautical mile" && firstSelectedOption=="firstyard") {
        let value=inputtwo.value 
        let result=value/0.000494
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.000494</div>`
    } 
    // end of second value to yard

    // start of second value to inch
    if ( selectedOption=="kilometer" && firstSelectedOption=="firstinch") {
        let value=inputtwo.value 
        let result=value/0.0000254
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.0000254</div>`
    }
    if ( selectedOption=="decimeter" && firstSelectedOption=="firstinch") {
        let value=inputtwo.value 
        let result=value/ 0.254
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by  0.254</div>`
    }  
    if ( selectedOption=="meter" && firstSelectedOption=="firstinch") {
        let value=inputtwo.value 
        let result=value/ 0.0254
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.0254</div>`
    } 
    if ( selectedOption=="centimeter" && firstSelectedOption=="firstinch") {
        let value=inputtwo.value 
        let result=value/2.54
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 2.54</div>`
    } 
    if ( selectedOption=="millimeter" && firstSelectedOption=="firstinch") {
        let value=inputtwo.value 
        let result=value/ 25.4
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by  25.4</div>`
    } 
    if ( selectedOption=="micrometer" && firstSelectedOption=="firstinch") {
        let value=inputtwo.value 
        let result=value/25400
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 25400</div>`
    } 
    if ( selectedOption=="nanometer" && firstSelectedOption=="firstinch") {
        let value=inputtwo.value 
        let result=value/ 25400000
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by  25400000</div>`
    } 
    if ( selectedOption=="mile" && firstSelectedOption=="firstinch") {
        let value=inputtwo.value 
        let result=value/0.00001578
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.00001578</div>`
    } 
    if ( selectedOption=="yard" && firstSelectedOption=="firstinch") {
        let value=inputtwo.value 
        let result=value/ 0.0278
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.0278</div>`
         
    } 
    if ( selectedOption=="inch" && firstSelectedOption=="firstinch") {
        let value=inputtwo.value 
        let result=value
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value remain the same</div>`
    } 
    if ( selectedOption=="nautical mile" && firstSelectedOption=="firstinch") {
        let value=inputtwo.value 
        let result=value/0.00001371
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 0.00001371</div>`
    } 
    // end of second value to inch

    // start of second value to nauticalmile
    if ( selectedOption=="kilometer" && firstSelectedOption=="firstnauticalmile") {
        let value=inputtwo.value 
        let result=value/1.852
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1.852</div>`
    }
    if ( selectedOption=="decimeter" && firstSelectedOption=="firstnauticalmile") {
        let value=inputtwo.value 
        let result=value/ 18520
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 18520</div>`
    }  
    if ( selectedOption=="meter" && firstSelectedOption=="firstnauticalmile") {
        let value=inputtwo.value 
        let result=value/1852
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1852</div>`
    } 
    if ( selectedOption=="centimeter" && firstSelectedOption=="firstnauticalmile") {
        let value=inputtwo.value 
        let result=value/185200
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 185200</div>`
    } 
    if ( selectedOption=="millimeter" && firstSelectedOption=="firstnauticalmile") {
        let value=inputtwo.value 
        let result=value/1852000
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1852000</div>`
    } 
    if ( selectedOption=="micrometer" && firstSelectedOption=="firstnauticalmile") {
        let value=inputtwo.value 
        let result=value/1852000000
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1852000000</div>`
    } 
    if ( selectedOption=="nanometer" && firstSelectedOption=="firstnauticalmile") {
        let value=inputtwo.value 
        let result=value/1852000000000
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1852000000000</div>`
    } 
    if ( selectedOption=="mile" && firstSelectedOption=="firstnauticalmile") {
        let value=inputtwo.value 
        let result=value/1.151
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 1.151</div>`
    } 
    if ( selectedOption=="yard" && firstSelectedOption=="firstnauticalmile") {
        let value=inputtwo.value 
        let result=value/ 0.000494
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by  0.000494</div>`
         
    } 
    if ( selectedOption=="inch" && firstSelectedOption=="firstnauticalmile") {
        let value=inputtwo.value 
        let result=value/72913.386
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value is divided by 72913.386</div>`
    } 
    if ( selectedOption=="nautical mile" && firstSelectedOption=="firstnauticalmile") {
        let value=inputtwo.value 
        let result=value
        firstinput.value=result
        document.getElementById("demo").innerHTML= `<div class="fw-bold">The value remain the same</div>`
    } 
    // end of second value to nauticalmile
}    