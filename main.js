'use strict';

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: 'Ciao classe 110, prova Vue Js',
      ciao: 'sono elemento foto',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3WaP8XZ0Z8Yw8jTuX7PD736bzDovzhXe7ZEFOCX4YecPAcADXOxVnWM9llXp3xHQ9vzU&usqp=CAU',
    };
  },
}).mount('#app');
