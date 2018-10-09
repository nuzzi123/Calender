class EventsHandler {
    constructor(eventsRepository, eventsRenderer) {
        this.eventsRepository = eventsRepository;
        this.eventsRenderer = eventsRenderer;
    }

    onLoad() {
        this.eventsRepository.getEvents().then(() => {
            this.eventsRenderer.renderEvents(this.eventsRepository.events)
        })
    }

    nextMonth() {
        $("").on('click', function () {


        })
    }
    previousMonth() {
        $("").on('click', function () {

        })
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
            let month = $(".month").val();
            let year = $(".Year").val();
            let time = $(".time").val();
            let location = $(".location").val();
            let image = $(".image").val();
            if (title === "") { alert("Please enter title") }
            if (day === "") { alert("Please enter day") }
            if (month === "") { alert("Please enter month") }
            if (year === "") { alert("Please enter year") }
            else {
                this.eventsRepository.addEvent(title, day, month, year, time, location, image).then(() => {
                    this.eventsRenderer.renderEvents(this.eventsRepository.events);
                        const model = $("#mymodel");
                        model.css('display', 'none');
                    })
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
