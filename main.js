
	const play = function(keyCode){

      //select corresponding audio
      const audio = document.querySelector(`audio[data-key = "${keyCode}"]`)
      //select corresponding key
      const key = document.querySelector(`.key[data-key = "${keyCode}"]`)

      if (!audio){
        return //stop the function from running all together
      }
      audio.currentTime = 0 // rewind to the start
      audio.play()
      key.classList.add('playing')
	}
	
	//Attach an event listener to the window
    window.addEventListener('keydown', function(e){
		play(e.keyCode)
	}
)

    //create the removeTransition function to remove the added class
    const removeTransition = function(e){
      if (e.propertyName !== 'transform') //skip if not a transform
        return
      this.classList.remove('playing')
    }

    //select every key on the page to listen on each one
    const keys = document.querySelectorAll('.key')
    keys.forEach(function(key){
		console.log(key)
      key.addEventListener('transitionend', removeTransition)
	  key.addEventListener('click', function(){
		play(key.getAttribute("data-key"))
	  })
    })

