<template>
    <div class="page">
    <NavBar/>
        <div>
            <div class="q_par">
            <div id="q_text"> 
                <div id="text1" ><h1>Feel Free To Send Us A Message About <br> Your Website Needs</h1></div>
                <div id="text2"><h4>For more details you can connect on Social Media</h4></div>
                <div id="text3"><h3>For any enquiry, Call Us:   
                    <img id="q_callbutton" src="https://cdn-icons-png.flaticon.com/512/3616/3616215.png" alt="call symbol">    
                    63888-03321
                </h3></div>     
            </div>
            <div id="q_space"></div>
             <div id="socialmedia">
                <a  href="https://www.instagram.com/katiyar_priyank/"><img src="https://cdn-icons-png.flaticon.com/512/3938/3938036.png" alt="Instagram Image" id="insta"></a>
                <a  href="https://www.twitter.com/PriyankKatiyar9?t=kOurPWyiun7MNIIJ0w&s=09"><img src="https://cdn-icons-png.flaticon.com/512/1409/1409937.png" alt="Twitter Image" id="twitter"></a>
                <a  href="https://www.linkedin.com/in/priyank-katiyar-b78347194/"><img src="https://cdn-icons-png.flaticon.com/512/1409/1409945.png" alt="Linked Image" id="li"></a>
                <a  href="https://wa.me/916388803221"><img src="https://cdn-icons-png.flaticon.com/512/3938/3938041.png" alt="Whatsapp image" id="whtsap"></a>
            </div>
        </div>
    
        <div>
            <footer class="footer"><span>©Copyright 2022 All Rights Reserved.</span>
                <span>Designed by: <span id="dname">Priyank Katiyar</span></span>
            </footer>
        </div>
    </div>
    </div>
    </template>
    
    
    <script>
    import NavBar from '../components/NavBar.vue'
    export default {
        components:{
            NavBar
        }
    }
    </script>
    
    <style scoped>
    .q_par{
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgb(49, 49, 49);
        background-color: antiquewhite;  
        padding: 8%;
        height: 60vh;
    }
    #q_callbutton{
        height: 20px;
        border: red solid 0.5px;
        border-radius: 100px;
    }
    #q_space{
        flex-grow: 0.6;
    }
    #fb,#insta,#twitter,#li,#whtsap{
        padding: 5px;
        height: 80px;
        margin: 3px;
    }
    #socialmedia{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        
    }
    .footer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        
    }
    #text1,#text2,#text3{
        margin:10px;
    }
    </style>