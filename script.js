const content = {
    projects: {

        section1: `
        <h3>Project One</h3>
                       <p>Use of Productivity Tools Google Sheet and Microsoft PowerBi to Analyse Data</p>
                   </div>
                   <div class="project">
                       <h3>Project Two</h3>
                       <p>Use Of Productivity Tool google slide for project presentation ...</p>
        <ul>
            <li> <a href="https://github.com/Tshos2020/FCB-PROJECT-DOCUMENTATION"> Click to View Project Documentation on Github </a>
    </li>
        </ul>
    
    `,
    section2: `
    <div class="main-image">
        <img id="mainImg" src="OIP.jpg" alt="Main Image">
    </div>
    <div class="thumbnail-container">
        <img class="thumbnail" src="Bi.png" alt="Thumbnail 1" onclick="changeImage('Bi.png')">
        <img class="thumbnail" src="R.jpg" alt="Thumbnail 2" onclick="changeImage('R.jpg')">
        <img class="thumbnail" src="IMG1.jpg" alt="Thumbnail 3" onclick="changeImage('IMG1.jpg')">
        <img class="thumbnail" src="IMG2.jpg" alt="Thumbnail 4" onclick="changeImage('IMG2.jpg')">
        <img class="thumbnail" src="pic1.PNG" alt="Thumbnail 5" onclick="changeImage('pic1.PNG')">
    </div>
    
</div>


<section class="contact">
    <h2>Contact</h2>
    <p> <img class="hut" src="Lnk.png"><a href="https://www.linkedin.com/in/tubosun-sotunde-7877a2202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <b>-LinkedIn-</b></a>    </p>
    <p><img class="hut" src="Gm.png"><a href="mailto:Sotundeadelan@gmail.com"> <b>-Mail Me-</b> </a> </p>
    <p><img class="hut" src="Sm.png"> <a href="https://wa.me/message/JDHGW3NADRTIG1"> <b>-WhatsApp Messenger-</b> </a></p>
</section>

<footer>
    <p>&copy; 2024 Sotunde Olatubosun. All rights reserved.</p>
</footer>
`
    }
       ,
    certificates:{ 
        section1: `
        <h3>Certificate One</h3>
                       <p>B.sc Computer Science</p>
                   </div>
                   <div class="project">
                       <h3>Certificate Two</h3>
                       <p>CyberSecurity Certificate of Completion</p>
       
    
    `,
    section2: `
         <div class="main-image">
            <img id="mainImg" src="OIP.jpg" alt="Main Image">
        </div>
        <div class="thumbnail-container">
            <img class="thumbnail" src="dsst.PNG" alt="Thumbnail 1" onclick="changeImage('dsst.PNG')">
            <img class="thumbnail" src="nscct.PNG" alt="Thumbnail 2" onclick="changeImage('nscct.PNG')">
            <img class="thumbnail" src="nsst.PNG" alt="Thumbnail 3" onclick="changeImage('nsst.PNG')">
            <img class="thumbnail" src="scct.PNG" alt="Thumbnail 4" onclick="changeImage('scct.PNG')">
           
        </div>
        
    </div>
    

    <section class="contact">
        <h2>Contact</h2>
        <p> <img class="hut" src="Lnk.png"><a href="https://www.linkedin.com/in/tubosun-sotunde-7877a2202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <b>-LinkedIn-</b></a>    </p>
        <p><img class="hut" src="Gm.png"><a href="mailto:Sotundeadelan@gmail.com"> <b>-Mail Me-</b> </a> </p>
        <p><img class="hut" src="Sm.png"> <a href="https://wa.me/message/JDHGW3NADRTIG1"> <b>-WhatsApp Messenger-</b> </a></p>
    </section>

    <footer>
        <p>&copy; 2024 Sotunde Olatubosun. All rights reserved.</p>
    </footer>
    `,
    }
};



function changeImage(src) 
{
   document.getElementById('mainImg').src = src;
}

function changeContent(section) {
    event.preventDefault(); // Prevent the default link behavior
   
    const container1 = document.getElementById('content-contain');
    const container2 = document.getElementById('content-container');
    
    container1.innerHTML = content[section].section1;
    container2.innerHTML = content[section].section2;
}

// Initialize with the default content
changeContent('projects');

