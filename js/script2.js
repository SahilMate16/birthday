
var love = setInterval(function(){
    var r_num = Math.floor(Math.random() * 40) + 1;
      var r_size = Math.floor(Math.random() * 65) + 10;
      var r_left = Math.floor(Math.random() * 100) + 1;
      var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;
    $('.bg_heart').append("<div class='heart' style='width:"+r_size+"px;height:"+r_size+"px;left:"+r_left+"%;background:rgba(255,"+(r_bg-25)+","+r_bg+",1);-webkit-animation:love "+r_time+"s ease;-moz-animation:love "+r_time+"s ease;-ms-animation:love "+r_time+"s ease;animation:love "+r_time+"s ease'></div>");
    
    $('.bg_heart').append("<div class='heart' style='width:"+(r_size-10)+"px;height:"+(r_size-10)+"px;left:"+(r_left+r_num)+"%;background:rgba(255,"+(r_bg-25)+","+(r_bg+25)+",1);-webkit-animation:love "+(r_time+5)+"s ease;-moz-animation:love "+(r_time+5)+"s ease;-ms-animation:love "+(r_time+5)+"s ease;animation:love "+(r_time+5)+"s ease'></div>");
      
    
  },500);
  
  
  var i = 0;
  var txt1 = "Hiii mazi Muktu,bhalu ,ani maza panda🐼.....!  <<         sarvat adhi ThankYou ata He Kasha Sathi Manach Zala Tr Pratek Goshti sathi...<<<                Sarvat Adhi Mazi changli Friend banli tu.(Tasa tr Maza sathi Bestfriend ch Hoti tu🫂)But tula Tasa feel Nahi Zala Tya Sathi Sry Manapasun pn!                                                                           << Nantar Jashe Diwas Gele apl Sbt Rahana Avdu Lagal Nantr TU Mazi Best-Friend zali Ani Kaldla Ch Nahi Tu Kadhi SUKOON Zali Mazi..😍💕 <<<          Tuza Sbt Rahana , Tuza Kesa Cha Sughanda Ghena , Mala tu jashi mante boku,hagu,bokidokin He Sarva Mala Khup Cute vatala Lagal. <<                  Mala Mahit ahe Maza Madhe Khup Sare Problems Ahe Maybe Mi Tula ti Happiness Nahi Deu Shakat Ahe But Trust me MUktu Mala Khup Mana Pasun Tu Avdte I Love You Mazi Muktu💗....! <<                           hmm Aj TUza Special Day ahe ani Kay Mi Tula Thanku Sorry Mant ahe Kharch Mi Pan ek No. Cha HAGU Ahe...💩😂!                                                     > Chal Tula ANKhi KAhi Sangto mi ..Tuza Kade Baghna Ani Baght Rahana Tuza Laad Krna Tula Satat Trass Det Rahan mi krt Asto karan Mala tuza sbt He As Krala Avdte this My Way Of Showing Love To You Muktu(Tula Irritate Hote Mahit ahe But Thoda Yekun ghet ja Ma 🫠🫠) ...!                     << Tuzi Ek Goshta Khup Changli Vatte Mala To Ahe tuza Confidence Tuza Passonate Work Ki Mala he Krach ahe Mala Te Krach Ahe Apn Dance Kru Apn Ya Madhe Participate Kru And Everything...khup Ahe 💟!                                                     > Buss Jashi Tu Ata Ahe Tashi Tu Nehmmi Rahshil Promise Kr Mala Pakka Wala ki Tu Nehmi Confident,Courious about Something,Ani Nehmi Progress krt rahashil Magg te tuza Art ch Aso Kinva Ata te Samor ch Job Ch Aso....(Kr Promise)!                    << Krrrrrrr🤞 Kela kaun Nahi Ajun PAriyanta (Baitad Bhalu😂🐻)....!  <<<                                                 Chal Bhalu Mi Khup Lecture Det Baslo Tula Bola Sathi Khup Ahe Maza Kade Time Kami padel       <<(Bohot Sari Bate Karni Hai Tumse... Ek Sham Phursat ke Pal Lekr Ana meri 'JAAN'💗💌)      >I Love U 🫶😘<Maza Panda maza Bhalu.....🥰!                  <<<< Pls MaZa Sbt Asach Nehmi Rahshil Mala Tuza Sbt as Best-Friend Tr ahech ch Apn Nehmi Pn Mala tuza Sbt Tycha Varcha Je Relation Ahe Tr tikvach Ahe Ani Te Continue Krach ahe ....🫴<<<   I Love You Mazi Muktu, Mazi Panda, Maza Bhalu, Maza SUKKON, Maza Everything Muktu 💏💌💌 <<<<                     Bass Don Iccha Ahe Mazi pahili Ki'Tu Khush Raha..💝'.... Dusri 'Tu Nehmi Maza Sbt Raha..♾️💌🥹' ..<<<<💓LOVE YOU MUKTU KEEP SMILING AND STAY HAPPY LOVE YOU MORE🩵💌";
  var speed = 70;
  typeWriter();
  function typeWriter() {
    if (i < txt1.length) {        
       if(txt1.charAt(i)=='<')
        document.getElementById("text1").innerHTML += '</br>'
      else if(txt1.charAt(i)=='>')
        document.getElementById("text1").innerHTML = ''
      else if(txt1.charAt(i)=='|')
        {
            $(".bg_heart").css("background-image", "url('))");

  
        }
      else
        document.getElementById("text1").innerHTML += txt1.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    
  };