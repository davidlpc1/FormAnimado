const $btnLogin = document.querySelector(".btn-login")
const $form = document.querySelector("form")

$btnLogin.addEventListener('click', event => {
    event.preventDefault();

    const fields = [...document.querySelectorAll(".input-block input")];

    fields.forEach(field => {
        if (field.value === "") {
            $form.classList.add("validate-error");
            navigator.vibrate(200);
        }
    });

    const formError = document.querySelector(".validate-error");
    if (formError) {
        formError.addEventListener("animationend", event => {
            if (event.animationName === "vibrar") {
                formError.classList.remove("validate-error");
            }
        });
    } else {
        $form.classList.add("form-hide");
    }
});

$form.addEventListener('animationend', event => {
    if (event.animationName === "cair") {
        $form.style.display = "none";
    }
})

/*Squares Animados */
const ulSquares = document.querySelector("ul.squares")

const random = (min , max) => Math.random() * (max - min) + min;

for(let i = 0; i < 11;i++){
    const li = document.createElement("li")

    const size = Math.floor(random(10,120));
    const position = random(1, 99);
    const delay = random(5, 0.1);
    const duration = random(24, 12);

    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;

    li.style.left = `${position}%`

    li.style.animationDelay = `${delay}s`
    li.style.animationDuration = `${duration}s`
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})`

    ulSquares.appendChild(li)
}