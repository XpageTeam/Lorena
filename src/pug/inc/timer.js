<script>

    document.addEventListener("DOMContentLoaded", function(){
    
        var clock = $('.os-timer .timer').FlipClock( 600, {
            clockFace: 'DailyCounter',
            autoStart: false,
            countdown: true,
            showHours: false,
            language: 'ru-ru',
            callbacks: {
                stop: function() {
                    $('.os-timer .timer-info').html('Акция закончилась!')
                }
            }
        });
        clock.setTime(6000);
        clock.setCountdown(true);
        clock.start();
        
    
    })

</script>