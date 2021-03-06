<h1>Review Homework</h1>

<p>Create a Web page on which information is dynamically added from an external JavaScript file. Here's what you need to accomplish: </p>

<ul>
	<li>Declare two numberic variables.</li>
	<li>Add them together using a JavaScript operator.</li>
	<li>Multiply them together using a JavaScript operator.</li>
	<li>Divide one by the other using a JavaScript operator.</li>
	<li>Subtract one from the other using a JavaScript operator.</li>
	<li>Create separate sentences for each mathematical operation that provides the results. For example, for addition, it should say something like "When I add firstVariable to secondVariable I get thirdVariable." </li>
	<li>You must use <code>document.getElementById().innerHTML</code></li>
	<li>Do NOT use <code>document.write</code>.</li>
	<li>Remember it has to be dynamic so if you change the value of the variables, the webpage should show updated results automatically.</li>
</ul>

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

<img src="/img/mag-glass.jpg">
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
	

<h2>Exercise 1 (20 minutes)</h2>
<p>In Sublime, take your work from last week's <a href="https://github.com/sandeepmj/JavaScript-lesson-1#exercise-one-15-minutes">Exercise One</a> and trigger the change in style at the click of a button.</p>
	

<h2>User Inputs</h2>

<p>You can integrate information your audience provides into your interactive. Use HTML form inputs to ask for information. Then use JavaScript to capture and process it before returning altering your page. </p>

<p>Let's first build the form:</p>
<p>
<img src="/img/form.png">
</p>

<p>Then we need to create a function to capture and process that information.</p>

<p>We'll use the <code>.value</code> method to grab the value of a variable.</p>
<p>
<img src="/img/rentFunction.png">
</p>



<h3>Exercise Two (25 minutes)</h3>
<p>Take your homework exercise and update it by asking your audience to provide the two numbers that are then calculated for addition, subtraction, division and multiplication. Display the results only after someone clicks a submit button.</p>

<h2>Comparison Operators</h2>
<p>JavaScript allows us to make comparison which then allows us to take an action. For example, if a user is paying more than 35 percent of his or her income on rent, we can tell them they are overpaying.</p>

<p>You've seen some of these operators before:</p>
<ul>
	<li><code>5 &gt; 3</code> or 5 is greater than 3.</li>
	<li><code>4 &lt; 8 </code>or 4 is less than 8.</li>
</ul>

<p>Where it gets a little stanger is for <strong>equal</strong> and <strong> not equal</strong>. Because we use <code>=</code> to assign value to a variable, we have to use <code>==</code> to denote equality and <code>!=</code> for inequality</p>

<p>Here's a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators">complete list of comparison operators</a></p>

<h3>Logical Operators </h3>
<p>Logical Operators simply allow you to compare relationships or logic between various variables-- like <strong>and</strong> and <strong>or</strong>. The logic for "and" is written as <code>&&</code> and the logic for "or" is written as <code>||</code>. Here's a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Logical_operators">full list of logical operators</a>.</p>
<p>
<img src="/img/comparison.png">
</p>

<h3>So What?</h3>

<p>At this point you might be wondering, so what?</p>
<p>Here's what:</p>
<p>Imagine writing a function that does different things based on user input. For example, <strong><code>if</code></strong> someone someone's rent to income is greater than 35 percent your function can tell them they are overpaying, <strong><code>else</code> your function tells them they are paying the right amount.</strong> </p>

<p>I created a <code>form2.html</code> that is exactly the same except I'm pointing it to <code>main2.js</code></p>
<p><code>main2.js</code> should look like this:</p>
<p>
<img src="/img/compjs.png">
</p>

<h2>Homework</h2>
<p>Using JavaScript learned over the past two weeks, create a simple calculator to inform your audience whether they should buy a monthly MetroCard or a per ride MetroCard based on how many times they ride the subway per month.</p>

<p> <strong>Due: Monday, Feb. 22 by Noon on your github account</strong>. Share the URL on Slack (your instructor will tell you which channel.</p>