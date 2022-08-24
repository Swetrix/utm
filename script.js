// Using old-styled JS for better browser compatibility
var prefix = 'https://'
var url = ''
var params = {}
var resultNode = document.getElementById('result')

function copyResultToCB() {
  console.log('oncopy')
  resultNode.select()
  resultNode.setSelectionRange(0, 99999)
  navigator.clipboard.writeText(resultNode.value)

  const copyBtn = document.getElementById('copy-btn')
  const copyBlock = document.getElementById('copy-block')

  copyBlock.classList.remove('hidden')

  setTimeout(function() {
    copyBlock.classList.add('hidden')
  }, 500)
} 

function buildResult() {
  if (!url) {
    return
  }

  var newURL = new URL(prefix + url)
  for (var param in params) {
    if (params[param]) {
      newURL.searchParams.set(param, params[param])
    }
  }
  resultNode.value = newURL.toString()
}

function onEditURL(event) {
  url = event.target.value
  buildResult()
}

function onChangePrefix(event) {
  prefix = event.target.value
  buildResult()
}

function onChangeParams(param) {
  return function(event) {
    params[param] = event.target.value
    buildResult()
  }
}
