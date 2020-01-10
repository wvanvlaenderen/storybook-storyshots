import {storiesOf} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import markdown from './starwars.component.md';
import markdownWithGiphy from './starwars.component.with.giphy.md';

import {StarWarsComponent} from './star-wars.component';

export const actions = {
  clicked: action('clicked'),
};

storiesOf('Star Wars', module)
  .add('Short content', () => {
    return {
      component: StarWarsComponent,
      props: {
        title: 'STAR WARS',
        content: 'Some content'
      },
    };
  }, {
    notes: 'A simple example containing a short content',
  })
  .add('Long content', () => {
    return {
      component: StarWarsComponent,
      props: {
        title: 'STAR WARS',
        content: `
            <p class="center">EPISODE IV<br/>
                A NEW HOPE FOR CSS3</p>

            <p>It is a period of vendor war.</p>

            <p>This is a demonstration of Star Wars-style scrolling 3D titles in CSS3. It possibly has no practical purpose whatsoever
                but it looks great and you can impress your friends.</p>

            <p>Before movie-buffs start ranting, I realize Star Wars wasn't the first to use crawling 3D titles, but few of you will
                remember the Flash Gordon series or the 1936 adaption of HG Wells' "Things to Come".</p>

            <p>Also, by mentioning "Star Wars", everyone will understand what I mean. And I'll receive several thousand more
                visits.</p>

            <p>The scrolling titles work well in Chrome, Safari and Firefox. Opera doesn't implement 3D transforms yet, but the text
                will scroll. IE users receive a blank page. A shame, but IE10 should support it.</p>

            <p>So how does it work? Well, it's fairly simple. We have an outer absolute DIV (#titles) which is rotated along the
                X-axis using perspective to give the impression of depth. The same DIV also has an :after psuedo-element which applies
                a linear gradient so the text appears to fade out.</p>

            <p>Inside, we have another absolutely-positioned DIV which contains the text (#titlecontent). The top is set to 100% to
                ensure it starts off-screen then uses CSS3 animation to move it upward over time. No JavaScript is required.</p>

            <p>You will probably need to adjust the movement amount and timing depending on the quantity of text you want to show. The
                3D depth can also be tweaked in the #titles declaration.</p>

            <p>All the code is contained in this single HTML file&hellip;</p>

            <p class="center">View the source, Luke!</p>

            <p>Sorry. Couldn't resist it.</p>

            <p>You're welcome to use this demonstration code in your own sites. Please link back to the original article at:</p>

            <p class="center">
                <a href="http://www.sitepoint.com/css3-starwars-scrolling-text/">sitepoint.com/<br/>css3-starwars-scrolling-text/</a>
            </p>

            <p>and give me a shout on Twitter <a href="https://twitter.com/craigbuckler">@craigbuckler</a> &ndash; I'd love to see how
                you use and abuse it!</p>

            <p>Finally, Han shot first and the original, unadulterated movies remain the best. Stop fiddling with them, George!</p>
        `,
      }
    };
  }, {
    notes: {Introduction: 'A simple example containing a longer content', Changelog: 'v0.1'}
  })
  .add('On click listener', () => {
    return {
      component: StarWarsComponent,
      props: {
        title: 'STAR WARS',
        content: 'Some content',
        clicked: actions.clicked
      }
    };
  }, {
    notes: markdown,
  })
  .add('with markdown showcase', () => {
    return {
      component: StarWarsComponent,
      props: {
        title: 'STAR WARS',
        content: '',
      }
    };
  }, {
    notes: markdownWithGiphy,
  });
