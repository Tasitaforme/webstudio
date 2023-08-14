//1-й варіант
// const items = document.querySelectorAll('.projects-list .project-text');
// const buttons = document.querySelectorAll('.filter-btn');

// function defaultBtnsItems() {
//   buttons.forEach(button => {
//     button.classList.remove('isActive');
//     button.removeAttribute('disabled');
//   });
//   items.forEach(item => {
//     item.closest('li').classList.remove('is-hidden');
//   });
// }

// function disableBtn(btn) {
//   btn.classList.toggle('isActive');
//   if (btn.classList.contains('isActive')) {
//     btn.setAttribute('disabled', 'disabled');
//   }
// }

// const allBtn = document.getElementById('allBtn');

// allBtn.addEventListener('click', filterAll);

// function filterAll() {
//   defaultBtnsItems();
//   disableBtn(allBtn);
// }

// const webSiteBtn = document.getElementById('webSiteBtn');

// webSiteBtn.addEventListener('click', filterItemWeb);

// function filterItemWeb() {
//   defaultBtnsItems();
//   items.forEach(item => {
//     if (item.innerHTML.toLowerCase() !== 'web site') {
//       item.closest('li').classList.toggle('is-hidden');
//       disableBtn(webSiteBtn);
//     }
//   });
// }

// const appBtn = document.getElementById('appBtn');

// appBtn.addEventListener('click', filterItemApp);

// function filterItemApp() {
//   defaultBtnsItems();
//   items.forEach(item => {
//     if (item.innerHTML.toLowerCase() !== 'app') {
//       item.closest('li').classList.toggle('is-hidden');
//       disableBtn(appBtn);
//     }
//   });
// }

// const designBtn = document.getElementById('designBtn');

// designBtn.addEventListener('click', filterItemDesign);

// function filterItemDesign() {
//   defaultBtnsItems();
//   items.forEach(item => {
//     if (item.innerHTML.toLowerCase() !== 'design') {
//       item.closest('li').classList.toggle('is-hidden');
//       disableBtn(designBtn);
//     }
//   });
// }

// const marketing = document.getElementById('marketing');

// marketing.addEventListener('click', filterItemMarketing);

// function filterItemMarketing() {
//   defaultBtnsItems();
//   items.forEach(item => {
//     if (item.innerHTML.toLowerCase() !== 'marketing') {
//       item.closest('li').classList.toggle('is-hidden');
//       disableBtn(marketing);
//     }
//   });
// }

// 2-й варіант зі switch
const items = document.querySelectorAll('.projects-list .project-text');
const buttons = document.querySelectorAll('.filter-btn');

function defaultBtnsItems() {
  buttons.forEach(button => {
    button.classList.remove('isActive');
    button.removeAttribute('disabled');
  });
  items.forEach(item => {
    item.closest('li').classList.remove('is-hidden');
  });
}

function disableBtn(btn) {
  btn.classList.toggle('isActive');
  if (btn.classList.contains('isActive')) {
    btn.setAttribute('disabled', 'disabled');
  }
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => filterItems(btn.id));
});

function filterItems(id) {
  defaultBtnsItems();
  switch (id) {
    case 'allBtn':
      break;
    case 'webSiteBtn':
      items.forEach(item => {
        if (item.innerHTML.toLowerCase() !== 'web site') {
          item.closest('li').classList.toggle('is-hidden');
        }
      });
      break;
    case 'appBtn':
      items.forEach(item => {
        if (item.innerHTML.toLowerCase() !== 'app') {
          item.closest('li').classList.toggle('is-hidden');
        }
      });
      break;
    case 'designBtn':
      items.forEach(item => {
        if (item.innerHTML.toLowerCase() !== 'design') {
          item.closest('li').classList.toggle('is-hidden');
        }
      });
      break;
    case 'marketing':
      items.forEach(item => {
        if (item.innerHTML.toLowerCase() !== 'marketing') {
          item.closest('li').classList.toggle('is-hidden');
        }
      });
      break;
  }
  disableBtn(document.getElementById(id));
}
