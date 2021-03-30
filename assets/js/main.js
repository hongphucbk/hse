$('.login-signup-reset').find('input, textarea').on('keyup blur focus', function (e) {
    var $this = $(this),
    label = $this.prev('label');

    if (e.type === 'keyup') {
            if ($this.val() === '') {
        label.removeClass('active highlight');
        } else {
        label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
        if( $this.val() === '' ) {
            label.removeClass('active highlight'); 
            } else {
            label.removeClass('highlight');   
            }   
    } else if (e.type === 'focus') {
    
    if( $this.val() === '' ) {
            label.removeClass('highlight'); 
            } 
    else if( $this.val() !== '' ) {
            label.addClass('highlight');
            }
    }
});

$(".lession").click(function() {
    
    var listItems = $(".lession");

    document.getElementById("session-test").classList.remove("show-test");
    document.getElementById("session-learn").classList.add("show-video-learn")
      
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("active");
    }
      
    this.classList.add("active");
});

$(".lession.btn-test").click(function() {
    document.getElementById("session-test").classList.add("show-test");
    document.getElementById("session-learn").classList.remove("show-video-learn");
});

$( document ).ready(function() {
    $( "#showToast" ).click(function() {
      $('.toast').toast('show');
    });
      
  });
  
