<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!" android:flat="true"/>
        <TabView android:tabBackgroundColor="#000"
                 android:tabTextColor="#c4ffdf"
                 android:selectedTabTextColor="#ffffff"
                 androidSelectedTabHighlightColor="#ffffff">
            <TabViewItem title="Tab 1">
                    <Events/>
            </TabViewItem>
            <TabViewItem title="Tab 2">
                <GridLayout columns="*" rows="*">
                    <Label class="message" :text="msg" />
                </GridLayout>
            </TabViewItem>
            <TabViewItem title="Tab 3">
                <GridLayout columns="*" rows="*">
                    <Label class="message" text="Tab 3 Content" col="0" row="0"/>
                </GridLayout>
            </TabViewItem>
        </TabView>
    </Page>
</template>

<script lang="ts">
  import Events from './Events/Events.vue';
  import * as Permissions from "nativescript-permissions";
    import * as app from 'tns-core-modules/application'
    import * as platform from 'tns-core-modules/platform'
    import * as color from 'tns-core-modules/color'

  export default {
    components: { Events },
    data() {
      return {
        msg: 'Hello World Native Script!'
      }
    },
    async created () {
        Permissions.requestPermission(android.Manifest.permission.READ_EXTERNAL_STORAGE, "Needed for read db").then(() => {
            console.log("Permission granted!");
        }).catch(() => {
            console.log("Permission is not granted (sadface)");
        });
        Permissions.requestPermission(android.Manifest.permission.WRITE_EXTERNAL_STORAGE, "Needed for save db").then(() => {
            console.log("Permission granted!");
        }).catch(() => {
            console.log("Permission is not granted (sadface)");
        });
        Permissions.requestPermission(android.Manifest.permission.INTERNET, "Needed for save db").then(() => {
            console.log("Permission granted!");
        }).catch(() => {
            console.log("Permission is not granted (sadface)");
        });
        if (app.android && platform.device.sdkVersion >= "21") {
            const window = app.android.foregroundActivity.getWindow();
            window.setStatusBarColor(new color.Color("#000").android);
        }
            
        try{

 let CouchBaseModule = require("nativescript-couchbase");
            let _database = new CouchBaseModule.Couchbase('calendar');
            
       let _userSettingsDocument = _database.getDocument('events');
 
       if (!_userSettingsDocument) {
 
           console.log("Document does not exist yet :)");
 
           let _userSettingsObj = {
 
               username: "",
 
               email: "",
 
               fullname: "",
 
           }
 
          _database.createDocument(_userSettingsObj, 'events');
 
           _userSettingsDocument = _database.getDocument('events');
 
       }
this.msg=_userSettingsDocument;
           // var document_id=db.createDocument({"_id":"events","name":"Betim Dev start","data":"23/03/2019"});
            //this.msg = db.getDocument(document_id);
        }catch (e) {
            console.log(e)
            this.msg = e;
        }
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #000;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
