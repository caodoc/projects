var timer = 5;
var counting = setInterval(function()
{
    timer -= 1;
    document.getElementById("countdown").innerHTML = timer;
    if (timer <= 0)
    {
        clearInterval(timer);
        window.location.href = "https://caodoc.github.io";
    }
}, 1000);