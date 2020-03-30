// var paywall = require("./lib/paywall");
// setTimeout(() => paywall(12345678), 5000);

require("component-responsive-frame/child");

const rows = document.querySelectorAll(".basic-info");

rows.forEach(function(row) {
	row.addEventListener("click", function(e) {
		if (this.classList.contains("collapsed")) {
			this.classList.remove("collapsed");
			this.classList.add("expanded");
		} else {
			this.classList.remove("expanded");
			this.classList.add("collapsed");
		}

		let question = this.dataset.question;
		let answer = document.querySelector("[data-answer='" + question + "']");

		if (answer.classList.contains("hidden")) {
			answer.classList.remove("hidden");
			answer.classList.add("shown");
		} else {
			answer.classList.remove("shown");
			answer.classList.add("hidden");
		}
	});
});