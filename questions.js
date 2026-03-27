const questions = [

/* =========================
MCQ QUESTIONS
========================= */

{
type:"mcq",
question:"What is an HTML element?",
options:[
"Complete tag with content",
"Only opening tag",
"Only closing tag",
"Attribute"
],
answer:"Complete tag with content",
hint:"<p>Text</p>"
},

{
type:"mcq",
question:"What is an attribute?",
options:[
"Extra information about element",
"Tag name",
"Closing tag",
"Loop"
],
answer:"Extra information about element",
hint:"Example: href, src"
},

{
type:"mcq",
question:"Which attribute is used in image tag?",
options:["src","href","link","path"],
answer:"src",
hint:"Image source"
},

{
type:"mcq",
question:"Which tag is used for headings?",
options:["&lt;h1&gt; to &lt;h6&gt;","&lt;p&gt;","&lt;div&gt;","&lt;span&gt;"],
answer:"&lt;h1&gt; to &lt;h6&gt;",
hint:"Heading levels"
},

{
type:"mcq",
question:"Which tag is used for paragraph?",
options:["&lt;p&gt;","&lt;h1&gt;","&lt;div&gt;","&lt;span&gt;"],
answer:"&lt;p&gt;",
hint:"Text content"
},

{
type:"mcq",
question:"Which tag is used to create hyperlink?",
options:["&lt;a&gt;","&lt;link&gt;","&lt;href&gt;","&lt;nav&gt;"],
answer:"&lt;a&gt;",
hint:"Anchor tag"
},

{
type:"mcq",
question:"Which attribute is required for link?",
options:["href","src","url","path"],
answer:"href",
hint:"Destination URL"
},

{
type:"mcq",
question:"Which tag defines list item?",
options:["&lt;li&gt;","&lt;ul&gt;","&lt;ol&gt;","&lt;dl&gt;"],
answer:"&lt;li&gt;",
hint:"Inside lists"
},

{
type:"mcq",
question:"Which tag is used for table row?",
options:["&lt;tr&gt;","&lt;td&gt;","&lt;th&gt;","&lt;table&gt;"],
answer:"&lt;tr&gt;",
hint:"Row element"
},

{
type:"mcq",
question:"Which tag is used for form?",
options:["&lt;form&gt;","&lt;input&gt;","&lt;label&gt;","&lt;button&gt;"],
answer:"&lt;form&gt;",
hint:"Form container"
},

{
type:"mcq",
question:"Which input type hides password?",
options:["password","text","email","number"],
answer:"password",
hint:"Hidden text"
},

{
type:"mcq",
question:"Which tag is semantic?",
options:["&lt;section&gt;","&lt;div&gt;","&lt;span&gt;","&lt;b&gt;"],
answer:"&lt;section&gt;",
hint:"Meaningful"
},

{
type:"mcq",
question:"Which tag is used for audio?",
options:["&lt;audio&gt;","&lt;music&gt;","&lt;sound&gt;","&lt;mp3&gt;"],
answer:"&lt;audio&gt;",
hint:"HTML5 media"
},

{
type:"mcq",
question:"Which tag is used to embed another webpage?",
options:["&lt;iframe&gt;","&lt;embed&gt;","&lt;frame&gt;","&lt;window&gt;"],
answer:"&lt;iframe&gt;",
hint:"External page"
},

{
type:"mcq",
question:"Which attribute is used for validation?",
options:["required","validate","check","must"],
answer:"required",
hint:"HTML5 validation"
},

/* =========================
CODING QUESTIONS
========================= */

{
type:"code",
question:"Create a webpage with headings and paragraph",

required:["h1","p"],

hint:"Use heading and paragraph",

solution:`<!DOCTYPE html>
<html>
<body>

<h1>Main Heading</h1>
<p>This is a paragraph</p>

</body>
</html>`
},

{
type:"code",
question:"Create a link that opens Google in new tab",

required:["a","href","target"],

hint:"Use target=_blank",

solution:`<!DOCTYPE html>
<html>
<body>

<a href="https://google.com" target="_blank">
Open Google
</a>

</body>
</html>`
},

{
type:"code",
question:"Create ordered and unordered list",

required:["ol","ul","li"],

hint:"Use list tags",

solution:`<!DOCTYPE html>
<html>
<body>

<ol>
<li>One</li>
<li>Two</li>
</ol>

<ul>
<li>A</li>
<li>B</li>
</ul>

</body>
</html>`
},

{
type:"code",
question:"Create a table with 2 rows and 2 columns",

required:["table","tr","td"],

hint:"Basic table",

solution:`<!DOCTYPE html>
<html>
<body>

<table border="1">
<tr>
<td>A</td>
<td>B</td>
</tr>
<tr>
<td>C</td>
<td>D</td>
</tr>
</table>

</body>
</html>`
},

{
type:"code",
question:"Create a form with input fields and submit button",

required:["form","input","button"],

hint:"Basic form",

solution:`<!DOCTYPE html>
<html>
<body>

<form>

<input type="text" placeholder="Name">
<input type="email" required>

<button>Submit</button>

</form>

</body>
</html>`
},

{
type:"code",
question:"Display an image with width 200px",

required:["img","src","width"],

hint:"Use width attribute",

solution:`<!DOCTYPE html>
<html>
<body>

<img src="image.jpg" width="200">

</body>
</html>`
},

{
type:"code",
question:"Use semantic elements header and footer",

required:["header","footer"],

hint:"Semantic tags",

solution:`<!DOCTYPE html>
<html>
<body>

<header>
<h1>Website</h1>
</header>

<footer>
<p>Copyright</p>
</footer>

</body>
</html>`
},

{
type:"code",
question:"Create audio player",

required:["audio","controls"],

hint:"Use controls",

solution:`<!DOCTYPE html>
<html>
<body>

<audio controls>
<source src="audio.mp3" type="audio/mpeg">
</audio>

</body>
</html>`
},

{
type:"code",
question:"Embed a YouTube video using iframe",

required:["iframe","src"],

hint:"Use iframe",

solution:`<!DOCTYPE html>
<html>
<body>

<iframe width="300" height="200"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>

</body>
</html>`
},

{
type:"code",
question:"Create form with validation (required + email)",

required:["input","required","email"],

hint:"HTML5 validation",

solution:`<!DOCTYPE html>
<html>
<body>

<form>

<input type="email" required>
<input type="text" required>

<button>Submit</button>

</form>

</body>
</html>`
}

]