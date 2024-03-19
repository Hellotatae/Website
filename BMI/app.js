const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value

    if(weight === "" || isNaN(weight)){
        return result.innerHTML = "Insert your weight"
    }else if(height === "" || isNaN(height)){
        return result.innerHTML = "Insert your height"
    }else{
        //cm => m
        height = height/100
        let bmi = (weight/Math.pow(height,2)).toFixed(2)
        //บอกเกณฑ์
        if(bmi<18.5){
            showResult(bmi,"Underweight","blue")
        }else if(bmi>=18.5 && bmi<=24.9){
            showResult(bmi,"Normal Weight","green")
        }else if(bmi>=25 && bmi<=29.9){
            showResult(bmi,"Overweight","red")
        }else{
            showResult(bmi,"Obesity","purple")
        }
    }
})

function showResult(bmi,message,color){
    result.style.backgroundColor = color
    return result.innerHTML = `ผลลัพธ์ = ${bmi} (${message})`
}