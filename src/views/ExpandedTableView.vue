<template lang="">
    <div class="block block-rounded">
        <div class="block-header block-header-default d-flex justfiy-content-between">
          <h3 class="block-title">Dynamic Table <small>Full</small></h3>
          <form  method="POST" class="">
            <div class="input-group">
                <button type="button" class="btn btn-dark push" data-bs-toggle="modal" data-bs-target="#modal-block-normal">
                    <i class="fa-solid fa-plus "></i>
                </button>              
            </div>
          </form>
        </div>
        <!-- Model -->
        <div class="modal" id="modal-block-normal" tabindex="-1" role="dialog" aria-labelledby="modal-block-normal" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="block block-rounded block-transparent mb-0">
                  <div class="block-header block-header-default">
                    <h3 class="block-title">Modal Title</h3>
                    <div class="block-options">
                      <button type="button" class="btn-block-option" data-bs-dismiss="modal" aria-label="Close">
                        <i class="fa fa-fw fa-times"></i>
                      </button>
                    </div>
                  </div>
                  <div class="block-content fs-sm">
                    <!-- Basic -->
                    <div class="block block-rounded">
                        <div class="block-header block-header-default">
                        <h3 class="block-title">Basic Table</h3>
                        </div>
                        <div class="block-content block-content-full">
                            <form action="be_forms_elements.html" method="POST" enctype="multipart/form-data" onsubmit="return false;">
                              <div class="">
                                <p class="d-flex" v-for="(column,index) in table_column" :key="index" >
                                  <span class="col" v-if="column.Field !== 'id'"> {{column.Field}}</span>
                                  <input class="col" v-model="ValueArrays[column.Field]" v-if="column.Field !== 'id'" :type="column.Type.includes('date') ? 'date' : 'text' ">
                                </p>
                              </div>
                            </form>
                        </div>
                    </div>
                    <!-- END Basic -->
                  </div>
                  <div class="block-content block-content-full text-end bg-body">
                    <button type="button" class="btn btn-sm btn-alt-secondary me-1" data-bs-dismiss="modal">Close</button>
                    <button @click="handleNewRecord()" type="button" class="btn btn-sm btn-primary" data-bs-dismiss="modal">Perfect</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <!-- Model End -->
        <div class="block-content block-content-full">
          <!-- DataTables init on table by adding .js-dataTable-full class, functionality is initialized in js/pages/be_tables_datatables.min.js which was auto compiled from _js/pages/be_tables_datatables.js -->
          <table class="table table-bordered table-striped table-vcenter js-dataTable-full">
            <thead>
              <tr>
                <th  v-for="(column,index) in table_column" :key="index" class="text-center" >{{column.Field}}</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody class="overflow-auto" v-if="tables_recordes.length" >
              <tr v-for="(recorde,Recindex) in tables_recordes" :key="Recindex" >
                  <td v-for="(column,Colindex) in table_column" :key="Colindex"  class="text-center fs-sm">
                    {{ recorde[column.Field] }}
                  </td>
                  <td class="d-flex gap-1">
                    <button @click="handleDeleteRecord(recorde.id)" class="text-danger border-0">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>
<script setup>
import axios from '@/utils/axios'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useMySQLConnectionStore } from '../stores/mysqlConnection'
const mysqlStore = useMySQLConnectionStore()
const tables_recordes = ref([])
const table_column = ref([])
const filtersArray = ref([])
const ValueArrays = ref({})
const route = useRoute()

const handleNewRecord = () => {
  filtersArray.value = table_column.value
    .filter((field) => field.Field !== 'id')
    .map((row, index) => ({
      field: row.Field,
      value: ValueArrays.value[row.Field]
    }))
  axios
    .post("/databases/expande/table/add/record", {
      ...mysqlStore.mysql,
      schema_name: route.params.schema_name,
      table: route.params.table,
      records: filtersArray.value
    })
    .then((res) => console.log(res.data))
    .then(() => {
      fetchTableRecordes()
    })
}

const handleDeleteRecord = async (id) => {
  axios
    .post('/databases/expande/table/delete', {
      ...mysqlStore.mysql,
      schema_name: route.params.schema_name,
      table: route.params.table,
      id
    })
    .then((res) => console.log(res.data))
    .then(() => {
      fetchTableRecordes()
    })
}

const fetchColumns = () => {
  axios
    .post('/databases/expande/table', {
      ...mysqlStore.mysql,
      schema_name: route.params.schema_name,
      table: route.params.table
    })
    .then((res) => (table_column.value = res.data.table_column))
}
const fetchTableRecordes = () => {
  axios
    .post('/databases/expande/table/shows', {
      ...mysqlStore.mysql,
      schema_name: route.params.schema_name,
      table: route.params.table
    })
    .then((res) => (tables_recordes.value = res.data.tables_recordes))
}

watch(tables_recordes, (newRecords) => {
  // console.log('updated', newRecords)
  // console.log(table_column)
})

onMounted(() => {
  fetchColumns()
  fetchTableRecordes()
})
</script>
<style lang="">
</style>