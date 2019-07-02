<template>
    <div class="container">
        <div class="columns is-multiline is-variable is-6">
            <div class="column is-one-quarter">
                <Film />
            </div>
            <div class="column is-one-quarter">
                <Film />
            </div>
            <div class="column is-one-quarter">
                <Film />
            </div>
            <div class="column is-one-quarter">
                <Film />
            </div>
            <div class="column is-one-quarter">
                <Film />
            </div>
            <div class="column is-one-quarter">
                <Film />
            </div>
        </div>
    </div>
</template>

<script>
import Film from '@/components/Films/Film';

export default {
    components: {
       Film, 
    }
}
</script>

