export const fromateJson = (json) => {
    let obj = {};
    let arr = [];
    let timeLine = [];
    json.forEach(item => {
        let date = new Date(item.date).toLocaleString();
        let dateArray = date.split('/');
        item.year = dateArray && dateArray[0];
        item.month = dateArray && dateArray[1];
        item.flag = false;
        item.day = dateArray && dateArray[2];

        if (!obj.hasOwnProperty(item.year)) {
            obj[item.year] = {
                year: item.year,
                data: {}
            };
        }
                
        if (!obj[item.year]['data'].hasOwnProperty(item.month)) {
            obj[item.year]['data'][item.month] = {
                month: item.month,
                data: []
            };
        }
            obj[item.year]['data'][item.month]['data'].push({...item});
    });
    function mySort(params, sortStr) {
        let arr = [];
        if (params instanceof Object && !(params instanceof Array)) {
            arr = Object.values(params);
        } else {
            arr = params;
        }
        return arr.sort((a, b) => a[sortStr] < b[sortStr] ? 1 : -1);
    }
    arr = mySort(obj, 'year');
    arr.forEach(item => {
        let brr = mySort(item.data, 'month');
        brr.forEach(el => {
            mySort(el.data, 'date');
        });
        timeLine.push({...item, data: brr});
    });
    return timeLine;
};