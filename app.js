const susRef = document.querySelector('.sus')

function getSuscriptionStatus (){
  return new Promise ((resolve, reject) => {
    resolve ('VIP')
  })
}

function getVideo(suscriptionStatus){
  return new Promise ((resolve, reject) => {
    if (suscriptionStatus === "VIP"){
      resolve ('show video')
    }
    if (suscriptionStatus === "FREE") {
      resolve ('show trailer')
    }
    else{
      reject('no video')  
    }

  })
}

async function main(){
const status = await getSuscriptionStatus ()
susRef.innerHTML = status
console.log(await getVideo(status))

}

main ()