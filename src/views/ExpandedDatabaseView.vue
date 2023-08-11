<template lang="">
    <div class="block block-rounded">
        <div class="block-header block-header-default d-flex justfiy-content-between">
          <h3 class="block-title">Dynamic Table <small>Full</small></h3>
          <form  method="POST" class="">
            <div class="input-group">
              <input type="text" v-model="new_table" class="form-control form-control-alt" id="example-group4-input2-alt" name="example-group4-input2-alt" placeholder="new table" aria-label="Text input with dropdown button">
                <button type="button" class="btn btn-dark push" data-bs-toggle="modal" data-bs-target="#modal-block-normal">
                    <i class="fa-solid fa-plus "></i>
                </button>              
            </div>
          </form>
        </div>
        <!-- Model -->
        <div v-if="new_table!==''" class="modal" id="modal-block-normal" tabindex="-1" role="dialog" aria-labelledby="modal-block-normal" aria-hidden="true">
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
                                    <div class="mb-4">
                                        <label class="form-label" for="example-text-input">For primary Key</label>
                                        <input type="text" class="form-control" id="example-text-input" name="example-text-input" placeholder="colmun name of primary key">
                                    </div>
                                    <div v-for="(row,index) in rows_number" :key="index" class="mb-4 d-flex">
                                        <div class="col-8">
                                            <label class="form-label" for="example-text-input">New Colmun</label>
                                            <input v-model="row.name" class="form-control" id="example-text-input" name="example-text-input" placeholder="New Colmun">
                                        </div>
                                        <select v-model="row.type" class="form-control h-25 mt-4 py-2" name="" id="">
                                            <option selected value="varchar">characters</option>
                                            <option value="number">integer</option>
                                            <option value="date">date</option>
                                        </select>
                                    </div>
                                    
                                    <button @click="rows_number.push({})" type="button" class="btn btn-dark push">
                                        <i class="fa-solid fa-plus "></i>
                                    </button>      
                                </div>                            
                            </form>
                        </div>
                    </div>
                    <!-- END Basic -->
                  </div>
                  <div class="block-content block-content-full text-end bg-body">
                    <button type="button" class="btn btn-sm btn-alt-secondary me-1" data-bs-dismiss="modal">Close</button>
                    <button @click="handleNewTable()" type="button" class="btn btn-sm btn-primary" data-bs-dismiss="modal">Perfect</button>
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
                <th class="text-center" >Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody v-for="(table,index) in tables" :key="index" >
              <tr >
                <td class="text-center fs-sm">{{table}}</td>
                <td class="d-flex gap-1">
                  <button class="text-danger border-0">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                  <button class="text-primary border-0">
                    <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                  <router-link :to="`/databases/expanded/${table}`" class="text-warning border-0">
                    <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
                  </router-link>
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
const tables = ref([])
const new_table = ref('')
const rows_number = ref([])
const route = useRoute()

const handleNewTable = () => {
  console.log(rows_number)
}

const fetchTables = () => {
  axios
    .post('/databases/expande', {
      ...mysqlStore.mysql,
      schema_name: route.params.schema_name
    })
    .then((res) => (tables.value = res.data.tables))
}

onMounted(() => {
  fetchTables()
})
</script>
<style lang="">
</style>