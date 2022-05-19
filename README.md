## Learn some React Forms

### React App

#### Install npm modules
`npm install`

#### Run the app
`npm start`

Open [http://localhost:3000](http://localhost:3000)

### Form

1. What is a Form?

   A [form](https://www.tutorialspoint.com/html/html_forms.htm) is a special html tag that lets you grab information.

2. What is an <input> tag

   This is a tag inside a form that lets you react toward what the person wrote and how to handle this data.

3. What is an attribute in an <input> element?

   A piece of text that looks like a <strong>prop</strong> that lets you change
   the <em>behavior</em> how an input tag shows in.

   Ex: text:any string, number:any whole number, date:year,month,day, checkbox:either true or false, etc.

Note: In our lesson yesterday we try to went every value inside the attribute <strong>type</strong>.

### Events

1. What is an Event in JavaScript?

   An [event](https://www.w3schools.com/tags/ref_eventattributes.asp) is an action that a person does when he or she visits a site.

2. What are the most common events in JavaScript?

   [onClick](https://www.w3schools.com/jsref/event_onclick.asp) - Event that is used to go from one page to another.

   Exercise: Try to click on the label of firstName or lastName and see what happens in the browser's console.

   [onChange](https://www.w3schools.com/jsref/event_onchange.asp) - Event that keeps track when a value has been changed.

   Exercise: Type any <em>letter</em> you can think of and check the console after opening the <strong>dev tools</strong> and see what happens in the browser's console.

   [onSubmit](https://www.w3schools.com/jsref/event_onsubmit.asp) - Event that is used to send information inside the form to a web server.

Note: If you put console.log after an annonymous function inside an
<strong>onChange</strong> prop, you will get a huge event object where <em>JavaScript</em> keeps of track of every interaction between the client and the web server.

### A Deeper Look at Events

1. What is the DOM?

   The [Document Object Model](https://www.tutorialspoint.com/javascript/javascript_html_dom.htm) as it stands for, allow us to keep track of every html element inside of a page

2. How to get the DOM of <input> fields?

   If we expand the <em>event</em> object, and click on <strong>target</strong>, we will get our selected field.

   Exercise: Type any first letter you can think of inside firstName, lastName and any other field inside the form and see what happens in the browser's console.

3. What is a value?

   A value is the piece of information (actual text, number, or any other type) that is stored inside an element.

4. How to get the value of an <input> field?

   After we expand the <em>event</em> object, and click on <em>target</em>. We can select the value by toggling the <strong>value</strong>.

   Exercise: Type any info you can think of inside each input field, and see what happens in the browser's console.
