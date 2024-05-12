let itemsArray = [
   'Газонокосарка 43',
   'Електричний тример 110',
   'Електрична газонокосарка 32',
   'Акумуляторний оприскувач 12 N',
]

//Отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items");

//Перевірка існування блоку
if (itemsDiv) {
   //Створення блоків по кількості елементів масиву
   itemsArray.forEach((item,index) => {
       // console.log(item)
       //Виводимо на веб сторінку елемент масиву в блок з класом item
       itemsDiv.innerHTML +=
           `
       <div class = "item">
     <h2>Товар №${index}</h2>
     <p>${item}</p>
     </div>
     `
   })

} else {
   //Повідомлення про не знайдений блок
   console.log('Блок товарів не знайдено')

}

//Виведення едементів масиву
itemsArray.forEach((item) => {
   console.log(item)
})
//Виведення елементів відсортованого масиву
// itemsArray.sort().forEach((item, index) => {
//     console.log(index + '-й елемент:',item)
// })



// // //Виведення в консоль масиву
// // console.log (itemsArray)
// //Сортування масиву
// itemsArray = itemsArray.sort()

// //Виведення в консоль номерів та значень елементів масиву
// for (let i = 0; i < itemsArray.length; i++){
//     console.log(i +'-й елемент:',itemsArray[i])
// }