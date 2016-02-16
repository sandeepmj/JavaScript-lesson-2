<h1>JavaScript Lesson 2: Interactivity</h1>

<p>A web page can react or change according to user inputs and clicks. Let's explore one of the most common forms of interactivity--the button.</p>
<p>In order to create interacvity with a button, we need to know three things:</p>
<ul>
	<li>Creating a button with the HTML button tag.</li>
	<li>Making JavaScript recognize an event, with with the "<code>onclick</code>" event handler .</li>
	<li>Telling that button what to do with a JavaScript function.</li>
</ul>

<h2>The Button</h2>

<p>You can create a simple HTML button by typing: <code>&lt;button type=&quot;button&quot;&gt;Do Something!&lt;/button&gt;</code></p>
<p>You can <a href="http://www.sitepoint.com/build-a-better-button-in-css3/">style this button</a> using CSS or use a <a href="http://css3buttongenerator.com/">button generator</a>. We're not covering that today.</p>

<p>You might give the button a class or an Id so you can control them later using JavaScript. It should look like: <code>&lt;button type=&quot;button&quot; &quot;class=&quot;someClass&quot; id=&quot;someId&quot;&gt;Do Something Else!&lt;/button&gt;</code></p>

<p>So now you have two buttons but they don't do anything</p>

<h2>onclick</h2>

<p><code>onclick</code> is an HTML event that JavaScript recognizes. Adding the following into your button tag is the first step in making it interactive: <code>onclick="someCommand()"</code> where someCommand will be a series of instructions we provide using JavaScript. The word someCommand is a placeholder I just created. It could have been someDog() or even someCat().</p>

<h3>alert()</h3>

<p>We'll use the window <code>alert()</code> method to see if a command we are giving is actually coming through. You'll quickly realize how useful these alerts are to debugging your code. </p>

<p>In your first button tag, add: <code>onclick="alert('Hello, my button works!')"</code></p>

<img src="/img/mag-glass.png">
<p>Note that if you start with a double quote, you must have a single quote inside the alert() and vice versa. </p>

<p>Add an alert with a different message into your second button.</p>

<h2>Functions</h2>
<p>Now we come to one of the real strengths of just about any programming language - the <strong>Function</strong>. Let's actually just put a function to work before I even define it. Inside your button tag, add <code>onclick='myAlert()'</code>. In an external JavaScript file, add the following:<p>
<p>
	<img src="/img/js1.png">
</p> 

<p>What happens when you click on button 1?</p>

<p>Let's go one step further before explaining functions. Make a copy of your current html file and save it as <code>button3.html</code>.

	<p>Create a placeholder div with the <code>id="test"</code> in your new html file.</p>
	

	<p>In your button tag, remove the alert and replace with <code>onclick='fillText()'</code>. Again, I could have named it almost anything from <code>runDog()</code> to <code>sleepCat()</code>.</p>
	<p>It should look like this:</p>
<p>
	<img src="/img/button3.png">
</p>

 Then type the following into your js file: </p>
<p>
	<img src="/img/function1.png">
</p>
<p>What happens when you click on the button....you get some intactivity!</p>

<h3>Defining Functions</h3>
<p>A functions is:</p>
<ul>
	<li>a little block of script (one line or many) that performs specific task or a series of tasks.</li>
	<li>reusable.</li>
	<li>performed when something "invokes" or "calls" it.</li>
	<li>ideally modular--that is, it performs a narrow task so you can run several functions to perform more complex tasks.</li>
</ul>

<p>
<img src="/img/define-function.png">
</p>

<h3>Naming Functions</h3>
<p>All the same rules as naming variables apply.</p>

<p>Again the idea is to give meaningful names to functions-- name them for what they do. Apart from that, here are some basic rules: </p>

<ul>
	<li>
		They ARE case sensitive.
	</li>
	<li>
		Cannot begin with numbers.
	</li>
	<li>
		No spaces between words, instead use underscores, hypens or camelCase.
	</li>
	<li>
		Don't use any JavaScript <a href="http://www.w3schools.com/js/js_reserved.asp">reserved words</a>.
	</li>
</ul>
<h3>Calling or Invoking a Function</h3>
<p>When you call or invoke a function, you trigger it to run and complete its task. You've already called a function in your button. You call a function by typing <code>myFunctionName();</code>.</p>
	

<h2>Exercise 1</h2>
<p>In Sublime, take your work from last week's <a href="https://github.com/sandeepmj/JavaScript-lesson-1#exercise-one-15-minutes">Exercise One</a> and trigger the change in style at the click of a button.</p>
	

<h3>User Inputs</h3>

<p>You can integrate information your audience provides into your interactive. Use HTML form inputs to ask for information. Then use JavaScript to capture and process it before returning altering your page. </p>

<p>Let's first build the form:</p>
<p>
<img src="/img/form.png">
</p>

<p>Then we need to create a function to capture and process that information:</p>
<p>
<img src="/img/rentFunction.png">
</p>


