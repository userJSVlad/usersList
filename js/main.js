function createNewPeople() {
   let adress = 'https://randomuser.me/api/';
   fetch(adress).then(
      (res) => {
         return res.json()
      }
   ).then((data) => {
      let usersBox = document.querySelector('.our__users')
      let partOfName = data.results[0].name
      let picture = data.results[0].picture.medium
      usersBox.innerHTML += `
      <div class="all-users">
      <div class="all__users-pict">
               <img
                  src="${picture}"
                  alt="" class="all__users-foto">
            </div>
            <div class="all__users-back">
               <div class="all__users-text">Hi, my name is</div>
               <div class="all__users-name">${partOfName.title} ${partOfName.first} ${partOfName.last}</div>
            </div>
      </div>  
      `
   })
}

let scrollElement = () => {
   let windowScrol = window.scrollY;
   let endPage = document.documentElement.scrollHeight - window.innerHeight

   if (windowScrol === endPage) {
      cicleUsers();
   }

}
window.addEventListener('scroll', scrollElement)
let cicleUsers = () => {
   for (let i = 0; i < 12; i++) {
      createNewPeople();
   }
}

cicleUsers();