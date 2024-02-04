//ფუნქციები.

//ფუნქციები არსებობენ ორი ტიპის.
//return/void ფუნქციები.

//ფუნქციის განმარტება:
   //ფუნქცია წარმოადგენს ცალკე გატანილ კოდს. რომელიც არ ამოქმედდება
   //მანამ სანამ არ გამოვიძახებთ მას.

//void ტიპის ფუნქციები.

//ფუნქციის დეკლარაცია (declaration) (გამოცხადება)

function logger(){ //void ტიპის ფუნქცია
    //სივრცე სადაც იწერება ლოგიკა, თუ რა უნდა ამოქმედდეს.
    console.log("hello from logger!");
}

//ფუნქციის გამოძახება
logger();


//პარამეტრები (parameters) დამატებითი ცვლადები არგუმენტები (arguments//)

function logError(msg){
    console.error(`Log Error: ${msg}`);
}

//გამოვიძახოთ პარამეტრიანი ფუნქცია
logError("Unable to connect to server");
logError("user not found");

function LogDetailedError(msg, line, server){
    console.log(`Error: ${msg} on Line: ${line} on server: ${server}`);
}

LogDetailedError("Unable To Connect To Server", 37, "167:00:00:88" );

//return ტიპის ფუნქციები
function returnError(msg){
    return `Error: ${msg}`;
}

console.log(returnError("Unable To Connect To Server"));
document.write(returnError("Unable To Connect To Server"));

function valueGetter(){
    //ამოვიღოთ მნიშვნელობა ინფუთიდან
    //ინფუთდან მნიშვნელობის ამოსაღებად გვინდა მისი ვალუე მნიშვნელობა
    let input = document.getElementById("name-input").value;
    alert(input);

}


const _baseUrl = "https://rentcar.webwide.ge/api/Car/";

//როდესაც ამ ელემენტს წამოვიღებთ შეგვეძლება მის შიგნით გამოვიტანოთ ნებისმიერი ინფორმაცია.
const _resultDiv = document.getElementById("result-container");

function getById(){
    let id = document.getElementById("get-id").value;
    let _formedUrl = _baseUrl + id;
    //გადავცეთ მისამართი რასაც უნდა მიაკითხოს სერვერზე
    fetch(_formedUrl, {
        method: "GET",
    })

    .then(response => response.json())
    .then((car) => {

//გავაკეთოთ რენდერინგი ჩვენი მონაცემების
renderResults(car);

    })
}

//რენდერინგის ფუნქციამ უნდა დაარენდეროს ყველა ტექსტი სხვადასხვა ფერით.
function renderResults(car){
    _resultDiv.innerHTML = `
    <h1 style="color: red;">${car.brand}</h1>
    <h2 style="color: blue;">${car.model}</h2>
    <h3 style="color: green;">${car.year}</h3>
    <h4 style="color: yellow;">${car.price}</h4>
    `
}