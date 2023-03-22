const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")
const tabsContent = document.querySelectorAll(".tabcontent")

const hideTabsContent = () => {
    tabsContent.forEach((item) => {
        item.style.display = "none"
    })
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
}

const showTabContent = (i = 0) => {
    tabsContent[i].style.display = "block"
    tabs[i].classList.add("tabheader__item_active")
}

hideTabsContent()
showTabContent()


tabsParent.addEventListener("click", (e) => {
    const target = e.target


    if(target.classList.contains("tabheader__item")){

        tabs.forEach((item, i) => {
            if(item === target){
                hideTabsContent()
                showTabContent(i)
            }
        })
    }
})



const modal = document.querySelector(".modal")
const openModalBtn = document.querySelector(".btn_white")
const openModalDark = document.querySelector('.open-modal-dark');
const closeModalBtn = document.querySelector(".modal__close")

const openModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}

openModalBtn.addEventListener("click", openModal)

const closeModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ''
}

closeModalBtn.addEventListener("click", closeModal)

let tabCounter = 0;

function autoFunctionSlider() {
  if (tabCounter === 4) {
        tabCounter = 0;
  }
  hideTabContent(tabCounter);
  showTabContent(tabCounter);
  tabCounter++;
}

let autoSlider = setInterval(autoFunctionSlider, 1500);

const tabsParents = document.querySelector('.tabheader__items');

tabsParent.addEventListener('click', (e) => {
  clearInterval(autoSlider);

  setTimeout(() => {
    autoSlider = setInterval(autoFunctionSlider, 1000);
  }, 5000);

  if (e.target.classList.contains('tabheader__item')) {
    const tabs = document.querySelectorAll('.tabheader__item');
    const target = e.target

    tabs.forEach((item, i) => {
      if (target === item) {
        hideTabContent();
        showTabContent(i);
        tabCounter = i;
      }
    });
  }
});

function hideTabContent() {
  const tabsContent = document.querySelectorAll('.tabcontent');

  tabsContent.forEach((item) => {
    item.classList.add('hide');
    item.classList.remove('show', 'fade');
  });
}

function showTabContents(i) {
  const tabsContent = document.querySelectorAll('.tabcontent');

  tabsContent[i].classList.add('show', 'fade');
  tabsContent[i].classList.remove('hide');
}


openModalBtn.addEventListener('click', openModal);
  
  
closeModalBtn.addEventListener('click', closeModal);

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollHeight = document.body.scrollHeight;
    if (scrollPosition >= scrollHeight - windowHeight) {
      openModal();
    }
});

  
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
});

closeModalBtn.addEventListener('click', closeModal);


  
