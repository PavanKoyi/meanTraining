exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
   indexOf: function (arr, item) {

      var index = -1;
      for (var i = 0; i < arr.length; i++) {
         if (arr[i] === item) {
            index = i;
         }
      }
      return index;
   },

   sum: function (arr) {
      var summ = 0;
      for (var index in arr) {
         summ = summ + Number(arr[index]);
      }
      alert(summ);
   },

   remove: function (arr, item) {
      
      var afterRemovingItem = [];
      for( var i = 0; i < arr.length ; i++ ) {
          if(arr[i] != item){
              afterRemovingItem.push(arr[i]);
          }
      }
      return afterRemovingItem;
   },

   removeWithoutCopy: function (arr, item) {
      
      for( i = 0; i < arr.length; i++ ) {
         if( arr[i] === item ) {
            arr.splice(i, 1);
            i -= 1;
         }
      }
      return arr;
   },

   append: function (arr, item) {

      arr.push(item);
      return arr;
   },

   truncate: function (arr) {

      arr.pop(item);
      return arr;
   },

   prepend: function (arr, item) {

      var tempArr = [];
      tempArr.push(item);
      for (var index in arr) {
         tempArr.push(arr[index]);
      }
      arr = tempArr;
      return arr;
   },

   curtail: function (arr) {

      var tempArr = [];
      for (i = 1; i < arr.length; i++) {
         tempArr.push(arr[i])
      }
      arr = tempArr;
      return arr;
   },

   concat: function (arr1, arr2) {
      
      var concatArr = [];
      for( i = 0; i < arr2.length ; i++ ) {
          arr1.push(arr2[i])
      }
      concatArr = arr1;
      return concatArr;
   },

   insert: function (arr, item, index) {
      
      var concatArr = [];
      for( i = 0; i < index ; i++ ) {
          concatArr.push(arr[i])
      }
      concatArr.push(item);
      for( i = index; i < arr.length ; i++ ) {
          concatArr.push(arr[i])
      }
      return concatArr;
   },

   count: function (arr, item) {
      
      var count = 0;
      for( i = 0; i < arr.length ; i++ ) {
          if(arr[i] === item)
              count ++;
      }
      return count;
   },

   duplicates: function (arr) {
      
      var count = 0;
      var duplicates = [];
      for( var i = 0; i < arr.length ; i++ ) {
          for( var j = i + 1; j< arr.length; j++ ) {
              if(arr[i] === arr[j]) {
                  duplicates.push(arr[i]);
              }
          }
      }
      return duplicates;
   },

   square: function (arr) {
              
    var squares = [];
    for( var i = 0; i < arr.length ; i++ ) {
        squares.push(arr[i] * arr[i]);
    }
    return squares;
   },

   findAllOccurrences: function (arr, target) {
      
      var occurance = [];
      for( var i = 0; i < arr.length ; i++ ) {
          if(arr[i] === item){
              occurance.push(i);
          }
      }
      return occurance;
   }
};

