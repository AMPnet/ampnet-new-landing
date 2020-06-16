$(document).ready(function () {
	$(document).scroll(function () {
		var nav = $(".my-navbar")
		nav.toggleClass('scrolled', $(this).scrollTop() > nav.height())
	})

	var myform = $("form#contact-form");
	myform.submit(function (event) {
		event.preventDefault();

		// Change to your service ID, or keep using the default service
		var service_id = "default_service";
		var template_id = "request_quote";

		myform.find("button").text("Sending...");
		emailjs.sendForm(service_id, template_id, myform[0])
			.then(function () {
				alert("Sent!");
				myform.find("button").text("Send");
			}, function (err) {
				alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
				myform.find("button").text("Send");
			});
		return false;
	});

})

window.onload = function () {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}

