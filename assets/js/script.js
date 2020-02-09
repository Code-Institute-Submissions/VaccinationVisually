// DOM element where the Timeline will be attached
var container = document.getElementById('visualization');

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet([
    {
        "content": "<h1>The Father of Medicine</h1>",
        "start": "-000400-01-01",
        "id": 1
    },
    { id: 2, content: 'item 2', start: '0010-04-14' },
    { id: 3, content: 'item 3', start: '0100-04-18' },
    { id: 4, content: 'item 4', start: '1000-04-16', end: '2013-04-19' },
    { id: 5, content: 'item 5', start: '1500-04-25' },
    { id: 6, content: 'item 6', start: '1800-06-27' },
    { id: 7, content: 'item 7', start: '1800-09-27' },
    { id: 8, content: 'item 8', start: '1802-01-27' },
    { id: 9, content: 'item 9', start: '1804-04-27' },
    { id: 10, content: 'item 10', start: '1820-04-27' },
    { id: 11, content: 'item 11', start: '1825-04-27' },
    { id: 12, content: 'item 12', start: '1850-04-27' },
    { id: 13, content: 'item 13', start: '1851-04-27' },
    { id: 14, content: 'item 14', start: '1900-04-27' },
    { id: 15, content: 'item 15', start: '1920-04-27' },
    { id: 16, content: 'item 16', start: '1950-04-27' }
]);

// Configuration for the Timeline
var options = {
    autoResize: true,
    width: '95%',
    align: 'center',
    type:'point',
    showMajorLabels: false

};

// Create a Timeline
var timeline = new vis.Timeline(container, items, options);


//Slider for centring the timeline
let sliderPos = document.getElementById('sliderPosition');
let sliderVal = sliderPos.value;
let sliderOutput = document.querySelector('output');

sliderOutput.innerHTML = sliderVal;

sliderPos.addEventListener('change', function(){
    sliderOutput.innerHTML = sliderPos.value;
})

