var speak = document.getElementById('text');
var textarea = document.getElementById('textarea');
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var result;
betty = "Betty bought a bit of butter, But the butter was so bitter, So she bought some better butter, To make the bitter butter better."
tongue = ["upper roller lower roller", "she sells sea shells", betty]
console.log(tongue)
speak.addEventListener('click', function () {
    recognition.start();
    textarea.innerHTML = '...speaking';
    document.getElementById("compare").innerHTML = tongue[document.getElementById("select").value]
    result = tongue[document.getElementById("select").value]
})
recognition.onresult = function (e) {
    var transcript = e.results[0][0].transcript;
    textarea.innerHTML = transcript;
    var synth = window.speechSynthesis;
    speak_data = transcript;
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    
    if (result == transcript) {
        setTimeout(() => {
            var synth = window.speechSynthesis;
            speak_data = "You Did it";
            var utterthis = new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterthis);
        }, 2000);
    }
}

