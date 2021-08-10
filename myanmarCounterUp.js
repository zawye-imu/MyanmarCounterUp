class myanmarCounterUp{

    // Work the main function on calling the class
    constructor(start,target,time)
    {

        let speed = time/ target;
        let obj= document.getElementsByClassName("mm-counter")[0];
        let ele = null;    
        let intval=setInterval(()=>{
            ele=this.convert(start);
    
            obj.innerHTML = ele;
            start++;
            if(start == target)
            {
                clearInterval(intval);
            }
        },speed)
    }

    // Associating each english numbers to myanmar numbers and return it.
    convert(i)
    {
        var data = {"1":"၁", "2":"၂", "3":"၃","4":"၄","5":"၅","6":"၆",
        "7": "၇","8":"၈","9":"၉","0":"၀"};

        var number_array = String(i).split("");

        var mm_number = '';

        for(let i=0;i < number_array.length;i++)
        {
            for(const item in data)
            {
                if(number_array[i] == item)
                {
                    mm_number= mm_number + data[item]
                    
                }
            }
        }

        return mm_number;
    }



}
