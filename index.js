// read query string
let GET = {};
for(const item of window.location.search.split(/&|\?/).filter(substr => substr)){
    let [key, val] = item.split('=').map(decodeURIComponent);
    GET[key] = val;
}

let els = {
    'reps': document.querySelector('#reps'),
    'faces': document.querySelector('#faces'),
    'output': document.querySelector('#output'),
};

function roll(){
    els.output.innerHTML = roll_die_repeat(
        parseInt(els.reps.value),
        parseInt(els.faces.value)
    );
}

let [reps, faces] = parse_roll(GET.roll);
els.reps.value = reps;
els.faces.value = faces;
roll()
