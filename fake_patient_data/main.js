//f info
//this program generates random patients for our website demo. For now, the program is hardcoded to generate exactly 25 patients.
//d
//f setup
//console.log("Program Operation Starting:");
let uuid = require("uuid");
//f data generation

function randompatient()//f
{
    let myPatient = {
    "name":randomname(),
    "patientPicture":"TODO patient picture",
    "dob":randomdateofbirth(),
    "insuranceNumber":randominsurancenumber(),
    "height":randomheight(),
    "weight":randomweight(),
    "bloodPreasure":randombloodpreasure(),
    "temperature":randomtemperature(),
    "oxygenSatruation":randomoxygensaturation(),
    "uuid":randomUUID(),
    "address":randomaddress(),
    "currentMedications":randommedications(),
    "familyHistory":randomfamilyhistory(),
    "currentlyEmployed":randomemploymentstatus(),
    "currentlyInsured":randominsurancestatus(),
    "icdHealthCodes":randomicdcodes(),
    "allergies":randomallergies(),
    "visits":[]
    };
    return(myPatient);
}
//d
//f configuration data!
let datarange = {
    "names":{
        "firstnames":["Tim", "Simmons", "Laura", "Mary", "Vi", "Mestique", "David", "Sarah", "Lilly"],
        "lastnames":["Baker", "Smith", "Hansen", "Rutherford", "Garrowson", "Upal", "Miller"]
    },
    "dateofbirth":{
        "months":[1,2,3,4,5,6,7,8,9,10,11,12],
        "days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],
        "years":["70","74","78","79","83","86","88","90","95","96","00","02","05","08","11","15","18"]
    },
    "medications":["tylenol", "albuterol", "insulin","spironolactone", "ritalin","meletonin"],
    "employment":["employed","unemployed"],
    "insurance":["Kaiser", "John Muir", "Uninsured", "Stanford"],
    "icdcodes":["ICDCODE1","ICDCODE2","ICDCODE3","ICDCODE4"],
    "allergies":["pollen","latex", "milk", "egg white", "peanut", "dog","cat"]
}
//d
//f specific property generation functions!
//These are the data generation funcitons. They include all the configurations and functions used for generating a single patient.
function randomname()//f
{
    return(randomfirstname()+" "+randomlastname());
}
//d
function randomfirstname()//f 
{
    return(randomelement(datarange.names.firstnames));
}
//d
function randomlastname()//f
{
    return(randomelement(datarange.names.lastnames));
}
//d
function randomface()//f
{
    return "Empty Placeholder";
}
//d
function randomdateofbirth()//f 
{
    return(
        randomelement(datarange.dateofbirth.months)+
        "/"+
        randomelement(datarange.dateofbirth.days)+
        "/"+
        randomelement(datarange.dateofbirth.years)
    );
}
//d
function randominsurancenumber()//f 
{
    return randominteger(10000000,99999999);
}
//d
function randomheight()//f 
{
    return(randominteger(4,7)+"\'"+randominteger(0,12)+"\'");
}
//d
function randomweight()//f 
{
    return((randominteger(900,2000)/10).toString());
}
//d
function randombloodpreasure()//f
{
    return(randominteger(79,100).toString());
}
//d
function randomtemperature()//f 
{
    return((randominteger(960,980)/10).toString());
}
//d
function randomoxygensaturation()//f
{
    return randominteger(95,100);
}
//d
function randomUUID()//f 
{
    return(uuid.v4());
}
//d
function randomaddress()//f 
{
    return("TODO adress");
}
//d
function randommedications()//f  
{
    return(randomselection(datarange.medications));
}
//d
function randomfamilyhistory()//f generate family history
{
    return("TODO family history");
}
//d
function randomemploymentstatus()//f
{
    return(randomelement(datarange.employment));
}
//d
function randominsurancestatus()//f  
{
    return(randomelement(datarange.insurance));
}
//d
function randomicdcodes()//f
{
    return(randomselection(datarange.icdcodes));
}
//d
function randomallergies()//f  
{
    return(randomselection(datarange.allergies));
}
//d
//d
//f generic generation functions!
function randomelement(myArray) //f
// gets a single element from an array
{
   return(myArray[Math.floor(Math.random()*myArray.length)]);
}
//d
function randominteger(First,Last) //f
// generates a random integer from First (inclusive) to Last (exclusive)
{
    return(First+Math.floor(Math.random()*(Last-First)));
}
//d
function randomselection(myArray)//f
{
    let count = 0;
    let selection = [];
    while(0==randominteger(0,count+2))
    {
        selection.push(randomelement(myArray));
        count +=1;
    }
    return(selection);
}
//d
//d

//d
//d
//f program
let patientArray = []
for(let i=0;i<25;i++){
    patientArray.push(randompatient());
}
console.log(JSON.stringify(patientArray));
//d


