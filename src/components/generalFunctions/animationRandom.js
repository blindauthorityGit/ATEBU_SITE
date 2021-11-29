export default function fadeIn(e) {
    console.log(e.target);
    setTimeout(() => {
        e.target.classList.add("animate__animated", "animate__fadeIn");
    }, Math.random() * 200);

    // Array.from(document.getElementsByClassName("thumbnail")).map((e, i) => {
    //     setTimeout(() => {
    //         e.classList.add("animate__animated", "animate__fadeIn");
    //     }, Math.random() * 200);
    // });
}
