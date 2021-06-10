function hello() {
  chrome.tabs.executeScript({
    file: 'deleteShop.js'
  }); 
}

document.getElementById('clickme').addEventListener('click', hello);

console.log(window.location.href);
