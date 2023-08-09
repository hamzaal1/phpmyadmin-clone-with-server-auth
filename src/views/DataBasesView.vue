<template lang="">
    <div class="block block-rounded">
        <div class="block-header block-header-default">
          <h3 class="block-title">Dynamic Table <small>Full</small></h3>
        </div>
        <div class="block-content block-content-full">
          <!-- DataTables init on table by adding .js-dataTable-full class, functionality is initialized in js/pages/be_tables_datatables.min.js which was auto compiled from _js/pages/be_tables_datatables.js -->
          <table class="table table-bordered table-striped table-vcenter js-dataTable-full">
            <thead>
              <tr>
                <th class="text-center" style="width: 80px;">ID</th>
                <th>Name</th>
                <th class="d-none d-sm-table-cell" style="width: 30%;">Email</th>
                <th class="d-none d-sm-table-cell" style="width: 15%;">Access</th>
                <th style="width: 15%;">Registered</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center fs-sm">1</td>
                <td class="fw-semibold fs-sm">Jose Wagner</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client1<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">Disabled</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">5 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">2</td>
                <td class="fw-semibold fs-sm">Brian Cruz</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client2<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">VIP</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">9 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">3</td>
                <td class="fw-semibold fs-sm">Amber Harvey</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client3<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">VIP</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">6 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">4</td>
                <td class="fw-semibold fs-sm">Judy Ford</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client4<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">VIP</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">4 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">5</td>
                <td class="fw-semibold fs-sm">Jose Mills</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client5<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">Business</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">5 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">6</td>
                <td class="fw-semibold fs-sm">Justin Hunt</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client6<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">Disabled</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">9 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">7</td>
                <td class="fw-semibold fs-sm">Ryan Flores</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client7<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">Trial</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">4 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">8</td>
                <td class="fw-semibold fs-sm">Jose Parker</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client8<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">Trial</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">6 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">9</td>
                <td class="fw-semibold fs-sm">Laura Carr</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client9<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">Disabled</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">8 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">10</td>
                <td class="fw-semibold fs-sm">Helen Jacobs</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client10<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">Disabled</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">6 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">11</td>
                <td class="fw-semibold fs-sm">Jesse Fisher</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client11<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">VIP</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">9 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">12</td>
                <td class="fw-semibold fs-sm">Sara Fields</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client12<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">Trial</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">3 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">13</td>
                <td class="fw-semibold fs-sm">Henry Harrison</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client13<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">Business</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">2 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">14</td>
                <td class="fw-semibold fs-sm">Thomas Riley</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client14<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">VIP</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">2 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">15</td>
                <td class="fw-semibold fs-sm">Brian Stevens</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client15<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">Trial</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">9 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">16</td>
                <td class="fw-semibold fs-sm">Scott Young</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client16<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">VIP</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">8 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">17</td>
                <td class="fw-semibold fs-sm">Amanda Powell</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client17<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">VIP</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">3 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">18</td>
                <td class="fw-semibold fs-sm">Amanda Powell</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client18<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">Disabled</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">3 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">19</td>
                <td class="fw-semibold fs-sm">Jack Greene</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client19<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">Business</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">3 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">20</td>
                <td class="fw-semibold fs-sm">Megan Fuller</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client20<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">VIP</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">5 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">21</td>
                <td class="fw-semibold fs-sm">David Fuller</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client21<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">Trial</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">9 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">22</td>
                <td class="fw-semibold fs-sm">Betty Kelley</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client22<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">Business</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">4 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">23</td>
                <td class="fw-semibold fs-sm">Thomas Riley</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client23<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">Disabled</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">9 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">24</td>
                <td class="fw-semibold fs-sm">Brian Stevens</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client24<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">VIP</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">7 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">25</td>
                <td class="fw-semibold fs-sm">Susan Day</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client25<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">Disabled</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">6 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">26</td>
                <td class="fw-semibold fs-sm">Justin Hunt</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client26<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">Trial</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">9 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">27</td>
                <td class="fw-semibold fs-sm">Susan Day</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client27<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">VIP</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">8 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">28</td>
                <td class="fw-semibold fs-sm">Jose Mills</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client28<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">Disabled</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">10 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">29</td>
                <td class="fw-semibold fs-sm">Brian Cruz</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client29<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">Disabled</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">10 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">30</td>
                <td class="fw-semibold fs-sm">Thomas Riley</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client30<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">VIP</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">4 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">31</td>
                <td class="fw-semibold fs-sm">Carl Wells</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client31<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">Disabled</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">10 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">32</td>
                <td class="fw-semibold fs-sm">Amanda Powell</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client32<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">Business</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">4 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">33</td>
                <td class="fw-semibold fs-sm">Danielle Jones</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client33<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">Disabled</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">6 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">34</td>
                <td class="fw-semibold fs-sm">Alice Moore</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client34<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">Disabled</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">2 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">35</td>
                <td class="fw-semibold fs-sm">Helen Jacobs</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client35<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-danger-light text-danger">Disabled</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">8 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">36</td>
                <td class="fw-semibold fs-sm">Jose Parker</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client36<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">VIP</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">3 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">37</td>
                <td class="fw-semibold fs-sm">Jose Parker</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client37<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">Trial</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">7 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">38</td>
                <td class="fw-semibold fs-sm">Jose Wagner</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client38<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">VIP</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">3 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">39</td>
                <td class="fw-semibold fs-sm">Henry Harrison</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client39<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success">VIP</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">2 days ago</span>
                </td>
              </tr>
              <tr>
                <td class="text-center fs-sm">40</td>
                <td class="fw-semibold fs-sm">Alice Moore</td>
                <td class="d-none d-sm-table-cell fs-sm">
                  client40<span class="text-muted">@example.com</span>
                </td>
                <td class="d-none d-sm-table-cell">
                  <span class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">Business</span>
                </td>
                <td>
                  <span class="text-muted fs-sm">5 days ago</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>
<script setup>
</script>
<style lang="">
</style>