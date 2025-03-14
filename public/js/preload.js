// Any scripts that need to be preloaded in advance, like ads or analytics

// UV Service Worker

// Font Awesome
const fa = document.createElement('link')
fa.href = 'https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css'
fa.rel = 'stylesheet'
fa.type = 'text/css'
document.head.appendChild(fa)
function startTime() {
  const today = new Date();
  document.getElementById('time').innerHTML =  today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true})
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

// CSS Scripts

const hover = document.createElement('link')
hover.href = 'https://cdn.jsdelivr.net/gh/ianlunn/hover/css/hover-min.css'
hover.rel = 'stylesheet'
document.head.appendChild(hover)

window.dataLayer = window.dataLayer || []
function gtag() {
  dataLayer.push(arguments)
}
gtag('js', new Date())


if (/debug/.test(window.location)) {
  console.log('Debug mode enabled')
  var eruda = document.createElement('script')
  eruda.src = 'https://cdn.jsdelivr.net/npm/eruda'
  document.head.append(eruda)

  eruda.onload = () => {
    eruda.init()
  }
}


const swAllowedHostnames = ['localhost', '127.0.0.1']

async function registerSW() {
  console.log('Starting registration...')
  if (location.protocol !== 'https:' && !swAllowedHostnames.includes(location.hostname)) throw new Error('Service workers cannot be registered without https.')

  if (!navigator.serviceWorker) throw new Error("Your browser doesn't support service workers.")

  await navigator.serviceWorker
    .register('sw.js', {
      scope: __uv$config.prefix
    })
    .then(() => {
      console.log('Registered!')
    })
}

registerSW()
setTransport("epoxy");

