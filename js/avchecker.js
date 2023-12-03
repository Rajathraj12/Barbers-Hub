window.addEventListener("load", function () {
    const form = document.getElementById('booking-form');
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
            method: 'POST',
            action: "https://script.google.com/macros/s/AKfycbwkw-xhaPIWWBhV4TV8qb6XZCf_jK1eifFwyETsjnrCkM4x9ZMOmQnn33CJre0l1XDH/exec",
            body: data,
        })
            .then(() => {
                alert("Success!");
            })
    });
});
