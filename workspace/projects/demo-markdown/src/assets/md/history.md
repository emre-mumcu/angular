# ngx-markdown

To add ngx-markdown along with the required marked library to your package.json use the following commands.

```zsh
% npm install ngx-markdown marked
```

## Usage

The ngx-markdown library can be used either with the standalone components or with modules configuration. 

### Standalone Components
Use the provideMarkdown provide-function in your application configuration app.config.ts to be able to provide the MarkdownComponent and MarkdownPipe to your standalone components and/or inject the MarkdownService.

```ts
// app.config.ts

import { provideMarkdown } from 'ngx-markdown';

providers: [
	provideMarkdown({ 
		loader: HttpClient			
	})
]
```

## Modules Configuration
You must import MarkdownModule inside your main application module app.module.ts with forRoot to be able to use the markdown component, directive, pipe and/or MarkdownService.

```ts
import { MarkdownModule } from 'ngx-markdown';

imports: [
	MarkdownModule.forRoot(),
],
```
Use forChild when importing MarkdownModule into other application modules to allow you to use the same parser configuration across your application.

```ts
import { MarkdownModule } from 'ngx-markdown';

imports: [
	MarkdownModule.forChild(),
],
```

## Remote file configuration
If you want to use the [src] attribute to directly load a remote file, in order to keep only one instance of HttpClient and avoid issues with interceptors, you also have to provide HttpClient:

```ts
// Standalone Components

import { provideMarkdown } from 'ngx-markdown';
import { HttpClient, provideHttpClient } from '@angular/common/http';

providers: [
	provideHttpClient(),
	provideMarkdown({ loader: HttpClient }),
]

// Modules Configuration

import { provideMarkdown } from 'ngx-markdown';
import { HttpClient, provideHttpClient } from '@angular/common/http';

imports: [
	HttpClientModule,
	MarkdownModule.forRoot({ loader: HttpClient }),
]
```

ngx-markdown provides different approaches to help you parse markdown to your application depending on your needs.  

As of Angular 6, the template compiler strips whitespace by default. Use `ngPreserveWhitespaces` directive to preserve whitespaces such as newlines in order for the markdown-formatted content to render as intended.

## Component
You can use markdown component to either parse static markdown directly from your HTML markup, load the content from a remote URL using src property or bind a variable to your component using data property. You can get a hook on load complete using load output event property, on loading error using error output event property or when parsing is completed using ready output event property.

``` html
<!-- static markdown -->
<markdown ngPreserveWhitespaces>
  # Markdown
</markdown>

<!-- loaded from remote url -->
<markdown
  [src]="'path/to/file.md'"
  (load)="onLoad($event)"
  (error)="onError($event)">
</markdown>

<!-- variable binding -->
<markdown
  [data]="markdown"
  (ready)="onReady()">
</markdown>

<!-- inline parser, omitting rendering top-level paragraph -->
<markdown
  [data]="markdown"
  [inline]="true">
</markdown>
```

## Directive
The same way the component works, you can use markdown directive to accomplish the same thing.

## Pipe
Using markdown pipe to transform markdown to HTML allow you to chain pipe transformations and will update the DOM when value changes. It is important to note that, because the marked parsing method returns a Promise, it requires the use of the async pipe.

```html
<!-- chain `language` pipe with `markdown` pipe to convert typescriptMarkdown variable content -->
<div [innerHTML]="typescriptMarkdown | language : 'typescript' | markdown | async"></div>
```

The markdown pipe allow you to use all the same plugins as the component by providing the options parameters.

```html
<!-- provide options parameters to activate plugins or for configuration -->
<div [innerHTML]="typescriptMarkdown | language : 'typescript' | markdown : { emoji: true, inline: true } | async"></div>
```

This is the MarkdownPipeOptions parameters interface, those options are the same as the ones available for the markdown component:

```
export interface MarkdownPipeOptions {
  decodeHtml?: boolean;
  inline?: boolean;
  emoji?: boolean;
  katex?: boolean;
  katexOptions?: KatexOptions;
  mermaid?: boolean;
  mermaidOptions?: MermaidAPI.Config;
  markedOptions?: MarkedOptions;
  disableSanitizer?: boolean;
}
```

## Service
You can use MarkdownService to have access to markdown parsing, rendering and syntax highlight methods.

```
import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Component({ ... })
export class ExampleComponent implements OnInit {
  constructor(private markdownService: MarkdownService) { }

  ngOnInit() {
    // outputs: <p>I am using <strong>markdown</strong>.</p>
    console.log(this.markdownService.parse('I am using __markdown__.'));
  }
}
```

# Renderer
Tokens can be rendered in a custom manner by either...

* providing the renderer property with the MarkedOptions when importing MarkdownModule.forRoot() into your main application module (see Configuration section)
* using MarkdownService exposed renderer

Here is an example of overriding the default heading token rendering through MarkdownService by adding an embedded anchor tag like on GitHub:

```
import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-example',
  template: '<markdown># Heading</markdown>',
})
export class ExampleComponent implements OnInit {
  constructor(private markdownService: MarkdownService) { }

  ngOnInit() {
    this.markdownService.renderer.heading = (text: string, level: number) => {
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
      return '<h' + level + '>' +
               '<a name="' + escapedText + '" class="anchor" href="#' + escapedText + '">' +
                 '<span class="header-link"></span>' +
               '</a>' + text +
             '</h' + level + '>';
    };
  }
}
```
This code will output the following HTML:
```
<h1>
  <a name="heading" class="anchor" href="#heading">
    <span class="header-link"></span>
  </a>
  Heading
</h1>
```
https://marked.js.org/#/USING_PRO.md#renderer

## Re-render Markdown
In some situations, you might need to re-render markdown after making changes. If you've updated the text this would be done automatically, however if the changes are internal to the library such as rendering options, you will need to inform the MarkdownService that it needs to update.

To do so, inject the MarkdownService and call the reload() function as shown below.

```
import { MarkdownService } from 'ngx-markdown';

constructor(
  private markdownService: MarkdownService,
) { }

update() {
  this.markdownService.reload();
}
```


## Syntax highlight
When using static markdown you are responsible to provide the code block with related language.

```html
<markdown ngPreserveWhitespaces>
+  ```typescript
    const myProp: string = 'value';
+  ```
</markdown>
When using remote URL ngx-markdown will use the file extension to automatically resolve the code language.

<!-- will use html highlights -->
<markdown [src]="'path/to/file.html'"></markdown>

<!-- will use php highlights -->
<markdown [src]="'path/to/file.php'"></markdown>
When using variable binding you can optionally use language pipe to specify the language of the variable content (default value is markdown when pipe is not used).

<markdown [data]="markdown | language : 'typescript'"></markdown>

```

# Sanitization
As of ngx-markdown v9.0.0 sanitization is enabled by default and uses Angular DomSanitizer with SecurityContext.HTML to avoid XSS vulnerabilities. The SecurityContext level can be changed using the sanitize property when configuring MarkdownModule.

```ts
// Using the provideMarkdown function
import { SecurityContext } from '@angular/core';
// enable default sanitization
provideMarkdown()
// turn off sanitization
provideMarkdown({
  sanitize: SecurityContext.NONE
})

// Using the MarkdownModule import
import { SecurityContext } from '@angular/core';
// enable default sanitization
MarkdownModule.forRoot()
// turn off sanitization
MarkdownModule.forRoot({
  sanitize: SecurityContext.NONE
})
```
You can bypass sanitization using the markdown component, directive or pipe using the disableSanitizer option as follow:

```html
<!-- disable sanitizer using markdown component -->
<markdown
  [data]="markdown"
  [disableSanitizer]="true">
</markdown>

<!-- disable sanitizer using markdown directive -->
<div markdown
  [data]="markdown"
  [disableSanitizer]="true">
</div>

<!-- disable sanitizer using markdown pipe -->
<div [innerHTML]="markdown | markdown : { disableSanitizer: true } | async"></div>
```

https://www.npmjs.com/package/ngx-markdown#configuration



https://www.npmjs.com/package/ngx-markdown
https://jfcere.github.io/ngx-markdown/get-started
https://marked.js.org/#/USING_PRO.md#renderer
https://github.com/jfcere/ngx-markdown



npm install ngx-markdown marked
npm install ngx-markdown marked@^12.0.0
npm install prismjs@^1.28.0