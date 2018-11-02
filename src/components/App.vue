<template>
  <div id="app-root">
    <header class="site-header app group">
      <div class="row expanded">
        <div class="columns">
          <a href="//beta.phila.gov" class="logo">
            <img src="https://standards.phila.gov/img/logo/city-of-philadelphia-yellow-white.png" alt="City of Philadelphia">
          </a>
          <div class="app-divide"></div>
          <div class="page-title-container">
            <a href="#/">
              <h1 class="page-title">PVC Example App</h1>
            </a>
          </div>
        </div>
      </div>
    </header>

    <div id="components-root">

      <font-awesome-icon icon="info-circle" class="fa-2x" />

      <div class="margin-sides-20">
        check out <external-link class="ib" :options="externalLinkOptions"/>
      </div>
      <div class="margin-sides-20">
        <!-- check out <external-link class="ib" :options="{ data: 'atlas.phila.gov', href: 'https://atlas.phila.gov' }"/> -->
        check out
        <external-link class="ib"
                       :options="{
                          data: 'openmaps.phila.gov',
                          href: 'https://openmaps.phila.gov'
                       }"
        />
      </div>

      <fieldset class="margin-20">
        <legend class="h4">Favorite Philly cheesesteaks</legend>
        <input id="pat" type="checkbox" name="cheesesteak" value="pat">
        <label for="pat">Pat's King of Steaks</label><br>
        <input id="geno" type="checkbox" name="cheesesteak" value="geno">
        <label for="geno">Geno's Steaks</label><br>
        <input id="tony-luke" type="checkbox" name="cheesesteak" value="tony-luke">
        <label for="tony-luke">Tony Luke's</label><br>
        <input id="jim" type="checkbox" name="cheesesteak" value="jim">
        <label for="jim">Jim's Steaks</label>
      </fieldset>

      <div class="margin-sides-20 component-label">callout:</div>
      <callout class="margin-20"
               :slots="callout_01_Slots"
      />

      <div class="margin-sides-20 component-label">popover-links:</div>
      <popover-link class="margin-20"
                    :slots="popoverLink_01_Slots"

      />
      <popover-link class="margin-20"
                    :slots="popoverLink_02_Slots"

      />

      <div class="margin-sides-20 component-label">vertical-tables:</div>
      <vertical-table class="margin-20 margin-bottom-60 medium-8"
                      :slots="verticalTable_01_Slots"
                      :options="verticalTable_01_Options"
      />

      <vertical-table
        class="margin-20 margin-bottom-60 medium-8"
        :slots="{
          fields: [
            {
              label: 'field1',
              value: 'field1 value',
            },
            {
              label: 'field2',
              value: 'field2 value',
            },
          ]
        }"
        :options="{
          id: 'verticalTableId',
          externalLink: {
            action: function() {
              return 'external link - ';
            },
            // action: 'See more',
            name: 'Atlas',
            href: 'https://atlas.phila.gov'
          }
        }"
      />

      <div class="margin-sides-20 component-label">horizontal-table:</div>
      <horizontal-table class="margin-20 medium-10"
                      :slots="horizontalTable_01_Slots"
                      :options="horizontalTable_01_Options"
      />
    </div>

    <popover :html="popover"
             v-if="popover && popover.length > 0"
    />

  </div>
</template>

<script>
  import axios from 'axios';

  import philaVueComps from '@cityofphiladelphia/phila-vue-comps';
  const Callout = philaVueComps.Callout;
  const PopoverLink = philaVueComps.PopoverLink;
  const Popover = philaVueComps.Popover;
  const VerticalTable = philaVueComps.VerticalTable;
  const HorizontalTable = philaVueComps.HorizontalTable;
  const Checkbox = philaVueComps.Checkbox;
  const ExternalLink = philaVueComps.ExternalLink;

  export default {
    components: {
      Callout,
      PopoverLink,
      Popover,
      VerticalTable,
      HorizontalTable,
      Checkbox,
      ExternalLink,
    },
    data() {
      const data = {
        externalLinkOptions: {
          data: 'atlas.phila.gov',
          href: 'https://atlas.phila.gov'
        },

        callout_01_Slots: {
          text: 'text callout text',
        },


        popoverLink_01_Slots: {
          value: 'popover-link 1',
          shouldShowValue: true,
          popoverPreText: 'this is the popoverPreText for a popover with shouldShowValue: ',
          popoverPostText: ' - this is the popoverPostText',
        },
        popoverLink_02_Slots: {
          value: 'popover-link 2',
          shouldShowValue: false,
          popoverPreText: 'this is the popoverPreText for popover-link 2 (shouldShowValue is off) - ',
          popoverPostText: ' - this is the popoverPostText',
        },


        verticalTable_01_Slots: {
          fields: [
            {
              label: 'field1',
              value: 'field1 value',
            },
            {
              label: 'field2',
              value: 'field2 value',
            },
          ]
        },
        verticalTable_01_Options: {
          id: 'verticalTableId',
          externalLink: {
            action: function() {
              return 'external link - ';
            },
            // action: 'See more',
            name: 'Atlas',
            href: 'https://atlas.phila.gov'
          }
        },


        horizontalTable_01_Options: {
          id: 'testHorizTable_01',
          limit: 5,
          fields: [
            {
              label: 'License Number',
              value: function(state, item){
                return item['licensenum'];
              }
            },
            {
              label: 'License Type',
              value: function(state, item){
                return item['licensetype'];
              }
            },
            {
              label: 'Business Name',
              value: function(state, item){
                return item['business_name'];
              }
            },
          ],
          externalLink: {
            action: function(count) {
              return 'See ' + count + ' older permits at L&I Property History';
            },
            name: 'L&I Property History',
            href: function(state) {
              return 'http://li.phila.gov/';
            }
          }
        },
        horizontalTable_01_Slots: {
          title: '1234 Market St. Business Licenses',
          items: []
        },
      }
      return data;
    },
    mounted() {
      const BusinessLicensesUrl = 'https://phl.carto.com/api/v2/sql?q=select+*+from+li_business_licenses+where+street_address+%3D+%271234+MARKET+ST%27'
      axios.get(BusinessLicensesUrl).then(response => {
        this.$data.horizontalTable_01_Slots.items = response.data.rows;
      }).catch(err => {
        console.error('Error loading base config:', err);
      });
    },
    computed: {
      popover() {
        return this.$store.state.popover;
      },
    },

  };

</script>

<style scoped>

#app-root {
  height: 100%
}

#components-root {
  padding: 20px;
  height: 90%;
  overflow-y: auto;
}

.component-label {
  font-size: 20px;
}

.margin-sides-20 {
  margin-left: 20px;
  margin-right: 20px;
}

.margin-20 {
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}

.margin-bottom-60 {
  margin-bottom: 60px !important;
}

.ib {
  display: inline-block;
}


</style>
