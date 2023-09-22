const numbuttons=document.querySelectorAll('[num]');
const opbutons=document.querySelectorAll('[operation]');
const eqbutton=document.querySelector('[eq]');
const delbutton=document.querySelector('[del]');
const acbutton=document.querySelector('[clr]');
const firstoptext=document.querySelector('[fnum-op]');
const secondoptext=document.querySelector('[snum-op]');
console.log(12/3);
class Calculator
{
    constructor(firstoptext,secondoptext)
    {
        this.firstOperatorText=firstoptext;
        this.secondOperatorText=secondoptext;
        this.clear();
    }
    clear ()
    {
        this.firstOperator='';
        this.secondOperator='';
        this.operation=undefined;
    }
    delete()
    {
        if (this.firstOperator='') return 
        this.firstOperator=this.firstOperator.slice(0,this.firstOperator.length-1)
    }
    appendNumber(Number)
    {
        if (Number=='.' && this.firstOperator.indexOf('.')!==-1)
        {
            this.firstOperator+='';
        }
        else  this.firstOperator+=Number.toString();
        
    }
    chooseOperation(operation)
    {
        if (this.firstOperator==='') return
        if (this.secondOperator!=='') 
        {
            this.compute();
        }
        this.operation=operation;
        this.secondOperator=this.firstOperator;
        this.firstOperator='';
        
    }
    calculate()
    {
        let computation;
        let f=parseFloat(this.firstOperator);
        let s=parseFloat(this.secondOperator);
        if (isNaN(f) || isNaN(s)) return 
        switch (this.operation)
        {
            case '+':
                computation=parseFloat(this.firstOperator)+parseFloat(this.secondOperator)
                break
            case '-':
                computation=parseFloat(this.firstOperator)-parseFloat(this.secondOperator)
                break
            case '÷':
                computation=parseFloat(this.firstOperator)/parseFloat(this.secondOperator)
                break
            case '*':
                computation=parseFloat(this.firstOperator)*parseFloat(this.secondOperator)
                break 
            default: return
            
        }
        this.firstOperator=computation;
        this.operation=undefined;
        this.secondOperator='';
    }
    update()
    {
        this.firstOperatorText.innerText=this.firstOperator;
        if (this.operation!=null)
        {
            this.secondOperatorText.innerText=this.secondOperator+this.operation;
        }
        else this.secondOperatorText.innerText='';
        
    }
}
const calculator=new Calculator(firstoptext,secondoptext);
numbuttons.forEach(
    button=>
    {
        button.addEventListener('click',()=>
        {
        calculator.appendNumber(button.innerText);
        calculator.update();
        })
    }
)
opbutons.forEach(
    button=>
    {
        button.addEventListener('click',()=>
        {
        calculator.chooseOperation(button.innerText);
        calculator.update();
        })
    }
)
delbutton.addEventListener('click',()=>
{
    calculator.delete();
    calculator.update();
})
eqbutton.addEventListener('click',()=>
{
    calculator.calculate();
    calculator.update();
})
acbutton.addEventListener('click',()=>
{
    calculator.clear();
    calculator.update();
})