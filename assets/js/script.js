// handlebars template
var source = document.getElementById('item-template').innerHTML;
var template = Handlebars.compile(source);

// DOM element where the Timeline will be attached
var container = document.getElementById('visualization');

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet([
    {
        title: "The Father of Medicine",
        description: "Hippocrates first identifies mumps, diphtheria, epidemic jaundice, and other conditions.",
        itemDate: "400 BCE",
        itemImage: "assets/images/id1_hippocrates.jpg",
        ref: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4659912/#B23",
        start: "-000400-01-01",
        id: 1
    },
    { 
        title: "Early Immunization",
        description: "The earliest methods of immunization and protection against smallpox date back to about 1000 A.D., and are attributed to the Chinese. It has been said that the son of a Chinese statesman was inoculated against smallpox by blowing powdered smallpox sores into his nostrils. Another method used for inoculation was the removal of fluid from the pustules of an infected individual and subsequently rubbing it into a skin scratch of a healthy individual.",
        itemDate: "1100 CE",
        itemImage: "assets/images/id2_immunization.jpg",
        ref: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4659912/#B23", 
        start: '0010-04-14', 
        id: 2
},
    {
        title: "Variolation Arrives in the West",
        description: "The variolation process arrives in Turkey around 1672 CE.",
        itemDate: "1672",
        itemImage: "assets/images/id3_turkey.jpg",
        ref: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4659912/#B23",
        start: '1672-01-01',
        id: 3
    },
    {
        title: "Early Varioloation in Great Britain",
        description: "In the early 18th century, the varioloation process (known at that time as Inoculation), was introduced in Great Britain in order to help protect against smallpox.",
        itemDate: "1721",
        itemImage: "assets/images/id4_variolation.jpg",
        ref: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4659912/#B23",
        start: '1721-01-01',
        id: 4
    },
    {
        title: "Jenner's Breakthrough",
        description: "Edward Jenner published his work on the development of a vaccination that would protect against smallpox. Two years earlier, in 1796, he had first speculated that protection from smallpox disease could be obtained through inoculation with a related virus, vaccinia or cowpox. He tested his theory on the 14th May 1796 by inoculating eight-year-old James Phipps with cowpox pustule liquid recovered from the hand of a milkmaid, Sarah Nelmes.",
        itemDate: "1798",
        itemImage: "assets/images/id5_jenner-smallpox.jpg",
        ref: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4659912/#B23",
        start: '1798-01-01',
        id: 5
    },
    {
        title: "John Snow and the Broad St. Pump",
        description: "John Snow, a leading British physician, formulated a theory that cholera could be spread via contaminated water or food.  An outbreak of the disease near Broad St., London, gave him the opportunity to prove this theory.  By recording the location of Cholera-related deaths, Snow was able to show that the majority were clustered around a water pump in the area.  He convinced officials to remove the pump handle, which helped control the epidemic, and in doing so, became the father of epidemiology.",
        itemDate: "1854",
        itemImage: "assets/images/id6_broad-st-pump.jpg",
        ref: "https://www.immunology.org/john-snows-pump-1854",
        start: '1854-01-01',
        id: 6
    },
    {
        title: "Germ Theory",
        description: "Between 1860 and 1864, Louis Pasteur conducts many experiments to understand the relationship between germs and disease, which informed his proposal that microorganisms known as pathogens (germs) were the cause of disease. His thesis became known as the Germ Theory of Disease.",
        itemDate: "1861",
        itemImage: "assets/images/id7_germ-theory.jpg",
        ref: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4659912/#B23",
        start: '1861-01-01',
        id: 7
    },
    {
        title: "Spontaneous Generation Theory Disproven",
        description: "Spontaneous Generation was a the theory that life could come from non-living materials; however, Louis Pasteur, designed his now famous swan-neck experiment to disprove this theory. The apparatus allowed air in, but prevented airborne organisms doing likewise.  He predicted that the flasks would remain sterile as long as the neck remained intact, but if broken, this would permit microbial growth.",
        itemDate: "1862",
        itemImage: "assets/images/id8_spontaneous-generation.jpg",
        ref: "https://courses.lumenlearning.com/microbiology/chapter/spontaneous-generation/",
        start: '1862-01-01',
        id: 8
    },
    {
        title: "Pasteur Begins His Work on Anthrax",
        description: "Having started his investigations on Athrax in response to a recent outbreak, Pasteur presents a paper to the French Academy of Sciences on the subject, representing his first work in the field of medicine.",
        itemDate: "1877",
        itemImage: "assets/images/id9_pasteur-anthrax.jpg",
        ref: "https://www.sciencehistory.org/historical-profile/louis-pasteur",
        start: '1877-01-01',
        id: 9
    },
    {
        title: "First Bacterial Vaccine",
        description: "Pasteur creates the first live attenuated vaccine for a bacterial illness, in this case, foul cholera. Having realised (by chance) that the bacterial cultures he was studying lost their virulence over time, Pasteur reasoned that the bacteria were diminished after exposure to oxygen. As a result, this dicsovery revolutionized work into infectious diseases, and kick-started the entire field of immunology.",
        itemDate: "1879",
        itemImage: "assets/images/id10_bacterial-vaccine.jpg",
        ref: "https://www.vbivaccines.com/wire/louis-pasteur-attenuated-vaccine/",
        start: '1879-01-01',
        id: 10
    },
    {
        title: "Work on Rabies Vaccine Begins",
        description: "Having been sent a number of samples from dogs, Pasteur began working on a method to control Rabies.  Working with rabbits, Pasteur was able to radicaly shorten the period of time between infection and signs of symptoms.",
        itemDate: "1880",
        itemImage: "assets/images/id11_pasteur-rabies.jpg",
        ref: "https://www.sciencehistory.org/historical-profile/louis-pasteur",
        start: '1880-01-01',
        id: 11
    },
    {
        title: "Pasteur's Public Anthrax Vaccine Study",
        description: "Continuing his work into Anthrax, Louis Pasteur produced attenuated vaccines that could protect sheep and other animals, which he demonstrated in Pouill-Le-Fort. These high-profile public displays featured cows, sheep and goats, and showed that while almost all infected animals died, the vaccinated animals survived.",
        itemDate: "1881",
        itemImage: "assets/images/id12_public-anthrax.jpg",
        ref: "https://www.sciencehistory.org/historical-profile/louis-pasteur",
        start: '1881-05-01',
        id: 12
    },
    {
        title: "Robert Koch Identifies Tubercolosis",
        description: "Robert Koch identifies the mycobacterium tuberculosis.  Convinced that tuberculosis (known as consumption at that time) was caused by an infectious bacterium, he developed four postulates to test his theory. Through his work with guinea pigs, he found that these postulates were satisfied and published his findings at the Berlin Physiological Society on March 24th, 1882.",
        itemDate: "1882",
        itemImage: "assets/images/id13_koch-tb.jpg",
        ref: "https://www.cdc.gov/mmwr/preview/mmwrhtml/00000222.htm",
        start: '1882-01-01',
        id: 13
    },
    {
        title: "First Viral Vaccine",
        description: "Louis Pasteur develops the first live attenuated viral vaccine by using dried brain tissue inactivated with formaldehyde, thus providing immunity to rabies for dogs.",
        itemDate: "1884",
        itemImage: "assets/images/id14_viral-vaccine.jpg",
        ref: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4659912/",
        start: '1884-01-01',
        id: 14
    },
    {
        title: "Koch Identifies the Comma Bacillus",
        description: "In the 19th century, there was extensive research into cholera, and by 1883, Robert Koch had isolated it in culture; however, this was in fact the second time the organism had been identified, as Filippo Pacini had previously discovered it in 1854, albeit remaining largely unknown.",
        itemDate: "1884",
        itemImage: "assets/images/id15_comma-bacilus.jpg",
        ref: "https://www.sciencedirect.com/science/article/pii/S1198743X14608557",
        start: '1884-03-01',
        id: 15
    },
    {
        title: "Rabies Vaccine Used to Treat Humans",
        description: "In the 19th century, there was extensive research into cholera, and by 1883, Robert Koch had isolated it in culture; however, this was in fact the second time the organism had been identified, as Filippo Pacini had previously discovered it in 1854, albeit remaining largely unknown.",
        itemDate: "1885",
        itemImage: "assets/images/id16_rabies-koch.jpg",
        ref: "https://www.the-scientist.com/foundations/the-rabies-vaccine-backstory-33441?archived_content=9BmGYHLCH6vLGNdd9YzYFAqV8S3Xw3L5",
        start: '1885-06-01',
        id: 16
    },
    {
        title: "First Diptheria Treatments",
        description: "Shibasaburo Kitasato and Emil von Behring, using a heat-treated diphtheria toxin, immunized guinea pigs against diptheria toxin.  Von Behring would later go on to win the first ever Nobel prize in medicine for his work on diptheria.",
        itemDate: "1890",
        itemImage: "assets/images/id17_vonbehring-kitasato.jpg",
        ref: "https://jnnp.bmj.com/content/71/1/62",
        start: '1890-01-01',
        id: 17
    },
    {
        title: "Chickenpox and Shingles Linked",
        description: "Hungarian pediatrician James Bokay described cases of individuals who had contracted chickenpox after coming in contact with shingles.  This connection was not confirmed for almost thirty years when Kundratitz demonstrated that inoculating children with fluid from shingles patients resulted in chickenpox.",
        itemDate: "1892",
        itemImage: "assets/images/id18_chickenpox.jpg",
        ref: "https://www.historyofvaccines.org/content/chickenpox-relationship-between-chickenpox-and-shingles-suggested",
        start: '1892-05-01',
        id: 18
    },
    {
        title: "First U.S. Polio Epidemic",
        description: "The first recorded Polio outbreak in the United States.  The state of vermont issue an emergency as 18 people die and 132 are left with permanent paralysis, after the outbreak in Rutland County",
        itemDate: "1894",
        itemImage: "assets/images/id19_polio-epidemic.jpg",
        ref: "https://www.historyofvaccines.org/content/chickenpox-relationship-between-chickenpox-and-shingles-suggested",
        start: '1894-06-01',
        id: 19
    },
    {
        title: "Louis Pasteur Dies",
        description: "Louis Pasteur, one of the greatest scientists of his time, passes away from stroke.  Having discovered the process of food preservation that bears his name, his work was also key in creating vaccines for anthrax and rabies.",
        itemDate: "Septemeber 1895",
        itemImage: "assets/images/id20_louis-pasteur.jpg",
        ref: "https://www.biography.com/scientist/louis-pasteur",
        start: '1895-09-01',
        id: 20
    },
]);

// Configuration for the Timeline
var options = {
    template: template,
    start: '001854-01-01',
    end: '001895-01-01',
    autoResize: true,
    height: '500px',
    width: '100%',
    align: 'center',
    margin: { item: 20 },
    type:'point',
    timeAxis: { scale: 'year', step: 25 },
    hiddenDates: { start: '0100-01-01 00:00:00', end: '1000-01-01 00:00:00'  }
};

// Create a Timeline
var timeline = new vis.Timeline(container, items, options);

// Nav Buttons 
// set the range of the current window and set the interval
function move(percentage) {
    var range = timeline.getWindow();
    var interval = range.end - range.start;

// Set the range of the window (using zoom buttons)
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

//Use the slider element to adjust the range
// Using slider to zoomIn or zoomOut
document.getElementById('rangeSlider').addEventListener('input', function (e) {
    var value = this.value;
    if (value < 0) {
        var start = moment().year(moment().year() - 100000),
            end = moment().year(moment().year() + 1);
        timeline.zoomOut(-value);
        if (value === "-1") timeline.setWindow(start, end);
    } else if (value > 0) {
        var start = moment(),
            end = moment(moment().utc() + 10);
        timeline.zoomIn(value);
        if (value === "1") timeline.setWindow(start, end);
    } else {
        timeline.fit(items.getIds());
        this.value = 0;
    }
});

// Listen for a item to be selected and get it's properties
timeline.on('select', function (properties) {
    var itemID = properties.items[0];
    var clickedItem = items.get(itemID);
    console.log(clickedItem);
    var viewTitle = clickedItem['title'];
    var viewDesc = clickedItem['description'];
    var viewDate = clickedItem['itemDate'];
    var viewImg = clickedItem['itemImage'];
    var viewLink = clickedItem['ref'];
    console.log(viewTitle);
    console.log(viewDesc);
    console.log(viewDate);
    console.log(viewImg);
    console.log(viewLink);

    document.getElementById('viewerTitle').innerHTML = viewTitle;
    document.getElementById('viewerDesc').innerHTML = viewDesc;
    document.getElementById('viewerDate').innerHTML = viewDate;
    document.getElementById('imageSrc').src = viewImg;
    document.getElementById('refbutton').href = viewLink;
    
});