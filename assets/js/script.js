// DOM element where the Timeline will be attached
var container = document.getElementById('visualization');

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet([
    {
        "content": "<h1>The Father of Medicine</h1>",
        "start": "-000400-01-01",
        "id": 1
    },
    { id: 2, content: 'item 2', start: '2013-04-14' },
    { id: 3, content: 'item 3', start: '2013-04-18' },
    { id: 4, content: 'item 4', start: '2013-04-16', end: '2013-04-19' },
    { id: 5, content: 'item 5', start: '2013-04-25' },
    { id: 6, content: 'item 6', start: '2013-04-27' }
]);

// Configuration for the Timeline
var options = {};

// Create a Timeline
var timeline = new vis.Timeline(container, items, options);