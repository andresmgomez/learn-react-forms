## Learn some React Forms

### Form

1. What is a Form?

   A [form](https://www.tutorialspoint.com/html/html_forms.htm) is a special html tag that lets you grab information

2. What is an <input> tag

   This is a tag inside a form that lets you react toward what the person wrote and how to handle this data

3. What is an attribute in an <input> element?

   A piece of text that looks like a <strong>prop</strong> that lets you change
   the <em>behavior</em> how an input tag shows in

   Ex: text:any string, number:any whole number, date:year,month,day, checkbox:either true or false, etc.

Note: In our lesson yesterday we try to went every value inside the attribute <strong>type</strong>

### Events

1. What is an Event in JavaScript?

   An event is an action that a person does when he or she visits a site

2. What are the most common events in JavaScript?

   [onClick](https://www.w3schools.com/jsref/event_onclick.asp) - Event that is used to go from one page to another
   Exercise: Try to click on the label of firstName or lastName and see what happens

   [onChange](https://www.w3schools.com/jsref/event_onchange.asp) - Event that keeps track when a value has been changed
   Exercise: Type any <em>letter</em> you can think of and check the console after opening the <strong>dev tools</strong> and see what happens

   [onSubmit](https://www.w3schools.com/jsref/event_onsubmit.asp) - Event that is used to send information inside the form to a web server

Note: If you put console.log after an annonymous function inside an
<strong>onChange</strong> prop, you will get a huge event object where <em>JavaScript</em> keeps of track of every interaction between the client and the web server.
