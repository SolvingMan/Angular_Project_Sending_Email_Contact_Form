Sending Email on Angular Firebase Project Contac Form
------------------------------------------------------------------------------------------------------------------------------------
This Project shows how to send email via smtp2go on Angular Firebase Project

Getting started
-------------------------------------------------------------------------------------------------------------------------------------
1.Go to project folder and install dependencies:
  npm install
2.Launch development server, and open localhost:4200 in your browser:
  ng serve
  
Code scaffolding
--------------------------------------------------------------------------------------------------------------------------------------
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Build

-------------------------------------------------------------------------------------------------------------------------------------
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Create API key on smtp2go
-------------------------------------------------------------------------------------------------------------------------------------
1.SignUp/Login to https://app.smtp2go.com/

2.Create API key with your Email
  go to Settings/API keys and Create your own API key.
  
3.Copy your own API key.(with copy full key)

Add the Code to your Project.
---------------------------------------------------------------------------------------------------------------------------------------
1.add the code to your componet.html
      <section>
          <h2>Get in touch</h2>
  
          <div class="fields">
            <div class="field half">
              <input type="text" name="name" id="name" required [(ngModel)]="name" placeholder="Name" />
            </div>
            <div class="field half">
              <input type="email" name="email" id="email"  required [(ngModel)]="email"  placeholder="Email" />
            </div>
            <div class="field">
              <textarea name="message" id="message" required [(ngModel)]="message" placeholder="Message"></textarea>
            </div>
          </div>
          <ul>
            <button type="button" value="Send" class="primary" (click)="sendEmailWithCode()">submit</button>
          </ul>
        </section>
2.add this code to your component.ts 

     sendEmailWithCode(email, code) {
      let to = "Client <" + email + ">";
      let text = "Your access code is " + code;
      fetch('https://api.smtp2go.com/v3/email/send', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      "api_key": "api-ECC1D49AA46711E89D0AF23C91C88F4E",
      "to": [to],
      "sender": "Abiltar VR <info@icomputinglabs.in>",
      "subject": "This is just test case. Your Access Code",
      "text_body": text,
      "html_body": "<h1>"  + text + "</h1>",
      })
      }).then(function(response) {
      return response.json();
      });
    }
       
  3.run the project
