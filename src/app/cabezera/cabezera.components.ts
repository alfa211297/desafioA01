import { Component } from "@angular/core";


@Component({

    selector: 'app-cabezera',

    template: `<nav class="navbar">
		<ul>

      <a href="">
        <img src="/assets/images/logo.svg" alt="">
      </a>
			<li><a href="#">Home</a></li>
			<li><a href="#">New</a></li>
			<li><a href="#">Popular</a></li>
			<li><a href="#">Trending</a></li>
      <li><a href="#">Categories</a></li>
		</ul>
	</nav>
    `
})

 export class cabezeraComponent{

}