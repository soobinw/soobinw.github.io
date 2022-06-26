// https://github.com/tameemsafi/typewriterjs
var type = document.getElementById('type')

var typewriter = new Typewriter(type, {
    loop:true,
    delay:90
});

typewriter.typeString("nice to meet you!")
    .pauseFor(1500)
    .deleteAll()
    .typeString("i am a uci graduate w/a bs in comp sci.")
    .pauseFor(1500)
    .deleteAll()
    .typeString("enjoy your stay :-)")
    .start()
