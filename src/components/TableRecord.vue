<template lang="">
    <tr>
        <td class="text-center fs-sm">{{ props.table }}</td>
        <td class="d-flex gap-1">
          <button @click="handleDeleteRecord()" class="text-danger border-0">
            <i class="fa-solid fa-trash"></i>
          </button>
          <button class="text-primary border-0">
            <i class="fa-regular fa-pen-to-square"></i>
          </button>
          <button class="text-warning border-0">
            <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
          </button>
        </td>
    </tr>
</template>
<script setup>
import { useDatabasesStore } from '@/stores/databases'
// import axios from '@/stores/databases'
const databaseStore = useDatabasesStore()
const props = defineProps(['table'])

const handleDeleteRecord = async () => {
  await databaseStore.deleteDatabases(props.table)
}
</script>
<style lang="">
</style>