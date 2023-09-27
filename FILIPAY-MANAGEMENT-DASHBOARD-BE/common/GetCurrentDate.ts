import moment from 'moment';
export function GetCurrentDateSTR() : string {
try{
    const DateNow = moment();

    return DateNow.format('ddd MMM-DD-YYYY, hh:mm A');

}catch(e){
    return "Error in getting the current date: "+e;
}
   
}

export function GetCurrentDate() : moment.Moment{

    return moment();

}