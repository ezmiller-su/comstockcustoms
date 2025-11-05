function formatTime(unit) {
    return unit < 10 ? "0" + unit : unit;
    }
  
// Set date
var countDownDate = new Date("Jan 1, 2025 17:00:00").getTime();

// Update every second
var x = setInterval(function() {

// Get date
var now = new Date().getTime();
    
// Find the distance between now and the count down date
var distance = countDownDate - now;
    
// Calculations
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
// Output
document.getElementById("countdown").innerHTML = formatTime(days) + ":" + formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    
// At expiry
if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
}
}, 1000);