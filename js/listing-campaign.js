$(function(){

  $('i#copy').on('mouseenter',function() {
    $(this).parent().find('.copy-span').fadeIn(300);
  }).on('mouseleave',function(){
    $(this).parent().find('.copy-span').fadeOut(300);
  })

  $('i#copy').click(function(){

    let copystring = $(this).parent().find('.copy-span').text();

    if( (copystring !== '') &&  (typeof(copystring)!== 'undefined' ))
      copyStringToClipboard(copystring);
      $(this).parent().find('.copy-span').fadeOut('fast');
      $(this).parent().find('.copy-span-copied').fadeIn(300,function(){
          $(this).parent().find('.copy-span-copied').fadeOut(1500)
      });
      
  })



/*


  $('.listing-qr-code').click(function(){
    $(this).parent().next().fadeOut('fast');
    $(this).css({
        marginLeft:0,
        width:115,
        position:'relative',
        left:'50%',
        padding:'44px 0',
        transform:'translate(-50%,0)',
        boxSizing:'content-box'
    })
    $(this).addClass('scale-img');

  })
*/

$('.listing-qr-code').click(function(){

  let imgClone = $(this).clone();
  imgClone.css({
    width:'250px',
    height:'250px'
  })

  imgClone.appendTo('.qr-modal-wrapper');
  $('.overlay_qr').fadeIn(300).on('click',function(){
    $(this).fadeOut(300);
    $(this).find('.qr-modal-wrapper').html('');
  })

  

})

function copyStringToClipboard (str) {
   var el = document.createElement('textarea');
   el.value = str;
   el.setAttribute('readonly', '');
   el.style = {position: 'absolute', left: '-9999px'};
   document.body.appendChild(el);
   el.select();
   document.execCommand('copy');
   document.body.removeChild(el);
}


  function drawszlider(ossz, meik){
    var szazalek=Math.round((meik*100)/ossz);
    document.getElementById("szliderbar").style.width=szazalek+'%';
    document.getElementById("szazalek").innerHTML=szazalek+'%';
}

const URL_BALANCE = 'listing-campaign'


    function getPriceCNX () {

        fetch("https://dex.binance.org/api/v1/account/bnb14gtfldc9xxpctzrq4y48gxjyqwlw5a4mcl96wx")
          .then(r => r.json())
          .then(r => {
             let price;
              r.balances.forEach(balance => {
                if (balance.symbol === "AWC-986"){price = balance.free}  

              })

              if (!price) return
            let tokenBalance = qs('#token-balance-freldo');
            tokenBalance.innerHTML = Number(price)
            console.log(this);
            let goalProgress = Number((price / 5000)*100)  
            console.log(goalProgress);

            var element = document.getElementById('progress-freldo');
            element.style.width = (goalProgress) + "%";

          })

    }



    function getPriceCND () {

        fetch("https://dex.binance.org/api/v1/account/bnb1efgp3rfqv36jm4q0ndxzgq42eskryde5jc9lk8")
          .then(r => r.json())
          .then(r => {
             let price;
              r.balances.forEach(balance => {
                if (balance.symbol === "AWC-986"){price = balance.free}  

              })

              if (!price) return
            let tokenBalance = qs('#token-balance-cnd');
            tokenBalance.innerHTML = Number(price)
            console.log(this);
            let goalProgress = Number((price / 5000)*100)  
            console.log(goalProgress);

            var element = document.getElementById('progress-cnd');
            element.style.width = (goalProgress) + "%";

          })

    }


    function getPriceHarmony () {

      fetch("https://dex.binance.org/api/v1/account/bnb1x3a4fnlnrt98smaagk4ywy7dune8frfp65jd5z")
        .then(r => r.json())
        .then(r => {
           let price;
            r.balances.forEach(balance => {
              if (balance.symbol === "AWC-986"){price = balance.free}  

            })

            if (!price) return
          let tokenBalance = qs('#token-balance-harmony');
          tokenBalance.innerHTML = Number(price)
          console.log(this);
          let goalProgress = Number((price / 5000)*100)  
          console.log(goalProgress);

          var element = document.getElementById('progress-harmony');
          element.style.width = (goalProgress) + "%";

        })

  }


  function getPriceEnigma () {

    fetch("https://dex.binance.org/api/v1/account/bnb1w9yuatmnjud9er5rkerd66xqzmpjgevnydgwmx")
      .then(r => r.json())
      .then(r => {
         let price;
          r.balances.forEach(balance => {
            if (balance.symbol === "AWC-986"){price = balance.free}  

          })

          if (!price) return
        let tokenBalance = qs('#token-balance-enigma');
        tokenBalance.innerHTML = Number(price)
        console.log(this);
        let goalProgress = Number((price / 5000)*100)  
        console.log(goalProgress);

        var element = document.getElementById('progress-enigma');
        element.style.width = (goalProgress) + "%";

      })

}


function getPriceFantom () {

  fetch("https://dex.binance.org/api/v1/account/bnb1u6un3tfllkl3qvzys0fldcjzayll90h7qzgygl")
    .then(r => r.json())
    .then(r => {
       let price;
        r.balances.forEach(balance => {
          if (balance.symbol === "AWC-986"){price = balance.free}  

        })

        if (!price) return
      let tokenBalance = qs('#token-balance-fantom');
      tokenBalance.innerHTML = Number(price)
      console.log(this);
      let goalProgress = Number((price / 5000)*100)  
      console.log(goalProgress);

      var element = document.getElementById('progress-fantom');
      element.style.width = (goalProgress) + "%";

    })

}




function getPriceHydro () {

  fetch("https://dex.binance.org/api/v1/account/bnb1vxqn0ldg4x3j2kr9rscsq6pcxmms7kg67rmu0c")
    .then(r => r.json())
    .then(r => {
       let price;
        r.balances.forEach(balance => {
          if (balance.symbol === "AWC-986"){price = balance.free}  

        })

        if (!price) return
      let tokenBalance = qs('#token-balance-hydro');
      tokenBalance.innerHTML = Number(price)
      console.log(this);
      let goalProgress = Number((price / 5000)*100)  
      console.log(goalProgress);

      var element = document.getElementById('progress-hydro');
      element.style.width = (goalProgress) + "%";

    })

}



function getPriceMonetha () {

  fetch("https://dex.binance.org/api/v1/account/bnb1jlk0jqdjdjwac5jv5lc5t56pd95xfc2x78wwdm")
    .then(r => r.json())
    .then(r => {
       let price;
        r.balances.forEach(balance => {
          if (balance.symbol === "AWC-986"){price = balance.free}  

        })

        if (!price) return
      let tokenBalance = qs('#token-balance-monetha');
      tokenBalance.innerHTML = Number(price)
      console.log(this);
      let goalProgress = Number((price / 5000)*100)  
      console.log(goalProgress);

      var element = document.getElementById('progress-monetha');
      element.style.width = (goalProgress) + "%";

    })

}



function getPriceOax () {

  fetch("https://dex.binance.org/api/v1/account/bnb1cnmhcur5npwvr8cx57clwvx5lcy7hzs2pzyklv")
    .then(r => r.json())
    .then(r => {
       let price;
        r.balances.forEach(balance => {
          if (balance.symbol === "AWC-986"){price = balance.free}  

        })

        if (!price) return
      let tokenBalance = qs('#token-balance-oax');
      tokenBalance.innerHTML = Number(price)
      console.log(this);
      let goalProgress = Number((price / 5000)*100)  
      console.log(goalProgress);

      var element = document.getElementById('progress-oax');
      element.style.width = (goalProgress) + "%";

    })

}

function getPricePropy () {

  fetch("https://dex.binance.org/api/v1/account/bnb1fxsn0dq7x48wzvmr6z2fuewa0shwgx2fupg6n4")
    .then(r => r.json())
    .then(r => {
       let price;
        r.balances.forEach(balance => {
          if (balance.symbol === "AWC-986"){price = balance.free}  

        })

        if (!price) return
      let tokenBalance = qs('#token-balance-propy');
      tokenBalance.innerHTML = Number(price)
      console.log(this);
      let goalProgress = Number((price / 5000)*100)  
      console.log(goalProgress);

      var element = document.getElementById('progress-propy');
      element.style.width = (goalProgress) + "%";

    })

}


function getPriceRen () {

  fetch("https://dex.binance.org/api/v1/account/bnb19layffeglnvnhd3v0ugp880rw0el87qqs8jgvd")
    .then(r => r.json())
    .then(r => {
       let price;
        r.balances.forEach(balance => {
          if (balance.symbol === "AWC-986"){price = balance.free}  

        })

        if (!price) return
      let tokenBalance = qs('#token-balance-ren');
      tokenBalance.innerHTML = Number(price)
      console.log(this);
      let goalProgress = Number((price / 5000)*100)  
      console.log(goalProgress);

      var element = document.getElementById('progress-ren');
      element.style.width = (goalProgress) + "%";

    })

}


function getPriceStorm () {

  fetch("https://dex.binance.org/api/v1/account/bnb136042w75mt7l0enmxp07wf89udaqavhtufldd6")
    .then(r => r.json())
    .then(r => {
       let price;
        r.balances.forEach(balance => {
          if (balance.symbol === "AWC-986"){price = balance.free}  

        })

        if (!price) return
      let tokenBalance = qs('#token-balance-storm');
      tokenBalance.innerHTML = Number(price)
      console.log(this);
      let goalProgress = Number((price / 5000)*100)  
      console.log(goalProgress);

      var element = document.getElementById('progress-storm');
      element.style.width = (goalProgress) + "%";

    })

}


function getPriceTel () {

  fetch("https://dex.binance.org/api/v1/account/bnb13hlkdh7aecfqg7ctksnfyt5v9vqswxye08tnnw")
    .then(r => r.json())
    .then(r => {
       let price;
        r.balances.forEach(balance => {
          if (balance.symbol === "AWC-986"){price = balance.free}  

        })

        if (!price) return
      let tokenBalance = qs('#token-balance-telecoin');
      tokenBalance.innerHTML = Number(price)
      console.log(this);
      let goalProgress = Number((price / 5000)*100)  
      console.log(goalProgress);

      var element = document.getElementById('progress-telecoin');
      element.style.width = (goalProgress) + "%";

    })

}


function getPriceTnt () {

  fetch("https://dex.binance.org/api/v1/account/bnb1kh828zey9duayed683phnkejvweecd55wsdejc")
    .then(r => r.json())
    .then(r => {
       let price;
        r.balances.forEach(balance => {
          if (balance.symbol === "AWC-986"){price = balance.free}  

        })

        if (!price) return
      let tokenBalance = qs('#token-balance-tierion');
      tokenBalance.innerHTML = Number(price)
      console.log(this);
      let goalProgress = Number((price / 5000)*100)  
      console.log(goalProgress);

      var element = document.getElementById('progress-tierion');
      element.style.width = (goalProgress) + "%";

    })

}



function getPriceVra () {

  fetch("https://dex.binance.org/api/v1/account/bnb13265ydzpt9pxucsxxz4r9a9470azaen5dea95h")
    .then(r => r.json())
    .then(r => {
       let price;
        r.balances.forEach(balance => {
          if (balance.symbol === "AWC-986"){price = balance.free}  

        })

        if (!price) return
      let tokenBalance = qs('#token-balance-verasity');
      tokenBalance.innerHTML = Number(price)
      console.log(this);
      let goalProgress = Number((price / 5000)*100)  
      console.log(goalProgress);

      var element = document.getElementById('progress-verasity');
      element.style.width = (goalProgress) + "%";

    })

}



function getPriceRde () {

  fetch("https://dex.binance.org/api/v1/account/bnb1yt7epdqkfn720npqjqh8lycxh49nrtxwyjp5j5")
    .then(r => r.json())
    .then(r => {
       let price;
        r.balances.forEach(balance => {
          if (balance.symbol === "AWC-986"){price = balance.free}  

        })

        if (!price) return
      let tokenBalance = qs('#token-balance-raiden');
      tokenBalance.innerHTML = Number(price)
      console.log(this);
      let goalProgress = Number((price / 5000)*100)  
      console.log(goalProgress);

      var element = document.getElementById('progress-raiden');
      element.style.width = (goalProgress) + "%";

    })

}



function getPriceCro () {

  fetch("https://dex.binance.org/api/v1/account/bnb1rqpvh5txu9vdy6j3fwppe24m900jrvgmszdk9c")
    .then(r => r.json())
    .then(r => {
       let price;
        r.balances.forEach(balance => {
          if (balance.symbol === "AWC-986"){price = balance.free}  

        })

        if (!price) return
      let tokenBalance = qs('#token-balance-cryptocom');
      tokenBalance.innerHTML = Number(price)
      console.log(this);
      let goalProgress = Number((price / 5000)*100)  
      console.log(goalProgress);

      var element = document.getElementById('progress-cryptocom');
      element.style.width = (goalProgress) + "%";

    })

}



function getPricePoe () {

  fetch("https://dex.binance.org/api/v1/account/bnb1ykrwu4lv8nsjg74mxc3834ujqpel2ru5phy3es")
    .then(r => r.json())
    .then(r => {
       let price;
        r.balances.forEach(balance => {
          if (balance.symbol === "AWC-986"){price = balance.free}  

        })

        if (!price) return
      let tokenBalance = qs('#token-balance-poet');
      tokenBalance.innerHTML = Number(price)
      console.log(this);
      let goalProgress = Number((price / 5000)*100)  
      console.log(goalProgress);

      var element = document.getElementById('progress-poet');
      element.style.width = (goalProgress) + "%";

    })

}


    getPriceCNX();
    getPriceCND();
    getPriceHarmony();
    getPriceEnigma();
    getPriceFantom();
    getPriceHydro();
    getPriceMonetha();
    getPriceOax();
    getPricePropy();
    getPriceRen();
    getPriceStorm();
    getPriceTel();
    getPriceTnt();
    getPriceVra();
    getPriceRde();
    getPriceCro();
    getPricePoe();

/*
class getHARMONYBalance {
    constructor() {
        if(window.location.href.includes(URL_BALANCE)) {
            this.tokenBalance = qs('#token-balance-harmony');
            this.getPrice()
        }
    }

    getPrice () {
        fetch("https://dex.binance.org/api/v1/account/bnb1x3a4fnlnrt98smaagk4ywy7dune8frfp65jd5z")
          .then(r => r.json())
          .then(r => {
             let price;
              r.balances.forEach(balance => {
                if (balance.symbol === "AWC-986"){price = balance.free}  

              })
              if (!price) return

            this.tokenBalance.innerHTML = Number(price)
            console.log(this);
            this.goalProgress = Number((price / 5000)*100)  
            console.log(this.goalProgress);

            var element = document.getElementById('progress-harmony');
            element.style.width = (this.goalProgress) + "%";

          })

    }

}*/

})