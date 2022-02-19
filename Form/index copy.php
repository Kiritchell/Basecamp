<?php
if($_POST["message"]) {
    mail("kiritchell@gmail.com", "Form to email message", $_POST["message"], "From: an@email.address");
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lubbock Run Club</title>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
      <form class="form" action="mailto:kiritchell@gmail.com" method=”POST"
      enctype=”multipart/form-data”
      name=”EmailForm”>
        <h1 class="title">Join The Lubbock Run Club</h1>
        <p><u>Contact</u></p>
        <p class="contactinfo"> First Name:<input class="nameinput" type="text" name="name" maxlength="20" required /> </p>
        <p class="contactinfo">Last Name:<input class="nameinput" type="text" name="name" maxlength="20" /></p>
        <p class="contactinfo">Email:<input class="emailinput" type="text" name="name" maxlength="20" required /></p>
        <p><u>Emergency Contact</u></p>
        <p class="contactinfo"> First Name:<input class="nameinput" type="text" name="name" maxlength="20" required /> </p>
        <p class="contactinfo">Last Name:<input class="nameinput" type="text" name="name" maxlength="20" /></p>
        <p class="contactinfo">Email:<input class="emailinput" type="text" name="name" maxlength="20" required /></p>

        <p>
          Select your personal racer type. <br>
          <i>Hermes(no modification) | Athena (women 175 pounds +) | Posidon (men 200 pounds +) </i><br>
          <input type="radio" name="racertype" value="hermes" /> Hermes
          <input type="radio" name="racertype" value="athena" /> Athena
          <input type="radio" name="racertype" value="poseidon" /> Poseidon
        </p>
        <p>
          Select your preferred run start times.
          <br />
          <input type="checkbox" name="time" value="8" />8 AM
          <input type="checkbox" name="time" value="10" />10 AM
          <input type="checkbox" name="time" value="12" />12 PM
        </p>
        
        <p>
         What's your favorite course you've done in Lubbock?
          <select class="drop" name="courses">
            <option value="disabled" disabled selected hidden>Choose course...</option>
            <option value="MackenziePark">Mackenzie Park</option>
            <option value="Dunbar">Dunbar</option>
            <option value="Tech & Broadway">Tech & Broadway</option>
            <option value="West Lubbock">West Lubbock</option>
          </select>
        </p>
        <p>
          Membership Option<br>
          <p class="memtype">Pro Level Membership includes permanent race bib, automatic entry to all races, 2 tickets to race gala and official running t-shirt. <br>
          Basic Level Membership allows you to run every race once you pay the race entry free. <br></p>
          <input type="radio" name="membership" value="pro"> Pro
          <input type="radio" name="membership" value="Basic"> Basic
        </p>
        <p>
          Any additional comments to add to this form?</p>
          <textarea
            name="comments"
            rows="5"
            columns="200"
            placeholder="Type comments here!"
          ></textarea>
       
      
          <br>
    
          <input class="submit" type="submit" name="google"></input>
        </form>
  </body>
</html>
