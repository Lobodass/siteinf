
let itemsArray = [
    {
        email: "23a_bam@liceum.ztu.edu.ua",
        group: "10-A 1",
        last_name_first_name: "Borovyi Artur",
        game_title: "Grandpa vs Mosquitoes",
        game_github_link: "https://github.com/23a-bam/Phaser2ndGame",
        github_pages_link: "https://23a-bam.github.io/Phaser2ndGame/",
        google_drive_documentation_folder_link: "https://drive.google.com/drive/folders/1A12wx0lfNj7Aef9KAw2CFMaDwhWM8V4Q?usp=sharing",
        survey_form_link: "https://forms.gle/sS7tuJWJuGDjmHB98",
        game_market_github_link: "https://github.com/23a-bam/GameMarket_Borovyi",
        game_market_github_pages_initial_design_link: "https://23a-bam.github.io/GameMarket_Borovyi/",
        market_pages_4_products_link: "https://23a-bam.github.io/GameMarket_Borovyi/market.html",
        game_market_final_page_link: "https://23a-bam.github.io/GameMarket_Borovyi/market.html",
        author_photo: "Лещенко.jpg",
        game_photo: "https://example.com/game_photo.jpg"
      }
]

let itemsDiv = document.getElementById("items");


if (itemsDiv) {
   
   itemsArray
   .forEach((item, index) => {
      
       itemsDiv.innerHTML += 
       `
       <div class="item">
       <!-- Блок назва товару -->
       <div class="game-title">${item.game_title}</div>
       <!-- Блок зображення товару -->
       <div class="item-image"> 
           <img src="imgg/${item.author_photo}" class="item-image">
       </div>
       <!-- Блок з оплатою частинами -->
       <div class="parts-pay">
           <div> <img src="img/mono-lapka.png" alt="">${item.k}</div>
           <div> <img src="img/pb.png" alt="">${item.k}</div>
       </div>
       <!-- Блок ціни -->
       <div class="price">
           <div> <span> ${item.k}</span><sup></sup></div>
           <div> <span> ${item.gk}</span><sup></sup></div>
       </div>
       <!-- Блок бонусної ціни -->
       <div class="price bonus">
           <div>ціна за купоном</div>
           <div><span> ${item.price_coupon}</span><sup></sup></div>
       </div>
   </div>
   
       `
   })
} else {
   
   console.log('Блок товарів не знайдено')
}

