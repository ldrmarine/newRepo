function dtimes(e){var a;(a=new Date).setDate(a.getDate()+e+1-1),document.write(a.getDate()+" "+months_localized.bg[a.getMonth()])}function dtime(e){var a=new Date;a.setDate(a.getDate()+e+1),document.write(days_localized[lang_locale][a.getDay()]+" "+a.getDate()+",  "+months_localized[lang_locale][a.getMonth()]+" "+a.getFullYear())}function dtime_nums(e,a){var r=new Date;r.setDate(r.getDate()+e+1);var t="";r.getDate()<10&&(t="0"),t+=r.getDate();var n="";r.getMonth()+1<10&&(n="0"),n+=r.getMonth()+1,!0===a?document.write(t+"."+n+"."+r.getFullYear()):document.write(n+"."+t+"."+r.getFullYear())}!function(e,a){var r=/\+/g;function t(e){return e}function n(e){return decodeURIComponent(e.replace(r," "))}e.cookie=function(r,i,o){if(arguments.length>1&&(!/Object/.test(Object.prototype.toString.call(i))||null==i)){if(o=e.extend({},e.cookie.defaults,o),null==i&&(o.expires=-1),"number"==typeof o.expires){var u=o.expires,s=o.expires=new Date;s.setDate(s.getDate()+u)}return i=String(i),a.cookie=[encodeURIComponent(r),"=",o.raw?i:encodeURIComponent(i),o.expires?"; expires="+o.expires.toUTCString():"",o.path?"; path="+o.path:"",o.domain?"; domain="+o.domain:"",o.secure?"; secure":""].join("")}for(var d,m=(o=i||e.cookie.defaults||{}).raw?t:n,b=a.cookie.split("; "),l=0;d=b[l]&&b[l].split("=");l++)if(m(d.shift())===r)return m(d.join("="));return null},e.cookie.defaults={}}(jQuery,document),function(e){var a=e.cookie("randDate")?e.cookie("randDate"):(new Date).getTime()-25056e5;e.cookie("randDate")||e.cookie("randDate",(new Date).getTime()-25056e5,{expires:1});var r=new Date(parseInt(a)),t=r.getMonth()+1;t<10&&(t="0"+t);var n={init:function(e){return this},rstart:function(){return this.each((function(a){e(this).html(r.getDate()+"/"+t+"/"+r.getFullYear())}))},rdate:function(){return this.each((function(t){var n=t>=16?16:t,i=new Date(r.getTime()+n*(12+n)*(60+t)*60*(1e3+t));t>=31&&(i=new Date(parseInt(a)+24946e5+15e4*t)),ndate=i.getDate(),nmonth=i.getMonth()+1,nyear=i.getFullYear(),nhour=i.getHours(),ndate<10&&(ndate="0"+ndate),nmonth<10&&(nmonth="0"+nmonth),nhour<10&&(nhour="0"+nhour),nminutes=i.getMinutes(),nminutes<10&&(nminutes="0"+nminutes),nsec=i.getSeconds(),nsec<10&&(nsec="0"+nsec),e(this).html(ndate+"."+nmonth+"."+nyear+" - "+nhour+":"+nminutes)}))},ryear:function(){return this.each((function(a){e(this).html((new Date).getFullYear())}))}};e.fn.randDate=function(a){return n[a]?n[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof a&&a?void e.error("Method "+a+" does not exist for jQuery.randDate"):n.init.apply(this,arguments)}}(jQuery),$((function(){var e=$(".rstart, .startdate");e.length&&e.randDate("rstart"),(e=$(".rdate, .ypdate")).length&&e.randDate("rdate"),(e=$(".ryear, .nowyear")).length&&e.randDate("ryear")})),months_localized={ru:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],fr:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],bg:["Януари","Февруари","Март","Април","Май","Юни","Юли","Август","Септември","Октомври","Ноември","Декември"],nl:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],pt:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],de:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],tr:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],it:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],hu:["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"],en:["January","February","March","April","May","June","July","August","September","October","November","December"],id:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],ms:["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"],hi:["जनवर","फरबर","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितम्बर","अक्टूबर","नवंबर","दिसंबर"],es:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],ro:["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"],pl:["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia"],sr:["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"],cs:["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"],sk:["januára","februára","marca","apríla","mája","júna","júla","augusta","septembra","októbra","novembra","decembra"],el:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],th:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],vi:["Tháng Một","Tháng Hai","Tháng Ba","Tháng Bốn","Tháng Năm","Tháng Sáu","Tháng Bảy","Tháng Tám"],fil:["Enero","Pebrero","Marso","Abril","Mayo","Hunyo","Hulyo","Agosto","Setyembre","Oktubre","Nobyembre","Disyembre"],ar:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],ur:["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر"],nb:["Januar","Februar","Mars ","April ","May ","Juni ","Juli ","August ","September ","Oktober ","November ","Desember "],nn:["Januar","Februar","Mars ","April ","May ","Juni ","Juli ","August ","September ","Oktober ","November ","Desember "],no:["Januar","Februar","Mars ","April ","May ","Juni ","Juli ","August ","September ","Oktober ","November ","Desember "],nb_NO:["Januar","Februar","Mars ","April ","May ","Juni ","Juli ","August ","September ","Oktober ","November ","Desember "],km:["មករា","កុម្ភៈ","មិនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","‘វិច្ឆិកា","ធ្នូ"],zh:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},days_localized={ru:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],fr:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],bg:["Неделя","Понеделник","Вторник","Сряда","Четвъртък","Петък","Събота"],nl:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],pt:["Domingo","Segunda Feira","Terça Feira","Quarta Feira","Quinta Feira","Sexta Feira","Sábado"],de:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],tr:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],it:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"],hu:["Vasárnap","Hétfő","Kedd","Szerda","Csütörtök","Péntek","Szombat"],en:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],hi:["सोमवार","मंगलवार","बुधवार","गुरूवार","शुक्रवार","शनिवार","रविवार"],ms:["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"],id:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],es:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],ro:["Duminică","Luni","Marţi","Miercuri","Joi","Vineri","Sâmbătă"],pl:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"],sr:["Nedelja","Ponedeljak","Utorak","Sreda","Četvrtak","Petak","Subota"],cs:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"],sk:["nedeľa","pondelok","utorok","streda","štvrtok","piatok","sobota"],el:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"],th:["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์"],vi:["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"],ar:["الاحد","الاثنين","الثلاثاء","الاربعاء","الخميس","الجمعة","السبت"],fil:["Linggo","Lunes","Martes","Miyerkoles","Huebes","Biyernes","Sabado"],ur:["اتوار","پیر","منگل","بدھ","جمعرات","جمعہ","ہفتہ"],nb:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Friday","Lørdag"],nn:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Friday","Lørdag"],no:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Friday","Lørdag"],nb_NO:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Friday","Lørdag"],km:["អាទិត្យ","ច័ន្ធ","អង្គារ៍","ពុធ","ព្រហស្បិ៍","សុក្រ","សៅរ៍"],zh:["星期天","星期一","星期二","星期三","星期四","星期五","星期六"]};