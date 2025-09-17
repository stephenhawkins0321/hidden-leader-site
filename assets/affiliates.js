
// Edit just this file to plug in your real affiliate links.
// Example: LINKS['adjustable-dumbbells'] = 'https://www.amazon.com/dp/ASIN?tag=YOURTAG-20';
window.LINKS = {
  "adjustable-dumbbells": "https://www.amazon.com/?tag=Stephen0321-20",
  "pullup-bar": "https://www.amazon.com/?tag=Stephen0321-20",
  "resistance-bands": "https://www.amazon.com/?tag=Stephen0321-20",
  "jump-rope": "https://www.amazon.com/?tag=Stephen0321-20",
  "meal-prep-containers": "https://www.amazon.com/?tag=Stephen0321-20",
  "study-bible": "https://www.amazon.com/?tag=Stephen0321-20",
  "journal": "https://www.amazon.com/?tag=Stephen0321-20",
  "dayspring-devotionals": "https://shrsl.com/YOUR-DAYSPRING-ID",
  "dayspring-cards": "https://shrsl.com/YOUR-DAYSPRING-ID",
  "dayspring-wall-art": "https://shrsl.com/YOUR-DAYSPRING-ID"
};

// Finds <a data-aff="slug"> and swaps href with your link from LINKS.
(function(){
  function swapLinks(){
    for(const a of document.querySelectorAll('a[data-aff]')){
      const slug = a.getAttribute('data-aff');
      const url = window.LINKS && window.LINKS[slug];
      if(url){ a.href = url; a.target = "_blank"; a.rel = "noopener"; }
    }
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', swapLinks);
  } else { swapLinks(); }
})();
