function tworzeRestauracje() {
    const obsługaZamowien = {
        przyjmij: (przyj) => {
            console.log('przyj',przyj)
            
        },

        wydanie: (wyda) => {
            console.log('wyda',wyda)
            
        },
    }
    
    return {Obsluga : () => obslugaZamowien
    };
    
}

// export default tworzeRestauracje ;
module.exports = tworzeRestauracje;