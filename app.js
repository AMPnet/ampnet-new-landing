$(document).ready(function() {
    $(document).scroll(function() {
        var nav = $(".my-navbar")
        nav.toggleClass('scrolled', $(this).scrollTop() > nav.height())
    })
    
})

window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}