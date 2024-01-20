chrome.action.onClicked.addListener((tab)=>{
  chrome.windows.create({
    type: "popup",
    url: "extension://popup.html"
  })
})
