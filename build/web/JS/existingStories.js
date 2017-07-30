
//This creates the story 
var i = 0;
var j = 0;
var IDNO = 0;
var counter = 0;
var counterstory = 0;
var t = 1;

function storyCard(existingstories) {

//sets the amount of story cards to be created
    for (var p = 0; p < existingstories.length; p++) {

//creates an object for the individual stories
        var emp = existingstories[p];
        


//creates the div as the container for the story card
        var newDiv = document.createElement("div");
        newDiv.setAttribute("id", emp.storyid);
        newDiv.setAttribute("class", "storycard");
        newDiv.setAttribute("draggable", true);
        newDiv.setAttribute("ondragstart", "drag(event)");
        newDiv.setAttribute("drop", "false");

//****************************
//Dates for the top of the card

// Creats a new DIV for the Dates for the top of the storycard
        var dateDiv = document.createElement("div");
        dateDiv.setAttribute("id", "date");
        var dateDivc = document.createElement("div");
        dateDivc.setAttribute("id", "datecreated");
        var dateDivl = document.createElement("div");
        dateDivl.setAttribute("id", "lastupdated");
        var adminDiv = document.createElement("div");
        adminDiv.setAttribute("id", "admindiv");
//+++++++++++++++++++++++++++
//Last updated
        var cdate = document.createTextNode("created:" + emp.createdate);
// Last created 
        var ldate = document.createTextNode("Last mod:" + emp.lastupdate);

// Admin button that allows to archieve the story.

        var admin = document.createElement("div");
        admin.setAttribute("id", emp.storyid);
        admin.setAttribute("class", "dropdown");
        admin.setAttribute("drop", "false");
        admin.setAttribute("draggable", "false");
        newDiv.appendChild(admin);

        var button = document.createElement("button");
        button.type = "button";
        button.id = emp.storyid + " storyadmin ";
        button.class = "dropbtn";
        var txt = document.createTextNode("**");
        button.appendChild(txt);
        button.onclick = function () {
            var IDNUM = $(this).parent().attr("id");

            document.getElementById("myDropdown" + IDNUM).classList.toggle("show");
        };

// Close the dropdown if the user clicks outside of it
        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn')) {

                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }

        };
        admin.appendChild(button);

        var drop = document.createElement("div");
        drop.setAttribute("id", "myDropdown" + emp.storyid);
        drop.setAttribute("class", "dropdown-content");


        newlink = document.createElement('a');
        newlink.setAttribute('class', 'deleteButton');
        newlink.setAttribute('data-toggle',"dropdown");
        var ID = $(this).parent().attr("id");
//        newlink.onclick = function () {
//            removeStoryCard(ID);
//            location.reload();
//        };
        var link1 = document.createTextNode("Delete");
        newlink.appendChild(link1);
        drop.appendChild(newlink);
        admin.appendChild(drop);


//**************************************

//creating the top div for created date , last updated and admin button  
        dateDivc.appendChild(cdate);
        dateDivl.appendChild(ldate);
        adminDiv.appendChild(admin);
        newDiv.appendChild(dateDivc);
        newDiv.appendChild(dateDivl);
        newDiv.appendChild(adminDiv);

//Last updated 
        var cdate = document.createTextNode(emp.datecreated);
// Last created 
        var ldate = document.createTextNode(emp.lastupdate);

//**************************************                
//          story name output
//************************************** 
// 
//creates a container div  
        var inputStoryDiv = document.createElement("div");
        inputStoryDiv.setAttribute("id", "inputStoryDiv");
        inputStoryDiv.setAttribute("drop", "false");
        inputStoryDiv.setAttribute("draggable", "false");
//creates a the element 
        var inputstatus = document.createElement("input");
        inputstatus.setAttribute("drop", "false");
        inputstatus.setAttribute("draggable", "false");
        inputstatus.setAttribute("ID", emp.storyid + "storyname");
        inputstatus.setAttribute("class", "storyname");
        inputstatus.setAttribute("type", "text");
//adds the element to the container than the story card.
        inputStoryDiv.appendChild(inputstatus);
        newDiv.appendChild(inputStoryDiv);

//**************************************  
//          story notes output
//**************************************  

        var storyNotesDiv = document.createElement("div");
        storyNotesDiv.setAttribute("id", "StoryNoteDiv");
//creates a the element 
        storyNotesDiv.setAttribute("drop", "false");
        storyNotesDiv.setAttribute("draggable", "false");
        var storyNote = document.createElement("input");
        storyNote.setAttribute("drop", "false");
        storyNote.setAttribute("draggable", "false");
        storyNote.setAttribute("ID", emp.storyid + "storynotes");
        storyNote.setAttribute("class", "storynotes");
//adds the element to the container than the story card.
        storyNotesDiv.appendChild(storyNote);
        newDiv.appendChild(storyNotesDiv);


//*************************************************
//           Changes the Div based on the bug 
//************************************************

        var bugDiv = document.createElement("div");
        bugDiv.setAttribute("id", "bugDiv");
//bug image 1
        var bugimg1 = document.createElement("IMG");
        bugimg1.src = "pic/bug1.png";
        bugimg1.id = "bugImage" + emp.storyid;
        bugimg1.style.height = '45px';
        bugimg1.style.width = '45px';
        bugimg1.setAttribute("class", "bug1");

//hidden 
        var bugInput = document.createElement("input");
        bugInput.setAttribute("id", emp.storyid + "bugInput");
        bugInput.setAttribute("class", "bugInput");
        bugInput.value = emp.storybug;
        bugInput.style.display = "none";
     


        bugDiv.appendChild(bugimg1);
        bugDiv.appendChild(bugInput);



//*************************************************
//           Changes the Div based on the Swarm 
//************************************************

// div container for bug area
        var swarmDiv = document.createElement("div");
        swarmDiv.setAttribute("id", "swarm");

        var img1swarm = document.createElement("IMG");
        img1swarm.src = "pic/swarm1.png";
        img1swarm.id = "ImageSwarm" + emp.storyid;
        img1swarm.style.height = '45px';
        img1swarm.style.width = '45px';
        img1swarm.setAttribute("class", "swarm1");
        swarmDiv.appendChild(img1swarm);


// onlick image2 appears
        var img2swarm = document.createElement("IMG");
        img2swarm.src = "pic/swarm2.png";
        img2swarm.id = "ImageSwarm" + emp.storyid;
        img2swarm.style.height = '45px';
        img2swarm.style.width = '45px';
        img2swarm.style.display = "none";
        img2swarm.setAttribute("class", "swarm2");
        swarmDiv.appendChild(img2swarm);

// value
        var swarmInput = document.createElement("input");
        swarmInput.setAttribute("id", emp.storyid + "swarmInput");
        swarmInput.setAttribute("class", "swarmInput");
        swarmInput.value = emp.swarm ;
        swarmInput.style.display = "none";
        

        swarmDiv.appendChild(swarmInput);


//*************************************************
//             happy and sad faces
//*************************************************
        var happyFaceDiv = document.createElement("div");
        happyFaceDiv.setAttribute("id", "happyFaceDiv");

        var happyFace = document.createElement("IMG");
        happyFace.src = "pic/happyface.png";

        happyFace.id = "happyFace" + emp.storyid;
        happyFace.setAttribute("class", "happyFace");
        happyFace.style.height = '45px';
        happyFace.style.width = '45px';
        happyFaceDiv.appendChild(happyFace);

        var sadFaceDiv = document.createElement("div");
        sadFaceDiv.setAttribute("id", "sadFaceDiv");
        var sadFace = document.createElement("IMG");
        sadFace.src = "pic/sadface.png";
        sadFace.id = "sadFace" + emp.storyid;
        sadFace.setAttribute("class", "sadFace");
        sadFace.style.height = '45px';
        sadFace.style.width = '45px';
        sadFaceDiv.appendChild(sadFace);

//*************************************************
// Button holder for buttons on right story card 
//*************************************************
        var buttonHolder = document.createElement("div");
        buttonHolder.setAttribute("id", "buttonHolder");
        buttonHolder.appendChild(happyFaceDiv);
        buttonHolder.appendChild(sadFaceDiv);
        buttonHolder.appendChild(bugDiv);
        buttonHolder.appendChild(swarmDiv);


        newDiv.appendChild(buttonHolder);
//**************************************************
//              Div container for Profiles user 1,2 and 3 
//**************************************************
        var profileContainer = document.createElement("div");
        profileContainer.setAttribute("id", "profileContainer");
//
//**************************************************
//              Div container user 1,2 and 3 
//**************************************************

        var user1Div = document.createElement("div");
        user1Div.setAttribute("id", "user1div");

        var user2Div = document.createElement("div");
        user2Div.setAttribute("id", "user2div");

        var user3Div = document.createElement("div");
        user3Div.setAttribute("id", "user3div");



        newDiv.appendChild(profileContainer);
        profileContainer.appendChild(user1Div);
        profileContainer.appendChild(user2Div);
        profileContainer.appendChild(user3Div);
//***************************************************
//             USER1 task and picture 
//***************************************************


//Create array of options to be added
        var array = ["", "DEV", "AUTO", "QA", "RESEARCH"];

//User1 - create the slection element
        var selectList1 = document.createElement("select");
        selectList1.setAttribute("id", emp.storyid + "user1Task");
        selectList1.setAttribute("class", "user1Task");
        user1Div.appendChild(selectList1);



//append array of options to the user task 
        for (var i = 0; i < array.length; i++) {
            var option = document.createElement("option");
            option.setAttribute("value", array[i]);
            option.text = array[i];
            selectList1.appendChild(option);
        }

//USER 1 - store user's 1 picture
        var user1pic = document.createElement("div");
        user1pic.setAttribute("id", emp.storyid + "user1pic");
        user1pic.setAttribute("class", "profilepicsholder");
        user1pic.setAttribute("ondrop", "true");
        user1pic.setAttribute("ondragover", "true");

        user1pic.style.height = '75px';
        user1pic.style.width = '75px';

// Appends both slection list and the user picture to user 1 Div
        user1Div.appendChild(user1pic);



//***************************************************
//             USER2 -  task and picture 
//***************************************************


//Create and append select list
        var selectList2 = document.createElement("select");
        selectList2.setAttribute("id", emp.storyid + "user2Task");
        selectList2.setAttribute("class", "user2Task");


//Create and append the options
        for (var i = 0; i < array.length; i++) {
            var option = document.createElement("option");
            option.setAttribute("value", array[i]);
            option.text = array[i];
            selectList2.appendChild(option);
        }
        $(inputstatus).val(emp.storynotes);

//store area for user 2 picture
        var user2pic = document.createElement("div");
        user2pic.setAttribute("id", emp.storyid + "user2pic");
        user2pic.setAttribute("class", "profilepicsholder");

//appends user task and picture to the user2 Div
        user2Div.appendChild(selectList2);
        user2Div.appendChild(user2pic);


//***************************************************
//             USER3 - task and picture 
//***************************************************


//Create and append select list
        var selectList3 = document.createElement("select");
        selectList3.setAttribute("id", emp.storyid + "user3Task");
        selectList3.setAttribute("class", "user3Task");


//Create and append the array options
        for (var i = 0; i < array.length; i++) {
            var option = document.createElement("option");
            option.setAttribute("value", array[i]);
            option.text = array[i];
            selectList3.appendChild(option);
        }

//store area for user 3 picture
        var user3pic = document.createElement("div");
        user3pic.setAttribute("id", emp.storyid + "user3pic");
        user3pic.setAttribute("class", "profilepicsholder");


//appends user task and picture to the user3 Div
        user3Div.appendChild(selectList3);
        user3Div.appendChild(user3pic);




// This appends the story cards to the selected area
// ++++++++++++++++++++++++++++
//++++++++++++++
//++++++++++
        var column = emp.columstatus;
        document.getElementById(column).appendChild(newDiv);
       
         
//****************************************************************
//          adds the values from DB to fileds in story card              
//****************************************************************
// 
        document.getElementById(emp.storyid + 'storyname').value = emp.storyname;
        document.getElementById(emp.storyid + 'storynotes').value = emp.storynote;
        document.getElementById(emp.storyid + 'user1Task').value = emp.user1Task;
        document.getElementById(emp.storyid + 'user2Task').value = emp.user2Task;
        document.getElementById(emp.storyid + 'user3Task').value = emp.user3Task;
 
        if (emp.user1 !== "") {
            user1exiting = document.createElement("IMG");
            user1exiting.setAttribute("src", "https://www.gravatar.com/avatar/" + emp.user1 + "?d=identicon");
            user1exiting.setAttribute("class", "profilePicture");
            document.getElementById(emp.storyid + "user1pic").appendChild(user1exiting);
        }

        if (emp.user2 !== "") {
            user2exiting = document.createElement("IMG");
            user2exiting.setAttribute("src", "https://www.gravatar.com/avatar/" + emp.user2 + "?d=identicon");
            user2exiting.setAttribute("class", "profilePicture");
            document.getElementById(emp.storyid + "user2pic").appendChild(user2exiting);
        }
    
        if (emp.user3 !== "") {
            user3exiting = document.createElement("IMG");
            user3exiting.setAttribute("src", "https://www.gravatar.com/avatar/" + emp.user3 + "?d=identicon");
            user3exiting.setAttribute("class", "profilePicture");
            document.getElementById(emp.storyid + "user3pic").appendChild(user3exiting);
        }


//***************************************************
//             Save Button - onclick - saves changes made to storycard 
//***************************************************
            var savButtonCon = document.createElement("div");
            savButtonCon.setAttribute("id", "savButtonContainer");
            savButtonCon.setAttribute("drop", "false");
            savButtonCon.setAttribute("draggable", "false");

            var savebtn = document.createElement("button");
            savebtn.type = "submit";
            savebtn.setAttribute("class", "savButtonDiv");
            savebtn.id = emp.storyid + "submit-data";
            savebtn.class = "savebtn";
            savebtn.disabled = "false";

            savebtn.onclick = function () {
                var storyID = $(this).parent().parent().attr('id');
                var storyName = $(this).parent().parent().find('.storyname').val();
                var storyNotes = $(this).parent().parent().find('.storynotes').val();
                var user1Task = $(this).parent().parent().find('.user1Task').val();
                var user2Task = $(this).parent().parent().find('.user2Task').val();
                var user3Task = $(this).parent().parent().find('.user3Task').val();
                var storyBug = $(this).parent().parent().find('.bugInput').val();
                var swarm = $(this).parent().parent().find('.swarmInput').val();
                var column = $(this).parent().parent().parent().attr("id");
                
           
// there are two parts to this update. 
                updateP1(storyID, storyName, storyNotes, user1Task, user2Task, user3Task, storyBug, swarm, column);
            };

            var buttontxt = document.createTextNode("Save changes");
            savebtn.appendChild(buttontxt);
            savButtonCon.appendChild(savebtn);


//***************************************************
//             Revert Button - onclick - reverts changes 
//***************************************************

            // revert changes made  by users
            var revertBtn = document.createElement("button");
            revertBtn.setAttribute("class", "revertButtonDiv");
            revertBtn.type = "submit";
            revertBtn.id = emp.storyid + "revert-data";
            revertBtn.class = "revertbtn";
            revertBtn.disabled = "false";

            revertBtn.onclick = function () {
                location.reload();
            };
            
            var buttontxt = document.createTextNode("Revert changes");
            revertBtn.appendChild(buttontxt);
            savButtonCon.appendChild(revertBtn);
            newDiv.appendChild(savButtonCon);


            // Position - hidden fields - arreange the order of the div
            var positionInput = document.createElement("input");
            positionInput.setAttribute("id", emp.storyid + "position");
            var inputBugVal = document.createTextNode(emp.position);
            positionInput.style.display = "none";
            positionInput.appendChild(inputBugVal);
            newDiv.appendChild(positionInput);
         
// column area - hidden fields - arreange the order of the div
            var columnInput = document.createElement("input");
            columnInput.setAttribute("id", emp.storyid + "columInput");
            var columninput = document.createTextNode(emp.colum);
            columnInput.style.display = "none";
            columnInput.appendChild(columninput);
            newDiv.appendChild(columnInput);

    // depending storycard bug status value this applies bug class
      
        var storyid = emp.storyid;

        var inputBugVal = emp.storybug;
        if (inputBugVal === "1") {
            document.getElementById("bugImage"+storyid).src = "pic/bug2.png";
            document.getElementById(storyid).classList.add("bug");
        } 
        
        var inputSwarmVal = emp.swarm;
        if (inputSwarmVal === "1") {
            document.getElementById("ImageSwarm"+storyid).src = "pic/swarm2.png";
            document.getElementById(storyid).classList.add("swarm");
        }
    
    }

//========================================================
//  end of loop
//========================================================
// Delgate functionality for Hi lighting a selected Div 
        $(document).ready(function () {
            $("div").delegate("h1", "click", function () { });
        });


//****************************************************************************************************
//          Bug button -  onclick changes the class and the image bug on image.
//*****************************************************************************************************

//this allows the change in stat to the main div when the bug is clicked 
        $(".bug1").unbind('click').click(function () {
            var a = $(this).closest('img').attr('src');
            var b = "pic/bug1.png";
            if (a === b) {
                var id = $(this).parent().parent().parent().attr('id');
                $(this).parent().parent().parent().removeClass();
                $(this).parent().parent().parent().addClass("bug");
                $(this).attr("src", "pic/bug2.png");
                document.getElementById(id + "bugInput").value = "1";
//enables the save button

                $("#" + id).find("button#" + id + "submit-data").attr('disabled', null);
                $("#" + id).find("button#" + id + "revert-data").attr('disabled', null);

            } else {

                var id = $(this).parent().parent().parent().attr('id');
                $("#" + id).find("button#" + id + "submit-data").attr('disabled', null);
                $("#" + id).find("button#" + id + "revert-data").attr('disabled', null);

                $(this).parent().parent().parent().removeClass("bug");
                $(this).attr("src", "pic/bug1.png");
                document.getElementById(id + "bugInput").value = "0";
            }

        });
//****************************************************************************************************
//          Swarm button -  onclick changes the class and the image to be on.
//*****************************************************************************************************

//this allows the change in state to the main div when the SWARM is clicked 
        $(".swarm1").unbind('click').click(function () {
            var a = $(this).closest('img').attr('src');
            var b = "pic/swarm1.png";
            if (a === b) {
                $(this).parent().parent().parent().removeClass();
                var id = $(this).parent().parent().parent().attr('id');
                document.getElementById(id + "swarmInput").value = "1";
                $(this).parent().parent().parent().addClass("swarm");
                $("#" + id).find("button#" + id + "submit-data").attr('disabled', null);
                $("#" + id).find("button#" + id + "revert-data").attr('disabled', null);
                $(this).attr("src", "pic/swarm2.png");
                var a = "";
                var b = "";
            } else {
                $(this).parent().parent().parent().removeClass("swarm");
                $(this).attr("src", "pic/swarm1.png");
                //changes hidden swarm input 
                var id = $(this).parent().parent().parent().attr('id');
                document.getElementById(id + "swarmInput").value = "0";
                $("#" + id).find("button#" + id + "submit-data").attr('disabled', null);
                $("#" + id).find("button#" + id + "revert-data").attr('disabled', null);
            }
        });

//****************************************************************************************************
//          Save changes button - Disable - if there a change on the storycard disable is than false allowing user to save changes
//*****************************************************************************************************


        var parent;


// this gets the element the user clicks on
        this.onclick = function () {

            if (event.target.parentElement.parentElement.id !== '') {
                parent = event.target.parentElement.id;
            }

            if (typeof parent !== 'number' && (parent % 1) !== 0) {
                parent = event.target.parentElement.parentElement.id;
            }

            if (typeof parent !== 'number' && (parent % 1) !== 0) {
                parent = event.target.parentElement.parentElement.parentElement.id;
            }

            if (parent > 0) {

// If a change is made to the story card save button appears
                $('#' + parent).each(function () {
                    $(this).data('serialized', $(this).serialize());
                }).on('change input', function () {

                    if ($(this).serialize() !== false) {

                        $(this).find('input:submit, button:submit').attr('disabled', $(this).serialize() !== $(this).data('serialized'));
                    }
                });
            }
        };


//**************** if onclick happy face nput new value to input ************


        $(".happyFace").click(function () {
            parent = event.target.parentElement.parentElement.parentElement.id;
            document.getElementById(parent + "storynotes").value = "Story will be completed on time as mention in scrum";

            $("#" + parent).find("button#" + parent + "submit-data").attr('disabled', null);
            $("#" + parent).find("button#" + parent + "revert-data").attr('disabled', null);
        });

        $(".sadFace").click(function () {
            parent = event.target.parentElement.parentElement.parentElement.id;
            document.getElementById(parent + "storynotes").value = "Issues!! - possible delays ";

            $("#" + parent).find("button#" + parent + "submit-data").attr('disabled', null);
            $("#" + parent).find("button#" + parent + "revert-data").attr('disabled', null);

        });
        
        
        
   

    }

