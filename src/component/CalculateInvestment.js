import data from './initial.json'

export const CalculateInvestment = (dates,amount) => {
    var initailNAV, finalNAV;
        data.map((data) => {
            if(data.Date == dates.frmdt){
                initailNAV = data.NAV;
            }
            else if(data.Date == dates.todt){
                finalNAV = data.NAV;
            }
        })
        if(initailNAV !== undefined && finalNAV !== undefined){
            return ((amount/initailNAV)*finalNAV).toFixed(2);
        }
        else if(initailNAV == undefined) return "Selected start date does not have NAV value"
        else return "Selected end date does not have NAV value"

}
