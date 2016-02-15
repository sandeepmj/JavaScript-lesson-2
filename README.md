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
<p>Now we come to one of the real strengths of just about any programming language - the <strong>Function</strong>. Let's actually just put a function to work before I even define it. Type the following in a separate <code>.js</code> file that is linked to your <code>button.html</code>file:</p>
<ul>
	<li>
		Inside your button tag, add <code>onclick='myAlert()'</code>.
	</li>
	<li>In your JavaScript file, add:<br>
		<code>function myAlert(){<br>
	alert('Hello again from button 1!');<br>
}</code></li>
</ul>


