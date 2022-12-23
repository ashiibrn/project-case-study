
        function show_hide(){
            if(document.getElementById("showz").clicked==true){
                document.getElementById("yessir").style.display;
            }

            else{
                document.getElementById("allizwell").style.display = 'inline';
                //document.getElementById("myButton").style.display = 'block';
                document.getElementById("dispx").innerHTML = "   ";
            }
        }

        function sadz(){
            if(document.getElementById("hidez").clicked==true){
            document.getElementById("yessir").innerHTML = "Hmp, sad :<<";
            }

            else{
                document.getElementById("allizwell").style.display='none';
                document.getElementById("dispx").innerHTML = "Buti naman";
            }
        }
        var objPeople = [
            {
                username: "HAYS"
            },
            {
                username: "BRENT"
            },
            {
                username: "YNDREW"
            },
            {
                username: "DANIEL"
            },
            {
                username: "LUKE"
            },
            {
                username: "TRISTAN"
            },
            {
                username: "OLIVER"
            },
            {
                username: "JOHN"
            },
            {
                username: "CARL"
            },
            {
                username: "JONATHAN"
            },
            {
                username: "GODWIN"
            },
            {
                username: "ALEXANDER"
            },
            {
                username: "EARLON"
            },
            {
                username: "LORENZO"
            },
            {
                username: "ADRIAN"
            },
            {
                username: "KACEY"
            },
            {
                username: "JARON"
            },
            {
                username: "BRENTSEAN"
            },
            {
                username: "RAMCES"
            },
            {
                username: "AARON"
            },
            {
                username: "GABRIEL"
            },
            {
                username: "SCOTTNHALD"
            },
            {
                username: "RAY"
            },
            {
                username: "ALLEN"
            },
            {
                username: "KING"
            },
            {
                username: "REIMAR"
            },
            {
                username: "JAN"
            },
            {
                username: "ANDREW"
            },
            {
                username: "CHRISTIAN"
            },
            {
                username: "KURT"
            },
            {
                username: "LOUIS"
            },
            {
                username: "TOLEDANO"
            },
            {
                username: "TECHNICAL"
            },
            {
                sir: "JAMES"
            },
            {
                sir: "BRYAN"
            },
            {
                sir: "JB"
            }
        ]
        const inp = document.getElementById("username");

        inp.addEventListener("input", ()=>{
            inp.value = inp.value.toUpperCase();
        })

        function clickerist(){
            
            var username = document.getElementById("username").value;
            var sir = document.getElementById("username").value;
            //console.log();
            //document.getElementById("myPar").innerHTML = "Hello " + username;

            for(i = 0; i < objPeople.length; i++) {
                if(username == objPeople[i].username){
                    console.log("hello " + username)
                    document.getElementById("myPar").innerHTML = "HELLO " + username + "!"
                    document.getElementById("allnotwell").style.display = 'inline'
                    return
                }
                else if(sir == objPeople[i].sir){
                    console.log("Hello Sir " + sir)
                    document.getElementById("myPar").innerHTML = "HELLO SIR " + sir + "!"
                    document.getElementById("allnotwell").style.display = 'inline'
                    return
                }
            }
            console.log("you are not allowed here")
            document.getElementById("myPar").innerHTML = "Sorry! But you are not allowed here!"
        }

        function thizbutz(){
            document.location.href="main.html";
        }

        function thatbutz(){
            document.getElementById("myPar").innerHTML = "Aww, I've been waiting for you."
        }