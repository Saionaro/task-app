const keep = store => {
   let saveTimeout;
   store.subscribe(_ => {
      if(!saveTimeout) {
         window.localStorage.store = JSON.stringify(store.getState());
         console.log('STORE SAVED');
         saveTimeout = setTimeout(s => {
            saveTimeout = null;
         }, 500);
      }
   });
};

export default {
   keep: keep
};