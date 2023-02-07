const counters = document.querySelectorAll('.counter');

counters.forEach((counter)=>
{
    counter.innerHTML = 0;


    const updateCounter = () =>{
        const finalCounter = +counter.getAttribute('data-target');
        // console.log(finalCounter);

        const startingCounter = Number(counter.innerHTML);

        const final = finalCounter/100;

        if(startingCounter < finalCounter)
        {
            counter.innerHTML = `${startingCounter + final}`;

            setInterval(updateCounter,100);
        }else{
            counter.innerHTML = finalCounter;
        }
    }


    updateCounter();

})