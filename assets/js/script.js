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
    start: '-000401-01-01',
    autoResize: true,
    height: '500px',
    width: '90%',
    align: 'center',
    margin: { item: 20 },
    type:'point',
    timeAxis: { scale: 'year', step: 50 },
    hiddenDates: { start: '0100-01-01 00:00:00', end: '1000-01-01 00:00:00'  }
};

// Create a Timeline
var timeline = new vis.Timeline(container, items, options);


// //Slider for centring the timeline
// var slider = document.getElementById('sliderRange');
// var sliderOutput = document.getElementById('sliderValue');

//     // write 'value' to the page
//     sliderOutput.innerHTML = slider.value;

//     // create event listener for value
//     slider.oninput = function(){
//         sliderOutput.innerHTML = this.value;
//     }

// Get the range of the current window and set the interval (for nav buttons)
function move(percentage) {
    var range = timeline.getWindow();
    var interval = range.end - range.start;

// Set the range of the window 
    timeline.setWindow({
        start: range.start.valueOf() - interval * percentage,
        end: range.end.valueOf() - interval * percentage
    });
}

//link events to the nav buttons
document.getElementById('zoomIn').onclick = function () { timeline.zoomIn(0.4); };
document.getElementById('zoomOut').onclick = function () { timeline.zoomOut(0.4); };
document.getElementById('moveLeft').onclick = function () { move(0.2); };
document.getElementById('moveRight').onclick = function () { move(-0.2); };



