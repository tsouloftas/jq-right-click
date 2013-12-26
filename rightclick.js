$.event.special.rightclick={bindType:"contextmenu",delegateType:"contextmenu"};
$(document).on("rightclick", "SELECTOR", function(){
    console.log("rightclick");
    return false;
})