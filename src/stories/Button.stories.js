import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button/Button';

storiesOf('Button', module)
  .add('with text', () => ({
    components: { Button },
    template: '<Button btnText="button text" btnAction="action(\'clicked\')" />'
  }))
  .add('buttons type', () => ({
    components: { Button },
    template: `<div>
      <Button btnText="info type" btnType="info" />
      <Button btnText="danger type" btnType="danger" />
      <Button btnText="dark type" btnType="dark" />
      <Button btnText="without type" />
    </div>`
  }))
  .add('buttons size', () => ({
    components: { Button },
    template: `<div>
    <Button btnText="small size" btnSize="small" />
    <Button btnText="medium size" />
    <Button btnText="large size" btnSize="large" />
  </div>`
  }));