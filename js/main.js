// //The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

// document.querySelector('button').addEventListener('click', run)
// // let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

// function  run(){
//     let input = document.querySelector('input').value
//     if(input.includes(" ")){
//       input = input.replace(' ', '%20')
//     }
//     //for(let i=0; i< input.split('').length; i++){
//     //   if(input.includes(numbers[i])) {
//     //     alert("I can't make that >:(");
//     //     return false;
//     //   }
//     // }
  
//     console.log(input)
//     const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+input
    
//     fetch(url)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       console.log(data)
//       console.log(data.drinks[0])
//       document.querySelector('h3').innerHTML = data.drinks[0].strDrink
//       document.querySelector('img').src = data.drinks[0].strDrinkThumb
//       document.querySelector('p').innerHTML = data.drinks[0].strInstructions
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//         alert(`${input} is not a drink :(`)
//     });
// }
// let drinkLength = data.drinks.length 
// let counter = 0
// setInterval(() =>{
//   let index = counter % drinkLength
// })





//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', run)

let loopy;
function  run(){
    clearInterval(loopy)
    let input = document.querySelector('input').value
    if(input.includes(" ")){
      input = input.replace(' ', '%20')
    }

    console.log(input)
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+input
    
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      
      console.log(data)
      let drinkLength = data.drinks.length
      let counter = 0
      
      loopy = setInterval( () => {
        let index = counter % drinkLength;
        document.querySelector('h3').innerHTML = data.drinks[index].strDrink
        document.querySelector('img').src = data.drinks[index].strDrinkThumb
        document.querySelector('p').innerHTML = data.drinks[index].strInstructions
        console.log(data.drinks[index].strDrink)
        ++counter;
      }, 3000)
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert(`${input} is not a drink :(`)
    });
}
