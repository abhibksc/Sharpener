



export const useHandleEdgeCases = ()=>{

    if (e.target[0].value === '' || e.target[1].value === '' || e.target[2].value === '') {
        alert("Please fill in all required fields.")
        return;
    }

    if (e.target[3].value === '') {
        e.target[3].value = 0;
    }
    if (e.target[4].value === '') {
        e.target[4].value = 0;
    }
    if (e.target[5].value === '') {
        e.target[5].value = 0
    }
    
}