
  function wakeUp(cb){
   console.log('wakeup process');
   setTimeout(()=>{
   cb( 'wake up done')
},Math.floor(Math.random() * (3000 - 1000)) + 1000)

}

function takeASHOWER(cb){
   console.log('shower process');
   setTimeout(()=>{
      cb('shower done')
   },Math.floor(Math.random() * (3000 - 1000)) + 1000)

}
function breakfast(cb){
   console.log('breakfast process');
   setTimeout(()=>{
      cb('breakfast done')
   },Math.floor(Math.random() * (3000 - 1000)) + 1000)

}

function runPc(cb){
   console.log('run pc');
   setTimeout(()=>{
      cb('run  PC done')

   },Math.floor(Math.random() * (3000 - 1000)) + 1000)

}

function homeWork (cb){
   console.log('homework process');
   setTimeout(()=>{
      cb(' homework done')
   },Math.floor(Math.random() * (3000 - 1000)) + 1000)

}

function chill (cb){
   console.log(' chill process');

   setTimeout(()=>{
      cb('chill done')
   },Math.floor(Math.random() * (3000 - 1000)) + 1000)

}


wakeUp(data=>{
   console.log(data);

   takeASHOWER(data=>{
      console.log(data);

      breakfast(data=>{
         console.log(data);

         runPc(data=>{
            console.log(data);

            homeWork(data=>{
               console.log(data);

               chill(data=>{
                  console.log(data);
               })

            })

         })

      })

   })

})








