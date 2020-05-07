        //main sections
        const entryPage = document.querySelector("#entryPage");
        const infoPage = document.querySelector("#infoPage");
        //input values
        const name = document.querySelector("#name");
        const dateOfbarth = document.querySelector("#date");

        //warning text
        const warning = document.querySelector("#warning");
        //gritting message
        const gritting = document.querySelector("#gritting");
        //calculation value
        const year = document.querySelector("#year");
        const month = document.querySelector("#month");
        const week = document.querySelector("#week");
        const day = document.querySelector("#day");
        const hour = document.querySelector("#hour");
        const minut = document.querySelector("#minut");
        const second = document.querySelector("#second");
        //countdown section
        const upcommingbirthday = document.querySelector("#upcommingbirthday");
        const countdown = document.querySelector("#countdown");

        //switchimg function
        function Switching(){
            //data validation
            if (name.value !== '' && date.value !== '') {
                // permission granted
                entryPage.style.visibility = "hidden";
                infoPage.style.visibility = "visible";
                warning.style.visibility = "hidden";
                upcommingbirthday.style.visibility = "visible";
                DateAndTime();
            } else {
                //permission denied
                warning.style.visibility = "visible";
            }
        }

        //geting date and time
        function DateAndTime() {
            var dateofbarth = new Date(dateOfbarth.value);
            var year = dateofbarth.getFullYear();
            var month = (dateofbarth.getMonth()) + 1; // + 1
            var day = dateofbarth.getDate();
            Calculate( year, month, day );
        }
        //Calculation part
        function Calculate(year, month, day) {
            var today = new Date();
            var Pyear = today.getFullYear();
            var Pmonth = (today.getMonth()) + 1; // +1
            var Pdate = today.getDate();
            var Phour = today.getHours();
            var Pminute = today.getMinutes();
            var Psecond = today.getSeconds();
        //Greeting section
            if (Phour >= 4 && Phour <=12) {
                gritting.innerHTML = `Good morning ${name.value}!`;
            } else if (Phour >= 12 && Phour <=17) {
                gritting.innerHTML = `Good afternoon ${name.value}!`;
            } else if (Phour >= 17){
                gritting.innerHTML = `Good evening ${name.value}!`;
            } else {
                gritting.innerHTML = `Hi ${name.value}!`;
            }
            // data manupulation
            var MPPyear;
            var MPPmonth;
            var MPPdate;         
            if ( Pmonth <= month && Pdate <= day ) {
                MPPdate = Pdate + 30.436875;
                MPPmonth = Pmonth + 12;
                MPPyear = Pyear - 1;
            } else if ( Pmonth < month && Pdate >= day ) {
                MPPdate = Pdate;
                MPPmonth = Pmonth + 12;
                MPPyear = Pyear - 1;
            } else if ( Pdate < day && Pmonth > month) {
                MPPdate = Pdate + 30.436875;
                MPPmonth = Pmonth - 1;
                MPPyear = Pyear;
            } else{
                MPPyear = Pyear;
                MPPmonth = Pmonth;
                MPPdate = Pdate;
            }
            // calculation section
                    var CalcedYear = parseInt(MPPyear - year);
                    var CalcedMonth = parseInt((CalcedYear * 12) + ( MPPmonth - month )) ;
                    var Calcedday = parseInt((CalcedMonth * 30.436875) + (MPPdate - day));
                    var SplCalcedday = Calcedday.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    var Totalweek = parseInt(Calcedday / 7);
                    var SplTotalweek = Totalweek.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    var Calcedhour = parseInt(Calcedday * 24);
                    var SplCalcedhour = Calcedhour.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    var Calcedminutr = parseInt(Calcedhour * 60);
                    var SplCalcedminutr = Calcedminutr.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    var Calcedsecond = parseInt(Calcedminutr * 60);
                    var SplCalcedsecond = Calcedsecond.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    Printingdata(CalcedYear, CalcedMonth, SplTotalweek, SplCalcedday, SplCalcedhour, SplCalcedminutr, SplCalcedsecond );
                    var Month = parseInt(MPPmonth - month);
                    var Day = parseInt(MPPdate - day);
                    correntAge( CalcedYear, Month, Day, Phour, Pminute, Psecond );
        }

        //display section
        function Printingdata(CalcedYear,  CalcedMonth, SplTotalweek, SplCalcedday, SplCalcedhour, SplCalcedminutr, SplCalcedsecond ) {
            year.innerHTML = ` ${CalcedYear} `;
            month.innerHTML = ` ${CalcedMonth} `;
            week.innerHTML = ` ${SplTotalweek} `;
            day.innerHTML = ` ${SplCalcedday} `;
            hour.innerHTML = ` ${SplCalcedhour} `;
            minut.innerHTML = ` ${SplCalcedminutr} `;
            second.innerHTML = ` ${SplCalcedsecond} `;
        }
        //upcomming birthday
        function correntAge( CalcedYear, Month, Day, Phour, Pminute, Psecond ) {
            countdown.innerHTML = `| ${CalcedYear} Years , ${Month} Months , ${Day} Day old |`;
        }
        
