/**
 * ================= callBacFunction =================
 */
// A callback function is a function that is executed after another function has finished executing. Another way to describe this — a callback function is a function that is passed to another function as an argument and is executed after some operation has been completed.


function writeBlog(topic, callBacFunction){
    console.log(topic)

    // then execute the callBacFunction that was passed
    callBacFunction ();
}

writeBlog('Javascript', function (){
    console.log('Finished my blog')
})

