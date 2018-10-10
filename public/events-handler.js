class EventsHandler {
    constructor(eventsRepository, eventsRenderer) {
        this.eventsRepository = eventsRepository;
        this.eventsRenderer = eventsRenderer;
        this.nm = this.eventsRepository.getMonth();
    }

    onLoad() {
        this.eventsRepository.getEvents().then(() => {
        this.eventsRenderer.renderEvents(this.eventsRepository.events)
        })
    }

    nextMonth() {
        $("#next").on('click', ()=> {
        if(this.nm == 11) {
            const nextButton = $('#next')
            nextButton.css('display', 'none');
            return;
        }
        this.eventsRenderer.renderMonth(this.nm +1)
        this.nm++
        console.log(this.nm)
        })
    }
    previousMonth() {
        $("#Previous").on('click', ()=> {
        this.eventsRenderer.renderMonth(this.eventsRepository.getMonth() -1)
        })
    }

    onLoadMonth(){
        this.eventsRenderer.renderMonth(this.eventsRepository.getMonth());
    }

    registerAddEvent() {
        const model = $("#mymodel");
        const button = $(".add");
        button.on('click', function () {
            model.css('display', 'block');
        })
    }

    close() {
        const span = document.getElementsByClassName("close")[0];
        const model = $("#mymodel");
        span.onclick = function () {
            model.css('display', 'none');
        }
    }

    addEventDetails() {
        $('.submit').on("click", () => {
            let title = $(".title").val();
            let day = $(".day").val();
            let month = $('.model-content').find('.month').val();
            console.log(month);
            let year = $(".Year").val();
            let time = $(".time").val();
            let location = $(".location").val();
            let image = $(".image").val();
            if(title == '' || day== '' || month == '' || year == ''){
                if (title == "") { alert("Please enter title") }
                if (day == "") { alert("Please enter day") }
                if (month == "") { alert("Please enter month") }
                if (year == "") { alert("Please enter year") }
            } else {
                title = $(".title").val();
                day = $(".day").val();
                month = $('.model-content').find('.month').val();
                year = $(".Year").val();
                this.eventsRepository.addEvent(title, day, month, year, time, location, image).then(() => {
                    this.eventsRenderer.renderEvents(this.eventsRepository.events);
                    const model = $("#mymodel");
                    model.css('display', 'none');
                })
                $(".title").val('');
                $(".day").val('');
                $(".month").val('');
                $(".Year").val('');
                $(".time").val('');
                $(".location").val('');
                $(".image").val('');
            }

        })

    }
    // Get the model
    // var model = document.getElementById('mymodel');

    // Get the button that opens the model
    // var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the model
    // var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the model 
    // btn.onclick = function() {
    //     model.style.display = "block";
    // }



    // When the user clicks on <span> (x), close the model
    // span.onclick = function() {
    //     model.style.display = "none";
    // }



    // // When the user clicks anywhere outside of the model, close it
    // window.onclick = function(event) {
    //     if (event.target == model) {
    //         model.style.display = "none";
    //     }
    // }
    // showDayEvents() {
    //     $("").on('click', function() {

    //     })
    // }

    // showSpecialEvents() {
    //     $("").on('click', function(){

}
export default EventsHandler;


// var dateControl = document.querySelector('input[type="date"]');
// dateControl.value = '2018-06-01';

// var calendar = new Y.Calendar({
//     contentBox: "#mycalendar",
//     width:'100%',
//     showPrevMonth: true,
//     showNextMonth: true,
//     date: new Date()}).render();


//       $("#1 tr1").click(function(){
//         window.location = "example.html";
//       });

