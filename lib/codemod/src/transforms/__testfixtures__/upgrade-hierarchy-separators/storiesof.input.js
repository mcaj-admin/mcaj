import { storiesOf } from '@storybook/react';

storiesOf('A/B/C', module).add('abc', () => <div>hello</div>);
storiesOf('D|E/f', module).add('def', () => <div>hello</div>);

storiesOf('G|h/i.jkl', module)
  .add('hijkl', () => <div>hello</div>)
  .add('whatever', () => <div>goodbye!</div>);
