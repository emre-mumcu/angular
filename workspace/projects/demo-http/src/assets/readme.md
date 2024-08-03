https://transform.tools/json-to-typescript
https://dummyjson.com/users?limit=5

```xml
<!-- Angular structural directives starts with * -->
<ul>
	<li *ngFor="let user of users">
		{{user.id}} - {{user.firstName}} {{user.lastName}} ( {{user.username}} )
	</li>
</ul>

<!-- Angular built-in control flows start with @ -->
<ul>
	@for (user of users; track $index) {
		<li>{{user.id}} - {{user.firstName}} {{user.lastName}} ({{user.username}})</li>
	}
</ul>

<!-- instead of 'track $index' we can use 'user.id' since it has a unique value -->
```