
<script setup>
import TableRecord from '@/components/TableRecord.vue'
import axios from '@/utils/axios'
import { useDatabasesStore } from '../stores/databases'
import { useMySQLConnectionStore } from '../stores/mysqlConnection'
import { onMounted, ref, watchEffect } from 'vue'
const name = ref('')
const databases = ref([])
const databaseStore = useDatabasesStore()
const mysqlStore = useMySQLConnectionStore()

const handleAddTable = async () => {
  try {
    await databaseStore.addDatabase(name.value)
    axios
      .post('/databases', {
        ...mysqlStore.mysql
      })
      .then((res) => (databases.value = res.data.databases));
    name.value = ''
  } catch (error) {}
}
watchEffect(databases, () => {
  console.log('Databases updated:')
  console.log(databases.value)
})

onMounted(async () => {
  databases.value = databaseStore.getDatabases
})
</script>

<template lang="">
    <div class="block block-rounded">
        <div class="block-header block-header-default d-flex justfiy-content-between">
          <h3 class="block-title">Dynamic Table <small>Full</small></h3>
          <form v-on:submit.prevent="handleAddTable" method="POST" class="">
            <div class="input-group">
              <input type="text" v-model="name" class="form-control form-control-alt" id="example-group4-input2-alt" name="example-group4-input2-alt" placeholder="new table" aria-label="Text input with dropdown button">
              <button class="btn btn-dark">
               <i class="fa-solid fa-plus "></i>
              </button>
              
            </div>
            <!-- <input placeholder="add new table px-2" type="text" name="" id="">
            <button class="bg-primary text-white border-0 py-1">
            </button> -->
          </form>
        </div>
        <div class="block-content block-content-full">
          <!-- DataTables init on table by adding .js-dataTable-full class, functionality is initialized in js/pages/be_tables_datatables.min.js which was auto compiled from _js/pages/be_tables_datatables.js -->
          <table class="table table-bordered table-striped table-vcenter js-dataTable-full">
            <thead>
              <tr>
                <th class="text-center" >Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody v-if="databases.length">
             <TableRecord v-for="(schema,index) in databases" :table="schema.schema_name" :key="index" />
            </tbody>
          </table>
        </div>
    </div>
</template>

<style lang="">
</style>