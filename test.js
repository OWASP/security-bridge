/* 
   Simple Android Toast
   https://www.yodiw.com/frida-android-make-toast-non-rooted-device/
*/


// function toast() {

//     var context = Java.use('android.app.ActivityThread').currentApplication().getApplicationContext();

//     Java.scheduleOnMainThread(function() {

//         var toast = Java.use("android.widget.Toast");

//         toast.makeText(context, Java.use("java.lang.String").$new("This works!"), 1).show();

//     });
// }

// Java.perform(toast);

function makeToast() {
    // Check if frida has located the JNI
    if (Java.available) {

        Java.perform(function () { 
            var context = Java.use('android.app.ActivityThread').currentApplication().getApplicationContext();

            Java.scheduleOnMainThread(function() {
                    var toast = Java.use("android.widget.Toast");
                    toast.makeText(Java.use("android.app.ActivityThread").currentApplication().getApplicationContext(), Java.use("java.lang.String").$new("This works!"), 1).show();
            })
        })
    }
}