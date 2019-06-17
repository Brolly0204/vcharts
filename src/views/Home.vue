<template>
  <div class="home">
    <c-line></c-line>
    <c-ring></c-ring>
  </div>
</template>

<script>
import CLine from '@/components/Line'
import CRing from '@/components/Ring'

export default {
  name: 'home',
  components: {
    CLine,
    CRing
  }
}
</script>
