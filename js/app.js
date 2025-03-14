const titleElem = document.getElementById('title');

const titleElemtypewriter = new Typewriter(titleElem, {
    loop: true
});

titleElemtypewriter.typeString('Hi There!')
    .pauseFor(2500)
    .deleteAll()

    .typeString('He crafts responsive websites where technologies meet creativity')
    .pauseFor(2000)

    .start();

