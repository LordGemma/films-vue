<template>
  <div class="film-details">
    <h1>This is an film page</h1>
    <Button 
      btnText="button text" 
      btnType="danger" 
      btnSize="small" 
      @handleAction="handleAction" 
    />
  </div>
</template>

<script>
import Button from '../components/Button/Button';

export default {
  components: {
    Button
  },
  methods: {
    handleAction() {
      console.log("Button actions");
    }
  }
}
</script>

