# Javascript Toggle

## Basic example:

Add `data-toggle` with a selector you want to apply the value of `data-class` to.

```html
<button data-class="foo" data-toggle=".target-element">
	Toggle
</button>

<div class="target-element">
	I am the target for the toggle
</div>
```



## Another example

```html
<button data-class="foo" data-toggle=":root">
	Toggle :root
</button>


<button data-class="demo" data-toggle="body">
	Toggle body
</button>

<button data-class="some-styles" data-toggle=".list > li:last-child">
	Toggle list item
</button>


<ul class="list">
	<li>
		Lorem, ipsum.
	</li>
	<li>
		Lorem, ipsum dolor.
	</li>
</ul>

```