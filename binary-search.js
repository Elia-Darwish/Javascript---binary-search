





// binary search return index or -1 if not found
(function (global) {

    let value,
        left = 0,
        right;

    const search = function(arr) {

        if (left > right) {
            left = 0;
            return -1;
        }

        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === value) {
            left = 0;
            return mid;
        }

        if (arr[mid] < value) {
            left = mid + 1;
            return search(arr);
        } else {
            right = mid - 1;
            return search(arr);
        }

    }

    function binarySearch(val) {

        value = val;
        right = this.length -1;

        return search(this);

    }

    global.Array.prototype.binarySearch = binarySearch;

}(window));