# SHSP-Fix-WhiteSpace-Pre-Wrap
Script to run in console of SharpSpring emails that are rendering strangely due to the "whiteSpace: pre-wrap" style being added to spans.

<h3>The problem:</h3>
<p>For unknown reasons spans in SharpSpring emails sometimes end up with style="white-space: pre-wrap" applied to them causing errors in some very specific versions of outlook (mostly web mail).</p>
<span style="white-space: pre-wrap">This is an example.</span>

<h3>How to use:</h3>
<ol>
  <li>Right click on the page and click "inspect" to open your browser's dev tools.</li>
  <li>Click on the "console" tab.</li>
  <li>Make sure your scope is set to "top".</li>
  <li>Paste the code into the console and hit enter.</li>
  <li>Save the email.</li>
  <li>Receive praise.</li>
</ol>

![HowTo](https://d1sz9tkli0lfjq.cloudfront.net/items/0g2u3v3T0N342f2v232n/Screen%20Recording%202020-01-23%20at%2012.51%20PM.gif)
