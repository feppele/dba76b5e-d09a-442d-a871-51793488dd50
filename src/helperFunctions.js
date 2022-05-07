

    function niceTime(time){

        if(typeof(time) !== "string"){return ""}
        var date = new Date(time)
        var array = date.toString().split(/(\s+)/).filter(ele=> ele !=" ");
        return {weekday: array[0],month: array[1],day: array[2],year: array[3],time:array[4]}
    }


    export {niceTime}